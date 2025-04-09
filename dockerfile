FROM node:22-slim AS base

# Step 1 安裝依賴套件
# Install dependencies only when needed
FROM base AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# libc6-compat 是一個兼容層，用於在 Alpine Linux 上運行需要 GNU C 庫（glibc）的應用程序。
# RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
# RUN rm -rf node_modules package-lock.json
# COPY package.json package-lock.json* ./
# RUN cat package.json
# RUN cat package-lock.json
COPY . .
RUN npm ci
# RUN \
#   if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
#   elif [ -f package-lock.json ]; then npm ci; \
#   elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
#   else echo "Lockfile not found." && exit 1; \
#   fi

# Step2 Build Code
# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED=1

# RUN \
#   if [ -f yarn.lock ]; then yarn run build; \
#   elif [ -f package-lock.json ]; then npm run build; \
#   elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
#   else echo "Lockfile not found." && exit 1; \
#   fi
# RUN npm run build

##############################
# Step3 啟動NextJS網站 (Dev)##
##############################
FROM base AS dev-runner
WORKDIR /app
COPY --from=deps /app ./
# RUN echo "check package.json"
RUN cat package.json
CMD sh -c "if [ \"$NODE_ENV\" = \"production\" ]; then node server.js; else npm run dev; fi"


############################
##          OR            ##
############################


###############################
# Step3 啟動NextJS網站 (Prod)##
###############################

##############################################
# Production 不需要所有檔案                   #
# 只需要 build 完之後的 standalone 和 static  #
##############################################

# Build prod
FROM base AS prod-builder
WORKDIR /app
COPY --from=deps /app ./
RUN npm run build
RUN ls
# RUN cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone
RUN cp -r .next/static .next/standalone/.next/ && cp -r ./public .next/standalone

# Production image, copy all the files and run next
FROM base AS prod-runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=prod-builder /app/public ./public
# 複製 standalone 目錄
# COPY --from=prod-builder /app/.next/standalone ./app
# 複製 static 目錄
# COPY --from=prod-builder /app/.next/static ./app/.next/static
# next build && cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone/

COPY --from=prod-builder /app/.next/standalone /app/.next/standalone

# 一次性更改所有者
# RUN chown -R nextjs:nodejs ./

# 設置環境變數
ENV PORT=3000
# ENV WEBSITES_PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production

# 聲明監聽Port
EXPOSE 3000

# 切換到 nextjs 用戶
# USER nextjs

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
# 設置啟動命令
# CMD ["node", "server.js"]
# CMD ["npm", "run", "dev"]
# CMD sh -c "if [ \"$NODE_ENV\" = \"production\" ]; then node server.js; else npm run dev; fi"
# CMD sh -c "if [ \"$NODE_ENV\" = \"production\" ]; then node /app/.next/standalone/server.js; else npm run dev; fi"

CMD ["node", "/app/.next/standalone/server.js"]
