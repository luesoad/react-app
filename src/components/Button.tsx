import React from 'react';
import { ButtonProps } from '../types/Button';
import LoadingSpinner from '../assets/icons/loading-spinner.svg';


const Button: React.FC<ButtonProps> = ({
    onClick,
    variant = 'primary',
    className,
    loading,
    children,
    type = 'button',
}) => {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            type={type}
            className={`${loading ? '' : 'cursor-pointer'} 
        ${variant === 'primary' ?
                    'bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-light text-white' :
                    'bg-secondary hover:bg-secondary-dark focus:ring-4 focus:ring-secondary-light text-white'} 
        focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 inline-flex items-center 
        ${loading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        >
            {loading ? (
                <>
                    <img src={LoadingSpinner} alt="Loading..." className="inline w-4 h-4 me-3" />
                    Loading...
                </>
            ) : (
                children
            )}
        </button>

    );
};

export default Button;
