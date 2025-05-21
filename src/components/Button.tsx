import React from 'react';

interface ButtonProps {
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, variant = 'primary', children, disabled, className }) => {
    const baseClasses = 'inline-flex rounded-md px-4 py-2 text-center font-sans text-sm font-medium transition-all duration-300 ease-in';
    const variantClasses = variant === 'primary'
        ? 'bg-primary text-slate-50 hover:bg-slate-700'
        : 'bg-secondary text-slate-50 hover:bg-slate-700';

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${variantClasses} ${className} ${disabled ? 'disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none' : ''}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
