FROM --platform=linux/amd64 node:18-alpine
RUN apk add --no-cache libc6-compat git python3 py3-pip make g++ libusb-dev eudev-dev linux-headers

WORKDIR /app
COPY . .

# Set working directory to the web app
WORKDIR apps/web

# Enable corepack and configure yarn
RUN corepack enable
RUN yarn config set httpTimeout 300000

# Run any custom post-install scripts
# RUN yarn install --immutable
# RUN yarn after-install

# Set environment variables
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 8080

# Expose the port
EXPOSE 8080

# Command to start the application
CMD ["yarn", "static-serve"]