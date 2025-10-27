import { ButtonHTMLAttributes } from 'react';
import Loading from '@/components/loading';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading?: boolean;
}

const Button = ({ label, isLoading, ...props }: ButtonProps) => {
  return (
    <button {...props}>
      {isLoading ? (
        <div className={'w-full flex justify-center items-center'}>
          <Loading />
        </div>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
