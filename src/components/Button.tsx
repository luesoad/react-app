import React from 'react';
import LoadingSpinner from '../assets/icons/loading-spinner.svg';

interface ButtonProps {
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    className?: string;
    loading?: boolean;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
}

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
            className={`${loading ? '' : 'cursor-pointer'} ${variant === 'primary' ? 'bg-primary hover:bg-secondary text-white' : 'bg-secondary hover:bg-primary text-white'} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 inline-flex items-center ${className}`}
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
