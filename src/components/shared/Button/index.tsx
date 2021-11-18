import clsx from 'clsx';
import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

enum ButtonVariant {
  'dark',
  'light',
  'primary',
  'red',
}

type ButtonProps = {
  isLoading?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  children,
  className,
  disabled: buttonDisabled,
  isLoading,
  variant = 'red',
  ...rest
}: ButtonProps) {
  const disabled = isLoading || buttonDisabled;

  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx(
        'py-2 px-6 rounded font-bold',
        'border shadow-sm',
        'focus:outline-none focus-visible:text-primary-400',
        {
          'bg-white disabled:bg-gray-200 text-red-500 hover:bg-gray-50 hover:text-red-500 focus-visible:text-red-500 border-red-400 disabled:hover:text-red-500':
            variant === 'light',
          'bg-red-600 text-white hover:bg-red-500 hover:text-white border-red-700 disabled:hover:bg-red-400 disabled:brightness-75':
            variant === 'red',
        },
        'disabled:cursor-not-allowed',
        !disabled && 'animated-underline',
        isLoading &&
          'relative text-transparent hover:!text-transparent !cursor-wait transition-none',
        className
      )}
    >
      {isLoading && (
        <div
          className={clsx(
            'absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2',
            variant !== 'dark' ? 'text-black' : 'text-white'
          )}
        >
          <ImSpinner2 className='animate-spin' />
        </div>
      )}
      {children}
    </button>
  );
}
