import React from 'react';

interface ButtonProps {
    onClick: () => void;
    variant?: 'primary' | 'secondary'; // variant ist jetzt optional
    children: React.ReactNode;
    disabled?: boolean;
    className?: string; // Neue Prop für zusätzliche Klassen
    type?: 'button' | 'submit' | 'reset'; // Neue Prop für den Button-Typ
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    variant = 'primary',
    children,
    disabled,
    className,
    type = 'button',
}) => {
    const baseClasses = 'inline-flex rounded-md px-4 py-2 text-center font-sans text-sm font-medium transition-all duration-300 ease-in';
    const variantClasses = variant === 'primary'
        ? 'bg-primary text-slate-50 hover:bg-slate-700'
        : 'bg-secondary text-slate-50 hover:bg-slate-700';

    return (
        <button
            onClick={onClick}
            type={type}
            className={`${baseClasses} ${variantClasses} ${className} ${disabled ? 'disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none' : ''}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
