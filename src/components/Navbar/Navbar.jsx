import Button from '../Button/Button';
import logo from '/vite.svg';

function Navbar() {
  return (
    <nav className="shadow-md p-5">
      <div className="container mx-auto flex justify-center items-center sm:justify-between">
        <h1 className="hidden text-lg font-bold sm:block sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <a href="#">
            <img src={logo} alt="brand logo" />
          </a>
        </h1>
        <ul className="flex space-x-5 md:text-md">
          <li>
            <Button link href="#">
              All Coaches
            </Button>
          </li>
          <li>
            <Button link href="#  ">
              Request
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
