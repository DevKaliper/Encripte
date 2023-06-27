import { Link } from "react-router-dom";
import ToggleMode from "../components/ToggleMode";

const Home = () => {
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-center text-5xl font-bold text-black dark:text-white">
              Bienvenido a Encrypte
            </h1>
            <p className="mb-5 text-gray-800 dark:text-gray-400">
              Aquí podras encriptar y mantener seguros tus textos.
            </p>
            <div className="flex items-center justify-center gap-2">
              {/* para ir a Encriptation */}
              <Link
                to="/encriptation"
                className="btn ">
                Encriptar
              </Link>

              {/* Para ir a desencriptation */}
              <Link
                to="/desencriptation"
                className="btn ">
                Desencriptar
              </Link>
            </div>
            <ToggleMode />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
