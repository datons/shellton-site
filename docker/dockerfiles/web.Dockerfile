# syntax=docker/dockerfile:1

FROM oven/bun:1.3-slim AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM oven/bun:1.3-slim
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=3000
COPY --from=builder --chown=bun:bun /app/build ./build
COPY --from=builder --chown=bun:bun /app/package.json ./package.json
COPY --from=builder --chown=bun:bun /app/node_modules ./node_modules
USER bun
EXPOSE 3000
CMD ["bun", "build/index.js"]
