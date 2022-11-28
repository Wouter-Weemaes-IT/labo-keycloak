add this to your hosts file
```
127.0.0.1	keycloak
```
run the docker-compose by doing this:
```
docker-compose up

```
you also have to start the db with:


```
json-server scrumboard.json
```
And manually start the nodejs API

```
npm start
```

Go into the opa directory and run: 
```
sudo docker run -it --name opa-bundle-server --rm -p 8182:80 -v $PWD/nginx.conf:/etc/nginx/conf.d/default.conf -v $PWD/public:/etc/nginx/html nginx
sudo docker run -it --name opa-api-server --rm -p 8181:8181 --link opa-bundle-server -v $PWD:/data openpolicyagent/opa run --server --addr :8181 -c /data/config.yaml
```

