'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RdvsSchema extends Schema {
  up () {
    this.create('rdvs', (table) => {
      table.increments()

      table.string('rdv_date').nullable()
      table.string('patient_id').nullable()
      table.string('rdv_description').nullable()

      table.timestamps()  
    })
  }

  down () {
    this.drop('rdvs')
  }
}

module.exports = RdvsSchema
