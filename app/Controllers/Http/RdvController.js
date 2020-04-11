'use strict'


    
const RdvModel = use('App/Models/Rdv')



class RdvController {

    async index ({ request, response }) {
        let Rdvs = await RdvModel.all()

        return response.json(Rdvs)
      }

      async store({ request, response} ){

        const data = request.only(['rdv_date', 'patient_id', 'rdv_description'])
            const RendezVous = new RdvModel()
            RendezVous.rdv_date = data.rdv_date
            RendezVous.patient_id = data.patient_id
            RendezVous.rdv_description = data.rdv_description


            await RendezVous.save()
            return response.status(201).json(RendezVous)


      }


      async show({params,response})
      {
            const rendezVous = await RdvModel.find(params.id)

            
            return response.json(rendezVous)


      }

      async update({params,request, response})
      {
        const rdvInfo = request.only(['rdv_date', 'patient_id', 'rdv_description'])

            
        const rendezVous = await RdvModel.find(params.id)

        if(!rendezVous){

            return response.status(404).json({data : "data not found"})

        }
        RendezVous.rdv_date = rendezVous.rdv_date
        RendezVous.patient_id = rendezVous.patient_id
        RendezVous.rdv_description = rendezVous.rdv_description


        await RendezVous.save()
        return response.status(200).json(RendezVous)

      } 

      async delete({params, response})
      {
        

            
        const result = await RdvModel.find(params.id)

        if(!result){

            return response.status(404).json({data : "data not found to be deleted ! "})

        }


        await result.delete()
        return response.status(204).json(null)

      } 
}

module.exports = RdvController
