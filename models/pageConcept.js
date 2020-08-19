"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PageConcept extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Page, { foreignKey: "page_id", as: "page" });
      this.belongsTo(models.Concept, {
        foreignKey: "concept_id",
        as: "concept",
      });
    }
  }
  PageConcept.init(
    {
      pageId: DataTypes.INTEGER,
      conceptId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PageConcept",
      underscored: true,
    }
  );
  return PageConcept;
};
