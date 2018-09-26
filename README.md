# About
This is the UI portion of the microservice application. It is a simple react SPA that reaches out to the API (https://gitlab.i2p.online/microservices/api)

## Setup

- npm install
- npm run build

## Start

npm start


## Notes

After build, you can run this locally in a container.


# Pull the built image down
docker pull registry.i2p.online/microservices/ui/master:ui

# Run the image in a container, forward port 80 to 8080 on local machine
docker run --rm -it -p 8080:80 registry.i2p.online/microservices/ui/master:ui

#Visit site
localhost:8080