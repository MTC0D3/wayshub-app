# Stage 1: Build React App
FROM --platform=$BUILDPLATFORM node:12-alpine AS builder

WORKDIR /app

# 🧠 Copy dependency descriptors first
COPY package.json package-lock.json ./

# ⚡ Install dependencies
RUN npm ci

# 📦 Copy source code
COPY . .

# 🏗️ Build React app
RUN npm run build

# Stage 2: Serve with Nginx
FROM --platform=$TARGETPLATFORM nginx:alpine

# 🚚 Copy built static files
COPY --from=builder /app/build /usr/share/nginx/html

# 🧾 Custom Nginx config (optional)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# 🌐 Expose HTTP port
EXPOSE 80

# 🚀 Start Nginx
CMD ["nginx", "-g", "daemon off;"]