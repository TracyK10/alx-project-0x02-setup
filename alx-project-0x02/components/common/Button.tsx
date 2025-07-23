import React from 'react';
import { type ButtonProps } from '@/interfaces';

const sizeClasses = {
  small: 'px-3 py-1.5 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = 'medium',
  shape = 'rounded-md',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500';
  const colorClasses = 'bg-rose-500 text-white hover:bg-rose-600';
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  
  const buttonClasses = [
    baseClasses,
    colorClasses,
    sizeClasses[size],
    shape,
    disabled ? disabledClasses : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
