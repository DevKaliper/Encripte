import {   createHashRouter } from "react-router-dom"; //  Importar el enrutador "es hash para que github pages funcione"
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Encriptation from "../pages/Encriptation";
import Desencriptation from "../pages/Desencriptation";
import UsageLayout from "../Layouts/UsageLayout";

export const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
    },
        {
            
            element: <UsageLayout />,
            errorElement: <NotFound />,
            children: [
     
                {
                    path: "/Encriptation",
                    element: <Encriptation />,
                },
                {
                    path: "/Desencriptation",
                    element: <Desencriptation />,
                },
            ],
        },
    ]);
