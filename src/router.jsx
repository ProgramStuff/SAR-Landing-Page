import { createBrowserRouter } from 'react-router-dom';
import Layout from './routes/Layout';
import LandingPage from './app/LandingPage/page';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <LandingPage /> },
            { path: '/Login', element: <h1>Login</h1> },
            { path: '/Register', element:<h1>Reg</h1> },
            {
                path: '*',
                element: <p>404 Error - Nothing here</p>,
            },
        ],
    },
]);
