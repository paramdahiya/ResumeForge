// routes for the app

import Login from "./features/auth/pages/Login";
import { createBrowserRouter } from "react-router-dom";
import Register from "./features/auth/pages/Register";
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