-- keycloak
CREATE USER keycloak WITH ENCRYPTED PASSWORD 'keycloak';
CREATE DATABASE keycloak;
GRANT ALL PRIVILEGES ON DATABASE keycloak TO keycloak;
CREATE USER nodeclient WITH ENCRYPTED PASSWORD 'nodepasswd';
CREATE DATABASE scrumboard;
GRANT ALL PRIVILEGES ON DATABASE scrumboard TO nodeclient;

