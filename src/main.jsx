import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider
    preventDuplicate   //  Evitar que se muestren notificaciones duplicadas
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}> {/*  Posición de la notificación */}
      <RouterProvider router={router} />
    </SnackbarProvider>
  </React.StrictMode>
);
