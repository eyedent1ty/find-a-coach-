import { Link } from 'react-router-dom';

function Button({ children, className, onClick, link, to, type, plain, disabled }) {
  const classes = `border-2 border-black text-white bg-black py-3 px-8 rounded hover:bg-gray-300 hover:text-black hover:border-gray-500 ${className}`;

  if (link) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={plain ? className : classes}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
