// CustomSelect.tsx
import React, { useState } from "react";

type Option = {
  name: string;
  price: number;
};

interface CustomSelectProps {
  selectionName: string;
  options: Option[];
  multiSelect?: boolean;
  maxSelect?: number;
  onChange?: (selected: Option[] | Option | null) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ selectionName, options, multiSelect = false, maxSelect = 0, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleChange = (option: Option) => {
    if (multiSelect) {
      const updated = selectedOptions.some(o => o.name === option.name)
        ? selectedOptions.filter(o => o.name !== option.name)
        : [...selectedOptions, option];
      setSelectedOptions(updated);
      onChange?.(updated);
    } else {
      setSelectedOptions([option]);
      onChange?.(option);
    }
  };

  const isSelected = (name: string) =>
    selectedOptions.some(o => o.name === name);

  return (
    <div className="flex flex-col gap-3">
      {options.map((opt) => (
        <div key={opt.name}   onClick={() => handleChange(opt)} className="cursor-pointer flex items-center justify-between border p-3 rounded-lg shadow-sm">
          <label className="flex items-center gap-2">
            {multiSelect ? (
              <input
                type="checkbox" className="cursor-pointer"
                checked={isSelected(opt.name)}
                onChange={() => handleChange(opt)}
              />
            ) : (
              <input
                type="radio" className="cursor-pointer"
                checked={isSelected(opt.name)}
                onChange={() => handleChange(opt)}
                name={selectionName}
                disabled={selectedOptions.length == maxSelect}
              />
            )}
            <span className="text-gray-800 font-medium">{opt.name}</span>
          </label>
          <span className="text-right text-sm font-semibold text-green-600">
            ${opt.price.toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CustomSelect;
