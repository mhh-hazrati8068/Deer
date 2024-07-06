import React from "react";
import classNames from "classnames";
import { ButtonProps } from "./ButtonTypes";

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  width,
  height,
  color,
  backgroundColor,
  className,
}) => {
  const baseClasses =
    "px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-yellow-300 h-9 w-80 hover:bg-yellow-500 text-black py-2 px-4 rounded-sm mt-4",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  };

  const customStyles = {
    width,
    height,
    color,
    backgroundColor,
  };

  const classes = classNames(baseClasses, variantClasses[variant], className);

  return (
    <button className={classes} onClick={onClick} style={customStyles}>
      {children}
    </button>
  );
};

export default Button;
