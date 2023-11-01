import Navbar from './components/Navbar/Navbar';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <main className="space-y-20">
      <Navbar />
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
