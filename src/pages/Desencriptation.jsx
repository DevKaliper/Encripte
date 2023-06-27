import { useState } from "react";  //  Importar useState
import {desEncripter} from '../utils/encripter'  //  Importar las funciones de encriptar y desencriptar
import { enqueueSnackbar } from 'notistack';  //  Importar el snackbar para mostrar mensajes de error o de éxito
import DeleteIcon from '@mui/icons-material/Delete';  //  Importar el icono de borrar
import LockOpenIcon from '@mui/icons-material/LockOpen'; //  Importar el icono de candado abierto

import ContentCopyIcon from '@mui/icons-material/ContentCopy'; //  Importar el icono de copiar al portapapeles

const Desencriptation = () => {
    const [text, setText] = useState('');  //  Crear un estado para el texto a encriptar 
    const [desencryptedText, setDesencryptedText] = useState('');  //  Crear un estado para el texto encriptado  


const handleChangeEncryptedText = (e) => { 
    setText(e.target.value);  //  Actualizar el estado del texto a encriptar
} //  Función para manejar el cambio del texto a encriptar


const handleEncryptedText = () => {
    setDesencryptedText(desEncripter(text));  //  Actualizar el estado del texto encriptado
} //  Función para manejar el texto encriptado

const copyToClipboard = str => {
  if (str){
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject("The Clipboard API is not available.");
  }
  else {
    return Promise.reject("No hay texto para copiar");
  }
  
};  //  Función para copiar al portapapeles



const notiStacks = () => {
  if (desencryptedText === '') {

    // Mostrar mensaje de error si no hay texto para copiar
    
    enqueueSnackbar('No hay texto para copiar', { variant: 'error' });
  }
  else {
    // Mostrar mensaje de éxito si se copió el texto al portapapeles
    enqueueSnackbar('Texto copiado al portapapeles', { variant: 'success' });
  }
  return 


} //  Función para mostrar mensajes de error o de éxito




const handleCopyToClipboard = () => {
  

  copyToClipboard(desencryptedText)
    notiStacks()
  return 
}// Copiar el texto encriptado al portapapeles




  return (
    <>
      <div className="flex min-h-[80vh] w-full flex-col items-center justify-center gap-3">
        <h2 className="text-2xl font-semibold mb-8 md:text-4xl">Desencriptacion</h2>

        {/* div donde estarán los text Areas */}
        <div className="flex h-full w-full items-center justify-center gap-3">

            {/* AQUÍ  SE COLOCA EL TEXTO ENCRIPTADO */}
          <div className="flex flex-col w-1/2 h-full justify-center items-center">
              <h4 className="text-center font-semibold md:text-2xl m-4">El texto a desencriptar</h4>
            <textarea
            onChange={handleChangeEncryptedText}
              placeholder="Escribe aquí tu texto..."
              className="textarea-bordered textarea textarea-lg max-h-full w-full max-w-4xl"></textarea>
              <button onClick={handleEncryptedText} className="btn glass m-5 md:text-xl">Desencriptar <LockOpenIcon/></button> 
             
          </div>

               {/* AQUÍ  SE COLOCA EL TEXTO DESENCRIPTADO */}
          <div className="flex flex-col w-1/2 h-full justify-center items-center">
          <h4 className="text-center font-semibold md:text-2xl m-4"> Texto desencriptado</h4>
            <textarea
              placeholder="..."
              value={desencryptedText}
              onChange={() => {}} //  No se puede cambiar el texto desencriptado
              className="textarea-bordered textarea textarea-lg w-full max-w-4xl"></textarea>


             
              <div className="flex justify-center items-center"> 
              {/* AL hacer click se copia el texto encriptado al portapapeles */}
                <button className="btn glass m-5 md:text-xl" onClick={handleCopyToClipboard}> <span className="hidden xl:flex ">Copiar al portapapeles</span><ContentCopyIcon/> </button>
                {/* AL hacer click se borra el texto encriptado */}
              <button className="btn glass m-5 md:text-xl" onClick={() => setDesencryptedText("")} > <span className="hidden xl:flex">Borrar texto</span> <DeleteIcon/> </button>
              </div>
              
          </div>
        </div>
      </div>
    </>
  );
};


export default Desencriptation;
