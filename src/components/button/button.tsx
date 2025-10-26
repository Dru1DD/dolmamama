import { ButtonHTMLAttributes } from 'react';
import Loading from '@/components/loading';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading?: boolean;
}

const Button = ({ label, isLoading, ...props }: ButtonProps) => {
  return <button {...props}>{isLoading ? <Loading /> : label}</button>;
};

export default Button;
