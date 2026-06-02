# ---------- Dependencies ----------
FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm config set fetch-retry-maxtimeout 600000 \
 && npm config set fetch-retry-mintimeout 20000 \
 && npm ci

# ---------- Builder ----------
FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ---------- Production ----------
FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]