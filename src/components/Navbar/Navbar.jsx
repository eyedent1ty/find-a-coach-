import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import logo from '/vite.svg';

function Navbar({ plain }) {
  if (plain) {
    return (
      <nav className="shadow-md p-5">
        <div className="container mx-auto">
          <h1 className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            <Link to="/">
              <img src={logo} alt="brand logo" />
            </Link>
          </h1>
        </div>
      </nav>
    );
  }

  return (
    <nav className="shadow-md p-5">
      <div className="container mx-auto flex justify-center items-center sm:justify-between">
        <h1 className="hidden text-lg font-bold sm:block sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <Link to="/">
            <img src={logo} alt="brand logo" />
          </Link>
        </h1>
        <ul className="flex space-x-5 md:text-md">
          <li>
            <Button link to="/coaches">
              All Coaches
            </Button>
          </li>
          <li>
            <Button link to="/auth">
              Login
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
