'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
class PatientSchema extends Schema {
  up () {
    this.create('patients', (table) => {
      table.increments()
      
      table.string('name').nullable()
      table.string('age').nullable()
      table.string('poid').nullable()

     

    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientSchema
