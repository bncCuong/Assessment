import { ReactNode } from 'react';
import React from 'react';
import './button.scss';

type ButtonProps = {
  disabled?: boolean;
  children: ReactNode;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ children, type, onClick, disabled }: ButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick} type={type} className="btn">
      {children}
    </button>
  );
};
