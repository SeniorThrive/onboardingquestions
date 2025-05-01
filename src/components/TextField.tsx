import React from 'react';

interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  prefilled?: boolean;
  error?: string;
}

export const TextField = ({
  id,
  label,
  value,
  onChange,
  placeholder = '',
  required = false,
  disabled = false,
  readOnly = false,
  prefilled = false,
  error,
}: TextFieldProps) => {
  return (
    <div>
      <label 
        htmlFor={id} 
        className="block text-lg font-medium text-gray-700 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className={`relative ${prefilled ? 'flex items-center' : ''}`}>
        <input
          type="text"
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          className={`
            w-full px-4 py-3 text-lg rounded-lg border-2 
            focus:ring-blue-500 focus:border-blue-500 
            transition duration-200
            ${error ? 'border-red-300' : 'border-gray-300'}
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
            ${readOnly ? 'bg-gray-50' : ''}
            ${prefilled ? 'border-gray-200 bg-gray-50' : ''}
          `}
        />
        
        {prefilled && (
          <button 
            type="button"
            className="absolute right-2 text-blue-600 hover:text-blue-800 font-medium px-2 py-1 flex items-center"
            onClick={() => onChange(value)}
          >
            <span className="mr-1">✏️</span>
            <span>Edit</span>
          </button>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-red-600 text-sm">{error}</p>
      )}
    </div>
  );
};