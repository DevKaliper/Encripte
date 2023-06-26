
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 flex justify-between items-center">
        <a className="btn-ghost btn text-xl normal-case" href="/">Encrypte</a>
        <button className="w-10 h-10">
            <a href="/"><GitHubIcon className="w-full" /></a>
   
        
      </button>
      </div>

   
  
    </>
  );
};
export default Header;
