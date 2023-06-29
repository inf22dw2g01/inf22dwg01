'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Artista', [{
      nome: 'Moon',
      pais: 'Portugal',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Robin',
      pais: 'Burkina Faso',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Quince',
      pais: 'Afghanistan',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Jade',
      pais: 'Malta',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Green',
      pais: 'Mauritania',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Case',
      pais: 'Paraguay',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Angel Freedom',
      pais: 'Barbados',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Justin May',
      pais: 'Argentina',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Don Ball',
      pais: 'North Macedonia',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'John',
      pais: 'Costa Rica',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Stuart Cross',
      pais: 'Equatorial Guinea',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Patch',
      pais: 'Cook Islands',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Thunder',
      pais: 'Kiribati',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'John',
      pais: 'Bangladesh',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Mercy',
      pais: 'Iraq',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Green',
      pais: 'Holy See',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Stitch',
      pais: 'Senegal',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Tank',
      pais: 'Paraguay',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Sky',
      pais: 'Portugal',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Fade',
      pais: 'Portugal',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Gabby Nash',
      pais: 'Fiji',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Gene Thompson',
      pais: 'Togo',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Clem Sinclair',
      pais: 'United States',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Sam Fay',
      pais: 'Haiti',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Pride',
      pais: 'Mozambique',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Enigma',
      pais: 'Palau',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Cell',
      pais: 'Portugal',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'John',
      pais: 'Ethiopia',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Brett Duncan',
      pais: 'Albania',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Raylee Paige',
      pais: 'Korea',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Artista', null, {});
  }
};
