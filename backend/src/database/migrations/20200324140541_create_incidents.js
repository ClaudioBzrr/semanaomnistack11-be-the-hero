
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments()//criando o id que se auto incrementa.
        
        //criando os campos da tabela
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()

        //criando a chav estrangeira para o relacionamento
        table.string('ong_id').notNullable()
        table.foreign('ong_id').references('id').inTable('ongs')

    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
  };
  