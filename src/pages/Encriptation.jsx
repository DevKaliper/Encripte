import { useState } from "react";  //  Importar useState
import {encripter} from '../utils/encripter'  //  Importar las funciones de encriptar y desencriptar

const Encriptation = () => {
    const [text, setText] = useState('');  //  Crear un estado para el texto a encriptar 
    const [encryptedText, setEncryptedText] = useState('');  //  Crear un estado para el texto encriptado  


const handleChangeEncryptedText = (e) => { 
    setText(e.target.value);  //  Actualizar el estado del texto a encriptar
} //  Función para manejar el cambio del texto a encriptar


const handleEncryptedText = () => {
    setEncryptedText(encripter(text));  //  Actualizar el estado del texto encriptado
} //  Función para manejar el texto encriptado



  return (
    <>
      <div className="flex min-h-[80vh] w-full flex-col items-center justify-center gap-3">
        <h2 className="text-2xl font-semibold mb-8 md:text-4xl">Encriptacion</h2>

        {/* div donde estarán los text Areas */}
        <div className="flex h-full w-full items-center justify-center gap-3">

            {/* AQUÍ  COLOCARÉ EL TEXTO A ENCRIPTAR */}
          <div className="flex flex-col w-1/2 h-full justify-center items-center">
              <h4 className="text-center font-semibold md:text-2xl m-4">El texto a encriptar</h4>
            <textarea
            onChange={handleChangeEncryptedText}
              placeholder="Escribe aquí tu texto..."
              className="textarea-bordered textarea textarea-lg max-h-full w-full max-w-4xl"></textarea>
              <button onClick={handleEncryptedText} className="btn glass m-5 md:text-xl">Encriptar</button>
          </div>

               {/* AQUÍ  COLOCARÉ EL TEXTO ENCRIPTADO */}
          <div className="flex flex-col w-1/2 h-full justify-center items-center">
          <h4 className="text-center font-semibold md:text-2xl m-4">Texto encriptado</h4>
            <textarea
              placeholder="..."
              value={encryptedText}
              onChange={() => {}} //  No se puede cambiar el texto encriptado
              className="textarea-bordered textarea textarea-lg w-full max-w-4xl"></textarea>
              <button className="btn glass m-5 md:text-xl">Copiar al portapapeles</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Encriptation;
