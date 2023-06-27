
import GitHubIcon from "@mui/icons-material/GitHub";
import HoverDropdown from "./HoverDropdown";


const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 flex justify-between items-center">
        <a className="btn-ghost btn text-xl normal-case" href="/">Encrypte</a>

        <div className="w-auto mr-8 h-auto">
      <HoverDropdown />
        <button className="w-10 h-10">
            
            <a target="_blank" rel="noreferrer" href="https://github.com/DevKaliper/Encripte"><GitHubIcon className="w-full" /></a>
   
        
      </button>
          
        </div>
      </div>

   
  
    </>
  );
};
export default Header;