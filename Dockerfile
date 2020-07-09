FROM postgres:11.5 AS postgres
ENV DB_DATABASE="iot_db"
ENV DB_USERNAME="postgres"
ENV DB_PASS="postgres"
ENV POSTGRES_PASSWORD="postgres"
ENV POSTGRES_USER="postgres"