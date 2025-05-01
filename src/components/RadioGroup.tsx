import React from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  id: string;
  label: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
}

export const RadioGroup = ({
  id,
  label,
  options,
  value,
  onChange,
  required = false,
  error,
}: RadioGroupProps) => {
  return (
    <div className="mb-5">
      <div className="mb-3">
        <span className="text-lg font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
      </div>
      
      <div className="space-y-3">
        {options.map((option) => (
          <div 
            key={option.value}
            className={`
              relative border-2 rounded-lg p-4 transition-all duration-200
              ${value === option.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}
            `}
          >
            <label 
              htmlFor={`${id}-${option.value}`}
              className="flex items-center cursor-pointer"
            >
              <input
                type="radio"
                id={`${id}-${option.value}`}
                name={id}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-3 text-lg text-gray-700">{option.label}</span>
            </label>
          </div>
        ))}
      </div>
      
      {error && (
        <p className="mt-2 text-red-600">{error}</p>
      )}
    </div>
  );
};