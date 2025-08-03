import { createBrowserRouter } from "react-router";

import { Login } from "./pages/Login/Login";

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: Login
  }
]);