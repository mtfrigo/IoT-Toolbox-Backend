# IoT Toolbox - Easing the Setup of IoT Applications

This project contains the **IoT Toolbox** Prototype, an IoT platform developed for easing the setup of IoT environments and their applications.

This specific project deals with the Back-End side of the project. The Front-End documentation is provided as the GitHub project [IoT Toolbox Frontend](https://github.com/mtfrigo/IoT-Toolbox-Frontend).

# Presentation

The toolbox contains common building blocks that are oftentimes used in the creation of IoT environments. These building blocks can represent hardware components, network protocols, message brokers, gateways, IoT platforms, or any other software component. A building block consists of a high-level description to be understandable by domain experts as well as concrete implementations. The building blocks are provided by experts in building IoT environments and are included in a toolbox, which can be accessed by domain experts.

Furthermore, we introduce a business process based approach to set up the IoT environments based on the suggested building blocks. Hence, it makes sense to use business process management for orchestration of these steps. In this paper, we use the Business Process.

How to install and use the Toolbox is explained in the following.

## Installation (for developers)

The following software components are used in order to set up the toolbox: 
* Back-End: [NodeJS](https://nodejs.org/en/), [Docker](https://docs.docker.com/get-docker/) and NPM.
* Front-End: ReactJS.

### 1.1 Installation on Linux

* Database first run:

Create directory
`sudo mkdir -p $HOME/docker/volumes/postgres`

Create container
`sudo docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres:11.5`

Create database: `sudo docker exec -it f9d4f17ac0975ae98fdad4a2a89e607d521f4575fd91a45a2d5019533c45a19c psql -U postgres -d postgres -c "CREATE DATABASE iot_db;"`

Go to the root folder after cloning this repository and use the command: `npm install`.
After all libraries been installed you can start the react server by using the command: `npm start`.
The default server port is 3032. 

MIGRATIONS AND SEEDS

To setup the front-end go to installion section on the [IoT Toolbox Frontend](https://github.com/mtfrigo/IoT-Toolbox-Frontend) project.

### 1.2 Installation on Windows
TODO

### 1.3 Installation on Mac Os
TODO

### 1.4 Installation using Docker
TODO


## Database

Create directory
`sudo mkdir -p $HOME/docker/volumes/postgres`

Create container
`sudo docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres:11.5`

Drop database: `sudo docker exec -it f9d4f17ac0975ae98fdad4a2a89e607d521f4575fd91a45a2d5019533c45a19c psql -U postgres -d postgres -c "DROP DATABASE iot_db;"`

Create database: `sudo docker exec -it f9d4f17ac0975ae98fdad4a2a89e607d521f4575fd91a45a2d5019533c45a19c psql -U postgres -d postgres -c "CREATE DATABASE iot_db;"`

Dump : `sudo docker exec -t 46a8a6fb3f28 pg_dumpall -c -U postgres > dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql`
