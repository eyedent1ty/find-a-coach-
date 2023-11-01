import { createBrowserRouter } from 'react-router-dom';
import CoachesList from './components/Coaches/CoachesList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CoachesList />
  }
]);

export default router;
