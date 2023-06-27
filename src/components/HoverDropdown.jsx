import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const HoverDropdown = () => {

    return( <div className="dropdown dropdown-hover mr-20">
    <label tabIndex={0} className="btn m-1"><MenuIcon/></label>
    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link to="/"> <span className="text-center font-semibold ">Ir al inicio</span></Link></li>
    <li><Link to="encriptation"> <span className="text-center font-semibold">Ir a encriptar</span></Link></li>
    <li><Link to="desencriptation"> <span className="text-center font-semibold ">Ir a desencriptar</span></Link></li>
      

    </ul>
  </div>)
    
}

export default HoverDropdown;