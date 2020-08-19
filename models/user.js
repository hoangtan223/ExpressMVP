"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ApiToken, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      picture: DataTypes.STRING,
      givenName: DataTypes.STRING,
      familyName: DataTypes.STRING,
      locale: DataTypes.STRING,
      sourceUserId: DataTypes.STRING,
      source: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      underscored: true,
    }
  );
  return User;
};
