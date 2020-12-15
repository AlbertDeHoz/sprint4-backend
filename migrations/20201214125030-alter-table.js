'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users','rol',{type: Sequelize.STRING });
  },

  down: async (queryInterface, Sequelize) => {
    /**np
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
