import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Encriptation from "../pages/Encriptation";
import Desencriptation from "../pages/Desencriptation";
import UsageLayout from "../Layouts/UsageLayout";

export const router = createBrowserRouter([
    {
        path: "/Encripte/",
        element: <Home />,
        errorElement: <NotFound />,
    },
        {
            
            element: <UsageLayout />,
            errorElement: <NotFound />,
            children: [
     
                {
                    path: "/Encripte/Encriptation",
                    element: <Encriptation />,
                },
                {
                    path: "/Encripte/Desencriptation",
                    element: <Desencriptation />,
                },
            ],
        },
    ]);
