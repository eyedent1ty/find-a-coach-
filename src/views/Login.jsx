import Navbar from '../components/Navbar/Navbar';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <main className="space-y-10">
      <Navbar plain />
      <h2 className="container mx-auto text-center text-4xl font-bold text-black md:text-left">
        Log in to access the Lucid Visual Collaboration Suite
      </h2>
      <div className="container mx-auto px-4 md:px-0">
        <main className="md:w-5/12">
          <form className="space-y-6">
            <input
              className="block text-block w-full py-3 px-3 border border-gray-400 rounded"
              type="email"
              placeholder="Email address"
            />
            <input
              className="block text-block w-full py-3 px-3 border border-gray-400 rounded"
              type="password"
              placeholder="Password"
            />
            <Button
              type="submit"
              className="inline-block w-full py-3 px-3 font-bold text-xl"
            >
              Log in
            </Button>
          </form>
        </main>
      </div>
      <p className="container mx-auto text-center text-gray-500 md:text-left">
          Don't have an account? <Link className="underline text-black font-bold" to="/register">Register</Link> now!
        </p>
    </main>
  );
}

export default Login;
