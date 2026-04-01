// routes for the app

import Login from "./features/auth/pages/Login";
import { createBrowserRouter } from "react-router-dom";
import Register from "./features/auth/pages/Register";
import Home from "./pages/Home";
import Protected from "./components/Protected";
import Interview from './pages/Interview';

export const router = createBrowserRouter([
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/',
        element:<Protected><Home/></Protected>
    },
    {
        path:'/interview-plan',
        element:<Protected><Interview/></Protected>
    }
])