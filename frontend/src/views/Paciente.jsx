import { useEffect, useState } from 'react';
// import { getAllVets } from "../api/vets.api";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    // console.log(paciente)

    const { nombre, propietario, email, fecha, sintomas, id } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?');

        if (respuesta) {
            eliminarPaciente(id);
        }
    };
    return (
        <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl mb-5">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Paciente;
