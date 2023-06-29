// Normatizar o código, ajuda evitar gambiarras 
'use strict';

// Incluir arquivo com as variaveis de ambiente
require('dotenv').config();

// Permite trabalhar com o sistema de arquivos do computador
const fs = require('fs');

// Fornece utilitários para trabalhar com caminhos de arquivos e diretórios
const path = require('path');

// Sequelize é um ORM para Node.js, que tem suporte vários base de dados
// ORM mapeamento objeto-relacional, as tabelas do base de dados são representadas em classes e os registros das tabelas seriam instâncias dessas classes
const Sequelize = require('sequelize');

// Permite obter informações do processo na página atual
const process = require('process');

// Permite obter parte do caminho para o arquivo
const basename = path.basename(__filename);

// Verificar se deve utilizar a variável global ou 'development'
const env = process.env.NODE_ENV || 'development' ;

// Incluir o arquivo
const config = require(__dirname + '/../config/config.js')[env];

// Criar a constate com objeto vazio
const db = {};

// Criar a variável que recebe a conexão com base de dados
let sequelize;
// Verificar qual configuração de base de dados você deseja usar
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    // Usar as configurações do arquivo "config/database.js"
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Verificar a conexão com base de dados
try {
  console.log("Conexão com o base de dados realizado com sucesso!");
} catch (error) {
  console.error("Erro: Conexão com o base de dados não realizado com sucesso! ", error);
}

// Identificar o MODEL
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Atribuir a conexão com a base de dados para o objeto db
db.sequelize = sequelize;
db.Sequelize = Sequelize;


// Exportar a instrução que está dentro da constante db 
module.exports = db;

