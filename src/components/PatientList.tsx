import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"
import dogImage from '../images/dog.png';

export default function PatientList() {

  const patients = usePatientStore( state => state.patients )

  console.log(patients)
  return (
      <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
          {patients.length ? (
            <>
              <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
              </p>
              {patients.map( patient => (
                
                <PatientDetails
                  key={ patient.id }
                  patient={ patient }
                />
              
              ))}
            </>
            
          ) : (
              <>
                <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                  Comienza agregando pacientes {''}
                  <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                </p>
                <h3 className="text-gray-800 text-3xl text-center">No hay Pacientes</h3>
                  <div className="flex justify-center">
                      <img src={dogImage} alt="Dog" className="w-48 h-auto" />
                  </div>
              
              </>
            
        )}
      </div>
  )
}
