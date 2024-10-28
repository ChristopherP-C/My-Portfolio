import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Error from './pages/Error';
import Home from './pages/home';
import AboutMe from './pages/aboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/resume';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'aboutMe',
                element: <AboutMe />,
            },
            {
                path: 'Projects',
                element: <Projects />,
            },
            {
                path: 'Contact',
                element: <Contact />,
            },
            {
                path: 'resume',
                element: <Resume />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);