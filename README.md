# IoT-Toolbox-Backend

## Database

Docker: https://docs.docker.com/install/linux/docker-ce/ubuntu/

Create directory
`sudo mkdir -p $HOME/docker/volumes/postgres`

Create container
`sudo docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres:11.5`

Drop database: `sudo docker exec -it f9d4f17ac0975ae98fdad4a2a89e607d521f4575fd91a45a2d5019533c45a19c psql -U postgres -d postgres -c "DROP DATABASE iot_db;"`

Create database: `sudo docker exec -it f9d4f17ac0975ae98fdad4a2a89e607d521f4575fd91a45a2d5019533c45a19c psql -U postgres -d postgres -c "CREATE DATABASE iot_db;"`

Dump : ```sudo docker exec -t 46a8a6fb3f28 pg_dumpall -c -U postgres > dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql````