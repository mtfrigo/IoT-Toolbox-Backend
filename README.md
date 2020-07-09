# IoT Toolbox - Easing the Setup of IoT Applications

This project contains the **IoT Toolbox** Prototype, an IoT platform developed for easing the setup of IoT environments and their applications.

This specific project deals with the Back-End side of the project. The Front-End documentation is provided as the GitHub project [IoT Toolbox Front-End](https://github.com/mtfrigo/IoT-Toolbox-Frontend).

# Presentation

![TOOLBOX DASHBOARD](picture.png)

The toolbox contains common building blocks that are oftentimes used in the creation of IoT environments. These building blocks can represent hardware components, network protocols, message brokers, gateways, IoT platforms, or any other software component. A building block consists of a high-level description to be understandable by domain experts as well as concrete implementations. The building blocks are provided by experts in building IoT environments and are included in a toolbox, which can be accessed by domain experts.

Furthermore, we introduce a business process based approach to set up the IoT environments based on the suggested building blocks. Hence, it makes sense to use business process management for orchestration of these steps. In this paper, we use the Business Process.

How to install and use the Toolbox is explained in the following.

## Installation (for developers)

The following software components are used in order to set up the toolbox: 
* Back-End: [NodeJS 12.18.0](https://nodejs.org/en/), [Docker](https://docs.docker.com/get-docker/) and NPM 6.14.4.
* Front-End: ReactJS.

### 1.1 Database

* Using available container

```
docker create network iot-toolbox
docker run --network iot-toolbox -d -p 5432:5432 --name toolbox-postgres  mfrigo/iot-toolbox-postgres:version1.0
```

* Building and running container

```
docker create network iot-toolbox
docker build --target postgres -t postgres:11.5  .
docker run --network iot-toolbox -d -p 5432:5432 --name toolbox-postgres  postgres:11.5
```


* Creating and seeding Database
```
npm run db:start
```






### 1.2 BPMS
* Using Camunda available container
```
docker run --network iot-toolbox -d -p 8080:8080 camunda/camunda-bpm-platform:latest
```

### 1.3 Dependencies
```
npm install
```


### Running the application:
```
npm run start
```

The default server port is 3333. 


To setup the front-end go to [IoT Toolbox Front-End](https://github.com/mtfrigo/IoT-Toolbox-Frontend) project.

## REST API

A REST API is implemented using NodeJS. 

For the API complete reference click [here](https://github.com/mtfrigo/IoT-Toolbox-Backend/wiki/API-Reference)


## Running instance

A running instance of the prototype can be accessed [here](https://github.com/mtfrigo/IoT-Toolbox-Backend) [OFFLINE]
