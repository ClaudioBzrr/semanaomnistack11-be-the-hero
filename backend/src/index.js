const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
//recurso/rota : o recurso é uma ação(tabela no banco entidade) feita através de uma rota.

/**
 * Métodos HTTP : 
 * 
 * GET: Buscar uma informação no Back-End.
 * POST: Criar uma informação no Back-End.
 * PUT: Alterar uma informação no Back-End.
 * DELETE: Deletar uma informação no Back-End.
 * 
 */



 /**
  * Tipos de Parâmetros:
  * 
  * Query params: Parâmetros nomeados enviados na rota após os simbolo de '?',
  * Servem para filtros e paginação.
  * 
  * Route Params: São parâmetros usados para identificar recursos.ex:/users/1 
  * irá buscar o usuário com id = 1.
  * 
  * Request Body: É o corpo da requisção, ultilizado para criar ou alterar recursos.
  * 
  */



  /**
   * Tipos e Diferenças entre bancos de dados.
   * 
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NOSQL: MongoDB, CouchDB, etc.
   * 
   */



   /**
    * Formas de comunicação com o banco de dados:
    * 
    * DRIVER: SELECT * FROM users
    * 
    * Query Builder : table('users').select('*').where('')
    */



app.listen(3333)


