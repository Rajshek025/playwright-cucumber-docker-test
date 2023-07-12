FROM node:18

# Get the latest version of playwright
#FROM mcr.microsoft.com/playwright:v1.36.0-jammy
FROM mcr.microsoft.com/playwright:focal

#docker run -it --rm --ipc=host mcr.microsoft.com/playwright:v1.36.0-jammy /bin/bash

# copy project
COPY . .

# Get the needed libraries to run Playwright
RUN apt-get update && apt-get -y install libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev

#Install dependencies
RUN npm install

# Install browsers
RUN npx playwright install --with-deps chromium

