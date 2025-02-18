import React, { useState, useCallback } from 'react';
import { Button } from './Button';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(prev => prev + 1), []);
  const decrement = useCallback(() => setCount(prev => prev - 1), []);
  const reset = useCallback(() => setCount(0), []);

  const getBackgroundColor = () => {
    const intensity = Math.min((count / 100) * 255, 255);
    return `rgb(${intensity}, ${255 - intensity}, ${intensity})`;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-8" style={{ backgroundColor: getBackgroundColor() }}>
      <h2 className="text-2xl font-bold mb-4">Counter</h2>
      <div className="text-4xl font-bold mb-4">{count}</div>
      <div className="flex gap-2">
        <Button onClick={decrement}>-</Button>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
};