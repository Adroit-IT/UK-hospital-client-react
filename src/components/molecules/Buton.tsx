import IconLoader from '@components/atoms/Icons/IconLoader';
import React, { ButtonHTMLAttributes, useState } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  secondary?: boolean;
  dark?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ className = '', isLoading, ...rest }: ButtonProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-outline-primary hover:btn-primary',
    info: 'btn-outline-info hover:btn-info',
    success: 'btn-outline-success hover:btn-success',
    warning: 'btn-outline-warning hover:btn-warning',
    danger: 'btn-outline-danger hover:btn-danger',
    secondary: 'btn-outline-secondary hover:btn-secondary',
    dark: 'btn-outline-dark hover:btn-dark',
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (rest.onClick && !loading && !isLoading) {
      setLoading(true);
      await rest.onClick(event);
      setLoading(false);
    }
  };

  // Filter out undefined and false values
  const variantClass = Object.entries(variantClasses)
    .filter(([key, value]) => Boolean(value) && (rest as Record<string, boolean>)[key])
    .map(([value]) => `${value}`)
    .join(' ');

  return (
    <button type="button" className={`${baseClasses} ${variantClass} ${className}`} onClick={handleClick} disabled={loading || isLoading} {...rest}>
      {loading || isLoading ? (
        <>
          <IconLoader className="animate-[spin_2s_linear_infinite] inline-block align-middle ltr:mr-2 rtl:ml-2 shrink-0" />
          Loading
        </>
      ) : (
        rest.children
      )}
    </button>
  );
};

export default Button;
