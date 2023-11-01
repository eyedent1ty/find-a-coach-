import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './views/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/coaches',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

export default router;
