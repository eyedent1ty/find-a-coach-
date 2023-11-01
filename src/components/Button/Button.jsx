function Button({ children, onClick, link, href }) {
  if (link) {
    return (
      <a className="text-white bg-black py-3 px-8 rounded" href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className="text-white bg-black py-2 px-8 rounded" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
