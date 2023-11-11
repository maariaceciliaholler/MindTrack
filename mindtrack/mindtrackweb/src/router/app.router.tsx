import RegisterPage from "../features/user/auth/register/register.page";
import LoginPage from "../features/user/auth/login/login.page";
import HomePage from "../features/user/home.page"
import { createBrowserRouter } from 'react-router-dom';
import NotePage from "../features/note/create.note.page";
import React from "react";


const BASE_ROUTES = [
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/home/:userId',
        element: <HomePage />,
    },
    {
        path: '/notes',
        element: <NotePage />,
    }
];

const AppRouter = createBrowserRouter([...BASE_ROUTES]);

export default AppRouter;