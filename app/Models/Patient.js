'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Patient extends Model {

    rdv(){
        return this.hasMany('App/Models/Rdv')
      }


      
}

module.exports = Patient
