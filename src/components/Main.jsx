import { Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Main = () => {
  return (
    <div className=" flex h-screen w-screen flex-grow flex-row gap-3  p-4 ">
      
      {/* Text Area para escribir el texto */}
      <div className="flex h-3/4 w-1/2 flex-col items-center justify-center">
        <textarea
          className="textArea border-[#66B2FF]"
          placeholder="Escribe el texto a codificar"></textarea>
     <Button
     sx={{mt:2}}
          variant="contained"
          endIcon={<LockIcon />}>
          Codificar
        </Button>
      </div>



      {/* Text Area de texto codificado */}
      <div className="flex h-3/4 w-1/2 flex-col items-center justify-center">
        <textarea
          className="textArea "
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
