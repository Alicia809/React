import React, { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');

  const calculateBMI = () => {
    const weightFloat = parseFloat(weight);
    const heightFloat = parseFloat(height);

    if (weightFloat > 0 && heightFloat > 0) {
      const bmiResult = weightFloat / (heightFloat * heightFloat);
      setBMI('Your BMI is: ' + bmiResult.toFixed(2));
    } else {
      setBMI('Please enter valid weight and height values.');
    }
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <div>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Height (m):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate</button>
      <div id="result">{bmi}</div>
    </div>
  );
}

export default BMICalculator;