import React from 'react';
import { ButtonProps } from '../types/Button';
import LoadingSpinner from '../assets/icons/loading-spinner.svg';

const BASE_BUTTON_CLASSES = `
  font-bold px-8 py-3 rounded-full shadow-lg
  text-lg transition-all duration-200
  hover:scale-105
  focus:outline-none
  inline-flex items-center justify-center
`;

const VARIANT_CLASSES: Record<string, string> = {
    primary:
        'bg-[color:var(--primary)] hover:bg-[color:var(--primary-dark)] focus:ring-4 focus:ring-[color:var(--primary-light)] text-white',
    secondary:
        'bg-[color:var(--secondary)] hover:bg-[color:var(--secondary-dark)] focus:ring-4 focus:ring-[color:var(--secondary)] text-white',
};

const Button: React.FC<ButtonProps & { loadingText?: string }> = ({
    onClick,
    variant = 'primary',
    className = '',
    loading = false,
    loadingText = 'Loading...',
    children,
    type = 'button',
    ...rest
}) => (
    <button
        onClick={loading ? undefined : onClick}
        disabled={loading || rest.disabled}
        type={type}
        aria-busy={loading}
        className={`
      ${BASE_BUTTON_CLASSES}
      ${VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary}
      ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      ${className}
    `}
        {...rest}
    >
        {loading ? (
            <>
                <img
                    src={LoadingSpinner}
                    alt=""
                    className="inline w-4 h-4 me-3 animate-spin"
                    aria-hidden="true"
                />
                <span>{loadingText}</span>
            </>
        ) : (
            children
        )}
    </button>
);

export default Button;
