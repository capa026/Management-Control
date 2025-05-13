const Button = ({ icon, className, onClick, title, submit }) => {
  return (
    <button
      onClick={onClick}
      type={submit ? "submit" : "button"}
      className={`flex items-center justify-center gap-2 cursor-pointer px-4 py-2 rounded-md !border border-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white transition-all duration-300 ${className}`}
    >
      {icon && icon}
      {title}
    </button>
  );
};

export default Button;
