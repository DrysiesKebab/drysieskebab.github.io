import React, { useState } from "react";

interface QuantitySelectorProps {
  max: number;
  onChange?: (value: number) => void;
  defaultValue?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ max, onChange, defaultValue = 1 }) => {
  const [quantity, setQuantity] = useState<number>(defaultValue);

  const increment = () => {
    if (quantity < max) {
      const newQty = quantity + 1;
      setQuantity(newQty);
      onChange?.(newQty);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onChange?.(newQty);
    }
  };

  return (
    <div className="flex items-center w-[30%] justify-around gap-4 border rounded-md px-4 py-2 w-fit shadow-sm">
      <button
        onClick={decrement}
        className="text-lg font-bold text-gray-600 disabled:text-gray-300"
        disabled={quantity <= 1}
      >
        –
      </button>
      <span className="text-lg font-semibold">{quantity}</span>
      <button
        onClick={increment}
        className="text-lg font-bold text-gray-600 disabled:text-gray-300"
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
