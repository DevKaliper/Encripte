import { Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { encripter, } from "../utils/encripter";
import { useState } from "react";
const Main = () => {
  // info será el texto que se codificará
  const  [info, setInfo] = useState("")

  // texto codificado
  const [infoEncripted, setInfoEncripted] = useState("")

  // funcion para cambiar el valor de info
  const handleChangeValue = (e) => {
    setInfo(e.target.value)
  }

  // funcion para codificar el texto
  const handleClickEncripter = () => {
    // se ejecuta la funcion encripter y se le pasa como parametro el texto a codificar
    setInfoEncripted(encripter(info))
  }



  return (
    <div className=" flex h-screen w-screen flex-grow flex-row gap-3  p-4 ">
      
      {/* Text Area para escribir el texto */}
      <div className="flex h-3/4 w-1/2 flex-col items-center justify-center">
        <textarea
          className="textArea border-[#66B2FF] "
          onChange={handleChangeValue}
          placeholder="Escribe el texto a codificar"></textarea>
     <Button
     sx={{mt:2}}
    //  cuando se haga click en el boton se ejecutará la funcion encripter
     onClick={handleClickEncripter}
          variant="contained"
          endIcon={<LockIcon />}>
         
          Codificar
        </Button>
      </div>



      {/* Text Area de texto codificado */}
      <div className="flex h-3/4 w-1/2 flex-col items-center justify-center">
        <textarea
          className="textArea "
          // se le asigna el valor de infoEncripted Porque es el texto codificado
          value={infoEncripted}
          placeholder="Escribe el texto a codificar"></textarea>
               <Button
     sx={{mt:2, backgroundColor:"#FFF", color:"#000"}}
          variant="contained"
          endIcon={<ContentCopyIcon />}>
          Copiar
        </Button>
   
      </div>
    </div>
  );
};
export default Main;
