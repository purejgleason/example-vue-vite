# Simple Vite Application

This is a simple Vite application with things like testing, proxying, etc working.

## Getting started

### Prereqs

1. Install dependencies with `npm i`
2. Ensure Docker desktop is installed
3. Make sure you have a cloud function running and `CLOUD_URL` environment variable pointing at this service.
   1. This service should provide environment configuration in the form of a JSON object.

       ```
       {
         "auth0": {
           "domain": "...",
           "clientId": "...",
           "audience": "...",
           "defaultScope": "view:app"
         }
       }
       ```

## Run with Proxy

### Using Vite

3. Run with `npx vite`

### Using Docker

3. Run with `./run.sh`

## Configuring the Cloud endpoint

To configure the cloud endpoint that houses the environment information please change the value in `docker-compose.yml`

## TODO

* We need to get ssl working locally so that we can test using auth0