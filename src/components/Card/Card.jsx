function Card({ children, className }) {
  return <div className={`shadow-md p-5 ${className}`}>{children}</div>;
}

export default Card;
