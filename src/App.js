import './index.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ErrorPage from './pages/Error';
import Basket from './pages/Basket';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/', errorElement: <ErrorPage /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/basket', element: <Basket /> },
  { path: '*', element: <ErrorPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
