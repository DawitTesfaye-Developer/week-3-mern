import * as React from 'react';
import styles from './css/Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, className = '' }) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
