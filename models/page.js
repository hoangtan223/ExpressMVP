"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Page extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.PageConcept, { foreignKey: "page_id" });
      this.belongsToMany(models.Concept, { through: models.PageConcept });
    }
  }
  Page.init(
    {
      url: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Page",
      underscored: true,
    }
  );
  return Page;
};
