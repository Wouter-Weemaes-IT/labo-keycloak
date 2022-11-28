FROM node:lts


COPY package.json package.json
COPY package-lock.json package-lock.json
COPY scrumboard.json scrumboard.json
RUN npm install -g json-server

CMD [ "json-server", "scrumboard.json"]