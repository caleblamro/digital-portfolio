# Production image for Dokploy. Replaces the Nixpacks build, which shipped
# Node 18 (EOL); node:22-alpine tracks the patched Node 22 line.

FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@10.18.2 --activate
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm run build

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
COPY --from=build --chown=node:node /app ./
USER node
EXPOSE 3000
# `next start` directly: corepack's pnpm is prepared for root, not `node`.
CMD ["node_modules/.bin/next", "start"]
