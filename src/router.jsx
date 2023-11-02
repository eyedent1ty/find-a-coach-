import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Auth from './views/Auth';

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
    path: '/auth',
    element: <Auth />
  }
]);

export default router;
