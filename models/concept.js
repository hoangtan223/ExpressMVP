"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Concept extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.PageConcept, { foreignKey: "concept_id" });
      this.belongsToMany(models.Page, { through: models.PageConcept });
    }
  }
  Concept.init(
    {
      conceptName: DataTypes.STRING,
      definition: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Concept",
      underscored: true,
    }
  );
  return Concept;
};
