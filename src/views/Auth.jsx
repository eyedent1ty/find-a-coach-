import Navbar from '../components/Navbar/Navbar';
import Button from '../components/Button/Button';
import { useState } from 'react';

const AUTH_TYPE = {
  LOGIN: 'login',
  REGISTER: 'register'
};

function Auth() {
  const [authType, setAuthType] = useState(AUTH_TYPE.LOGIN);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  function handleClick(authType) {
    setAuthType(authType);
  }

  function handleSubmit(e) {
    // TODO
    e.preventDefault();
    if (authType === AUTH_TYPE.LOGIN) {

    } else if (authType === AUTH_TYPE.REGISTER) {
      
    }
  }

  function isEmailValid(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }

  return (
    <main className="space-y-10">
      <Navbar plain />
      <h2 className="container mx-auto text-center text-4xl font-bold text-black md:text-left">
        {authType === AUTH_TYPE.LOGIN ? 'Login' : 'Register'} to have access to the features that will assist you in finding the coach you seek for your career.

      </h2>
      <div className="container mx-auto px-4 md:px-0">
        <main className="md:w-5/12">
          <form className="space-y-6">
            <input
              className="block text-block w-full py-3 px-3 border border-gray-400 rounded"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className="block text-block w-full py-3 px-3 border border-gray-400 rounded"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              className="inline-block w-full py-3 px-3 font-bold text-xl"
              onClick={handleSubmit}
              disabled
            >
              {authType === AUTH_TYPE.LOGIN ? 'Login' : 'Register'}
            </Button>
          </form>
        </main>
      </div>
      <div className="container mx-auto text-center text-gray-500 md:text-left">
        {authType === AUTH_TYPE.LOGIN ? (
          <p>
            Don't have an account?{' '}
            <Button
              plain
              onClick={() => handleClick(AUTH_TYPE.REGISTER)}
              className="underline text-black font-bold"
            >
              Register
            </Button>{' '}
            now!
          </p>
        ) : (
          <p>
            Login instead?{' '}
            <Button
              plain
              onClick={() => handleClick(AUTH_TYPE.LOGIN)}
              className="underline text-black font-bold"
            >
              Click here
            </Button>
          </p>
        )}
      </div>
    </main>
  );
}

export default Auth;
