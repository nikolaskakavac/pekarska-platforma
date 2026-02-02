export const convertWeight = (amount, fromUnit, toUnit) => {
  const conversions = {
    'g-kg': amount / 1000,
    'kg-g': amount * 1000,
    'g-lb': amount * 0.00220462,
    'lb-g': amount / 0.00220462,
    'g-oz': amount * 0.035274,
    'oz-g': amount / 0.035274,
    'kg-lb': amount * 2.20462,
    'lb-kg': amount / 2.20462,
    'kg-oz': amount * 35.274,
    'oz-kg': amount / 35.274,
    'lb-oz': amount * 16,
    'oz-lb': amount / 16
  };
  
  const key = `${fromUnit}-${toUnit}`;
  const result = conversions[key] || amount;
  return parseFloat(result).toFixed(2);
};

export const convertVolume = (amount, fromUnit, toUnit) => {
  const conversions = {
    'ml-l': amount / 1000,
    'l-ml': amount * 1000,
    'ml-cup': amount * 0.00422675,
    'cup-ml': amount / 0.00422675,
    'tbsp-ml': amount * 14.7868,
    'ml-tbsp': amount / 14.7868,
    'l-cup': amount * 4.22675,
    'cup-l': amount / 4.22675,
    'l-tbsp': amount * 67.628,
    'tbsp-l': amount / 67.628,
    'cup-tbsp': amount * 16,
    'tbsp-cup': amount / 16
  };
  
  const key = `${fromUnit}-${toUnit}`;
  const result = conversions[key] || amount;
  return parseFloat(result).toFixed(2);
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
