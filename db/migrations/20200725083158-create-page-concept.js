"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("page_concepts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      page_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "pages",
            key: "id",
          },
        },
      },
      concept_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "concepts",
            key: "id",
          },
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint("page_concepts", {
      fields: ["page_id", "concept_id"],
      type: "unique",
      name: "page_id_concept_id_uniqueness",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("page_concepts");
  },
};
