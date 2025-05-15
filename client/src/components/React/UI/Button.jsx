import { Icon } from "@iconify-icon/react";

const Button = ({
  icon,
  className,
  onClick,
  title,
  submit,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={submit ? "submit" : "button"}
      className={`flex items-center justify-center gap-2 cursor-pointer px-4 py-2 rounded-md !border border-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white transition-all duration-300 
      disabled:border-gray-900 disabled:cursor-not-allowed disabled:text-gray-800 disabled:hover:bg-gray-950 disabled:hover:text-gray-900
      ${className}`}
      disabled={disabled}
    >
      {icon || !disabled ? icon : <Icon icon="line-md:loading-twotone-loop" />}
      {disabled ? "Cargando" : title}
    </button>
  );
};

export default Button;
