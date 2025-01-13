document.getElementById('convert-btn').addEventListener('click', function () {
    // Get user input
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
  
    // Validate input
    if (isNaN(temperature)) {
      document.getElementById('result').textContent = 'Please enter a valid number!';
      return;
    }
  
    // Conversion logic
    let convertedTemperature;
  
    if (fromUnit === toUnit) {
      convertedTemperature = temperature; // No conversion needed
    } else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
      convertedTemperature = (temperature * 9) / 5 + 32;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
      convertedTemperature = temperature + 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
      convertedTemperature = ((temperature - 32) * 5) / 9;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
      convertedTemperature = ((temperature - 32) * 5) / 9 + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
      convertedTemperature = temperature - 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
      convertedTemperature = ((temperature - 273.15) * 9) / 5 + 32;
    }
  
    // Display result
    document.getElementById('result').textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
  });
  