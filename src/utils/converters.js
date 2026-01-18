export const convertWeight = (amount, fromUnit, toUnit) => {
  const conversions = {
    'g-kg': amount / 1000,
    'kg-g': amount * 1000,
    'g-lb': amount * 0.00220462,
    'lb-g': amount / 0.00220462,
    'g-oz': amount * 0.035274,
    'oz-g': amount / 0.035274
  };
  
  const key = `${fromUnit}-${toUnit}`;
  return conversions[key] ? conversions[key] : amount;
};

export const convertVolume = (amount, fromUnit, toUnit) => {
  const conversions = {
    'ml-l': amount / 1000,
    'l-ml': amount * 1000,
    'ml-cup': amount * 0.00422675,
    'cup-ml': amount / 0.00422675,
    'tbsp-ml': amount * 14.7868,
    'ml-tbsp': amount / 14.7868
  };
  
  const key = `${fromUnit}-${toUnit}`;
  return conversions[key] ? conversions[key].toFixed(2) : amount;
};

export const convertTemperature = (temp, fromUnit, toUnit) => {
  if (fromUnit === 'C' && toUnit === 'F') {
    return ((temp * 9/5) + 32).toFixed(1);
  }
  if (fromUnit === 'F' && toUnit === 'C') {
    return ((temp - 32) * 5/9).toFixed(1);
  }
  return temp;
};
