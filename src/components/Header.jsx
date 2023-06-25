import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';


const Header = ({mode}) => {
    return (
        <div className='flex flex-row justify-center items-center w-full h-auto sticky p-3 border-b-2 border-gray-700'>
            <h3 className='flex-grow text-center text-[#66B2FF] font-semibold text-2xl md:text-4xl'>Welcome to CriptoText</h3>
            <div className='flex mr-3 gap-2'>
                
                <button className="botonesHeader"> <GitHubIcon className="iconosHeader"/> </button>
                <button className="botonesHeader"> {mode ? <DarkModeIcon className="iconosHeader"/> : <LightModeIcon className="iconosHeader"/> } </button>
            </div>
        </div>
    )
}
export default Header





