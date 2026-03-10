// routes for the app

import Login from "./pages/Login";
import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
export const router = createBrowserRouter([
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/login',
        element:<Login/>
    }
])