'use strict'
const PatientModel = use('App/Models/Patient')

class PatientController {


    async index ({ request, response }) {
        let patients = await PatientModel.all()

        return response.json(patients)
      }

      async store({ request, response} ){

        const data = request.only(['name', 'age', 'poid'])
            const Patient = new PatientModel()
            Patient.name = data.name
            Patient.age = data.age
            Patient.poid = data.poid


            await Patient.save()
            return response.status(201).json(Patient)


      }


      async show({params,response})
      {
            const patient = await PatientModel.find(params.id)

            
            return response.json(patient)


      }

      async update({params,request, response})
      {
        const patientInfo = request.only(['name', 'age', 'poid'])

            
        const patient = await PatientModel.find(params.id)

        if(!patient){

            return response.status(404).json({data : "data not found"})

        }
        patient.rdv_date = patientInfo.rdv_date
        patient.patient_id = patientInfo.patient_id
        patient.rdv_description = patientInfo.rdv_description


        await patient.save()
        return response.status(200).json(patient)

      } 

      async delete({params, response})
      {
        

            
        const result = await PatientModel.find(params.id)

        if(!result){

            return response.status(404).json({data : "data not found to be deleted ! "})

        }


        await result.delete()
        return response.status(204).json(null)

      } 
}

module.exports = PatientController
