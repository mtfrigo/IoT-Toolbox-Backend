module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'iot_db',
  define: {
      timestamps: true,
      underscored: true,
  }
};