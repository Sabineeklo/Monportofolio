import React from 'react';

type ButtonSize = 'medium' | 'large';
type ButtonVariant = 'filled' | 'nofill';
type ButtonBorder = 'none' | 'primary';

interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  border?: ButtonBorder;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  fullOnMobile?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  variant = 'filled',
  border = 'none',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  fullOnMobile = false,
  disabled = false,
  onClick,
  className = '',
}) => {
  /* ---------------- Base ---------------- */
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium leading-none transition-all duration-300';

  /* ---------------- Size ---------------- */
  const sizeStyles: Record<ButtonSize, string> = {
    medium: 'px-4 py-3 text-base',
    large: 'px-5 py-4 text-lg',
  };

  /* ---------------- Background ---------------- */
  const variantStyles: Record<ButtonVariant, string> = {
    filled:
      'bg-primary-700 text-white hover:bg-secondary-600 active:scale-95 active:bg-primary-400',
    nofill:
      'bg-transparent text-primary-700 hover:text-secondary-600 active:scale-95',
  };

  /* ---------------- Border ---------------- */
  const borderStyles: Record<ButtonBorder, string> = {
    none: 'border-none',
    primary:
      'border border-primary-700 hover:border-secondary-600 active:border-secondary-600',
  };

  /* ---------------- States ---------------- */
  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : 'cursor-pointer';

const widthStyles = fullWidth
  ? 'w-full'
  : fullOnMobile
  ? 'w-full sm:w-auto'
  : '';

  /* ---------------- Classes ---------------- */
  const classes = [
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    borderStyles[border],
    disabledStyles,
    widthStyles,
    className,
  ]
    .join(' ')
    .trim();

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {icon && iconPosition === 'left' && (
        <span className="flex items-center justify-center translate-y-[2px]">
          {icon}
        </span>
      )}

      <span className="flex items-center">{children}</span>

      {icon && iconPosition === 'right' && (
        <span className="flex items-center justify-center translate-y-[2px]">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
