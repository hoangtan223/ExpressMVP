module.exports = {
  development: {
    database: "cureka_development",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false,
  },
  test: {
    database: "cureka_test",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false,
  },
  production: {
    username: "cureka",
    password: process.env.PROD_DB_PASSWORD,
    host: process.env.PROD_DB_HOST,
    database: "postgres",
    dialect: "postgres",
  },
};
