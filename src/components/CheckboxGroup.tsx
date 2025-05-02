import React from 'react';

interface CheckboxOption {
  value: string;
  label: string;
  conditionalField?: {
    type: 'text' | 'email' | 'tel';
    placeholder?: string;
    value?: string;
  };
}

interface CheckboxGroupProps {
  id: string;
  label: string;
  options: CheckboxOption[];
  values: string[];
  onChange: (values: string[]) => void;
  onConditionalChange?: (optionValue: string, value: string) => void;
  required?: boolean;
  error?: string;
  allowOther?: boolean;
  otherValue?: string;
  onOtherChange?: (value: string) => void;
}

export const CheckboxGroup = ({
  id,
  label,
  options,
  values,
  onChange,
  onConditionalChange,
  required = false,
  error,
  allowOther = false,
  otherValue = '',
  onOtherChange,
}: CheckboxGroupProps) => {

  const handleChange = (value: string) => {
    let newValues;
    if (values.includes(value)) {
      newValues = values.filter(v => v !== value);
    } else {
      newValues = [...values, value];
    }
    onChange(newValues);
  };

  return (
    <div>
      <div className="mb-3">
        <span className="text-lg font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
      </div>

      <div className="space-y-3">
        {options.map((option) => (
          <div key={option.value}>
            <div
              className={`
                relative border-2 rounded-lg p-4 transition-all duration-200
                ${values.includes(option.value) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}
              `}
            >
              <label
                htmlFor={`${id}-${option.value}`}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id={`${id}-${option.value}`}
                  value={option.value}
                  checked={values.includes(option.value)}
                  onChange={() => handleChange(option.value)}
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-3 text-lg text-gray-700">{option.label}</span>
              </label>
            </div>

            {values.includes(option.value) && option.conditionalField && (
              <div className="ml-8 mt-2">
                <input
                  type={option.conditionalField.type}
                  value={option.conditionalField.value || ''}
                  onChange={(e) => onConditionalChange?.(option.value, e.target.value)}
                  placeholder={option.conditionalField.placeholder}
                  className="w-full px-4 py-2 text-lg rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
          </div>
        ))}

        {allowOther && (
          <div className="space-y-2">
            <div
              className={`
                relative border-2 rounded-lg p-4 transition-all duration-200
                ${values.includes('other') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}
              `}
            >
              <label
                htmlFor={`${id}-other`}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id={`${id}-other`}
                  value="other"
                  checked={values.includes('other')}
                  onChange={() => handleChange('other')}
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-3 text-lg text-gray-700">Other</span>
              </label>
            </div>

            {values.includes('other') && onOtherChange && (
              <div className="ml-8 mt-2">
                <input
                  type="text"
                  value={otherValue}
                  onChange={(e) => onOtherChange(e.target.value)}
                  placeholder="Please specify"
                  className="w-full px-4 py-2 text-lg rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
          </div>
        )}
      </div>

      {error && (
        <p className="mt-2 text-red-600 text-sm">{error}</p>
      )}
    </div>
  );
};