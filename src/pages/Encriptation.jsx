import { useState } from "react"; //  Importar useState
import PropTypes from 'prop-types'; // Importar PropTypes
import { encripter } from "../utils/encripter"; //  Importar las funciones de encriptar y desencriptar
import { enqueueSnackbar } from "notistack"; //  Importar el snackbar para mostrar mensajes de error o de éxito
import DeleteIcon from "@mui/icons-material/Delete"; //  Importar el icono de borrar
import LockIcon from "@mui/icons-material/Lock"; //  Importar el icono de candado

import ContentCopyIcon from "@mui/icons-material/ContentCopy"; //  Importar el icono de copiar al portapapeles


const EncriptationKey = ({words}) => {
 const wordsMap = Array(words).fill("");
  return (
    <div>
      {wordsMap.map((word, index) => (
      <div key={word + index} className="col-12 mt-4 d-flex justify-content-center">
        <input
          type="text"
          className="input input-bordered input-lg"
          placeholder={`Palabra ${index + 1}`}
        />
        

      </div>
      ))}
    </div>
  )
}
EncriptationKey.propTypes = {
  words: PropTypes.number.isRequired,
};


const Encriptation = () => {
  const [text, setText] = useState(""); //  Crear un estado para el texto a encriptar
  const [encryptedText, setEncryptedText] = useState(""); //  Crear un estado para el texto encriptado
  const [words, setWords] = useState(null); //  Crear un estado para la cantidad de palabras

  const handleChangeEncryptedText = (e) => {
    setText(e.target.value); //  Actualizar el estado del texto a encriptar
  }; //  Función para manejar el cambio del texto a encriptar

  const handleEncryptedText = () => {
    setEncryptedText(encripter(text)); //  Actualizar el estado del texto encriptado
  }; //  Función para manejar el texto encriptado

  const copyToClipboard = (str) => {
    if (str) {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        return navigator.clipboard.writeText(str);
      return Promise.reject("The Clipboard API is not available.");
    } else {
      return Promise.reject("No hay texto para copiar");
    }
  }; //  Función para copiar al portapapeles

  const notiStacks = () => {
    if (encryptedText === "") {
      // Mostrar mensaje de error si no hay texto para copiar

      enqueueSnackbar("No hay texto para copiar", { variant: "error" });
    } else {
      // Mostrar mensaje de éxito si se copió el texto al portapapeles
      enqueueSnackbar("Texto copiado al portapapeles", { variant: "success" });
    }
    return;
  }; //  Función para mostrar mensajes de error o de éxito

  const handleCopyToClipboard = () => {
    copyToClipboard(encryptedText);
    notiStacks();
    return;
  }; // Copiar el texto encriptado al portapapeles

  return (
    <>
      <div className="flex min-h-[80vh] w-full flex-col items-center justify-center gap-3">
        <h2 className="text-2xl font-semibold mb-8 md:text-4xl">
          Encriptacion{" "}
        </h2>

        {/* div donde estarán los text Areas */}
        <div className="flex h-full w-full items-center justify-center gap-3 mx-3">
          {/* AQUÍ  COLOCARÉ EL TEXTO A ENCRIPTAR */}
          <div className="flex flex-col w-1/2 h-full justify-center items-center">
            <h4 className="text-center font-semibold md:text-2xl m-4">
              El texto a encriptar
            </h4>
            <textarea
              onChange={handleChangeEncryptedText}
              placeholder="Escribe aquí tu texto..."
              className="textarea-bordered textarea textarea-lg max-h-full w-full max-w-4xl"></textarea>

            <div className="flex justify-center items-center">
              <button
                onClick={handleEncryptedText}
                disabled
                className="btn glass m-5 md:text-xl">
                Encriptar <LockIcon />
              </button>
              <div className="drawer z-50">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label
                    htmlFor="my-drawer"
                    className="btn btn-primary drawer-button">
                    Configura las claves secretas
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"></label>
                  <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <h4 className="font-bold mb-5 text-center">
                      ¿Cuantas claves quieres usar para encriptar tu mensaje?
                    </h4>
                    <div className="flex self-center">
                      <button
                        className="btn flex justify-center items-center"
                        onClick={() => {
                          setWords(5);
                        }}>
                      
                        5 palabras
                      </button>

                      <button
                        className="btn flex justify-center items-center"
                        onClick={() => {
                          setWords(10);
                        }}>
                        {" "}
                        10 palabras
                      </button>
                    </div>

                    <div className="flex self-center">
                      <button
                        className="btn flex justify-center items-center"
                        onClick={() => {
                          setWords(15);
                        }}>
                        {" "}
                        15 palabras
                      </button>

                      <button
                        className="btn flex justify-center items-center"
                        onClick={() => {
                          setWords(20);
                        }}>
                        {" "}
                        20 palabras
                      </button>
                    </div>
                    
                   {words && <EncriptationKey words={words} />}

                   <button className="btn btn-primary my-5" disabled>Guardar</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AQUÍ  COLOCARÉ EL TEXTO ENCRIPTADO */}
          <div className="flex flex-col w-1/2 h-full justify-center items-center">
            <h4 className="text-center font-semibold md:text-2xl m-4">
              {" "}
              Texto encriptado
            </h4>
            <textarea
              placeholder="..."
              value={encryptedText}
              onChange={() => {}} //  No se puede cambiar el texto encriptado
              className="textarea-bordered textarea textarea-lg w-full max-w-4xl mx-4"></textarea>

            <div className="flex justify-center items-center">
              {/* AL hacer click se copia el texto encriptado al portapapeles */}
              <button
                className="btn glass m-5 md:text-xl"
                onClick={handleCopyToClipboard}>
                {" "}
                <span className="hidden xl:flex ">Copiar al portapapeles</span>
                <ContentCopyIcon />{" "}
              </button>
              {/* AL hacer click se borra el texto encriptado */}
              <button
                className="btn glass m-5 md:text-xl"
                onClick={() => setEncryptedText("")}>
                {" "}
                <span className="hidden xl:flex">Borrar texto</span>{" "}
                <DeleteIcon />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Encriptation;
