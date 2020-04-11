'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.on('/').render('welcome')
Route.group(()=>{

Route.get('rdvs','RdvController.index')
Route.post('rdv','RdvController.store')
Route.get('rdv/:id','RdvController.show')
Route.put('rdv/:id','RdvController.update')
Route.delete('rdv/:id','RdvController.delete')

}).prefix('api')

Route.group(()=>{

    Route.get('patients','PatientController.index')
    Route.post('patient','PatientController.store')
    Route.get('patient/:id','PatientController.show')
    Route.put('patient/:id','PatientController.update')
    Route.delete('patient/:id','PatientController.delete')
    
    }).prefix('api')