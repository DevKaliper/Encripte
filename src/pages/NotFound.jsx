import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>404</h1>
            <p>Lo sentimos, la pagina a la que intentas acceder no existe.</p>
            <button><Link to="/"></Link>Volver al origen </button>
            <p>Page not found</p>
            <p>{error.statusText || error.message}</p>
        </div>
    );
};
export default NotFound;
