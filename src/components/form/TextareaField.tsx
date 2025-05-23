import React from "react";
import { BaseFormFieldProps } from "../../types/form";

type TextareaFieldProps = BaseFormFieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextareaField: React.FC<TextareaFieldProps> = ({
    id,
    label,
    error,
    className = "",
    ...props
}) => (
    <div className="mb-6">
        <label
            htmlFor={id}
            className="block text-sm font-medium mb-1"
            style={{ color: "var(--dark-purple)" }}
        >
            {label}
        </label>
        <textarea
            id={id}
            className={`w-full px-3 py-2 rounded-lg border ${error ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] bg-white text-gray-900 resize-none ${className}`}
            {...props}
        />
        {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
);

export default TextareaField;
