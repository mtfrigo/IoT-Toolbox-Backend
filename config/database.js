module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'iot_db',
  define: {
      timestamps: true,
      underscored: true,
  }
};