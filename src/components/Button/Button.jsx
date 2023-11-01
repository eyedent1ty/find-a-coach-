import { Link } from "react-router-dom";

function Button({ children, onClick, link, to }) {
  if (link) {
    return (
      <Link to={to} className="text-white bg-black py-3 px-8 rounded">
        {children}
      </Link>
    );
  }

  return (
    <button className="text-white bg-black py-2 px-8 rounded" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
