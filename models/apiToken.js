"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ApiToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    }
  }
  ApiToken.init(
    {
      token: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      expiredAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ApiToken",
      underscored: true,
    }
  );
  return ApiToken;
};
