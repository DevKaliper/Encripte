import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-5xl">404</h1>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-40 w-40">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      </div>
      <p className="text-center">
        Lo sentimos, la pagina a la que intentas acceder no existe.
      </p>
      <button className="bg-gray-400 btn hover:shadow-2xl shadow-inner">
        <Link to="/">Volver al origen</Link>{" "}
      </button>
    </div>
  );
};
export default NotFound;
