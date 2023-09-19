function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unitFrom = document.getElementById("unitFrom").value;
    var unitTo = document.getElementById("unitTo").value;
  

    document.getElementById("result").innerHTML = "";
    document.getElementById("temperature").classList.remove("error");
  

    if (!temperatureInput) {
      showError("Please enter a temperature.");
      return;
    }
  
    var temperature = parseFloat(temperatureInput);
  
    if (isNaN(temperature)) {
      showError("Invalid temperature. Please enter a number.");
      return;
    }
  
  
    var convertedTemperature;
  
    if (unitFrom === "celsius") {
      if (unitTo === "fahrenheit") {
        convertedTemperature = (temperature * 9/5) + 32;
        displayResult(convertedTemperature, "°F");
      } else if (unitTo === "kelvin") {
        convertedTemperature = temperature + 273.15;
        displayResult(convertedTemperature, "K");
      } else {
        displayResult(temperature, "°C");
      }
    } else if (unitFrom === "fahrenheit") {
      if (unitTo === "celsius") {
        convertedTemperature = (temperature - 32) * 5/9;
        displayResult(convertedTemperature, "°C");
      } else if (unitTo === "kelvin") {
        convertedTemperature = (temperature - 32) * 5/9 + 273.15;
        displayResult(convertedTemperature, "K");
      } else {
        displayResult(temperature, "°F");
      }
    } else if (unitFrom === "kelvin") {
      if (unitTo === "celsius") {
        convertedTemperature = temperature - 273.15;
        displayResult(convertedTemperature, "°C");
      } else if (unitTo === "fahrenheit") {
        convertedTemperature = (temperature - 273.15) * 9/5 + 32;
        displayResult(convertedTemperature, "°F");
      } else {
        displayResult(temperature, "K");
         }
    }
  }
  
  function displayResult(temperature, unit) {
    document.getElementById("result").innerHTML = "Converted Temperature: " + temperature.toFixed(2) + unit;
  }
  
  function showError(errorMessage) {
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").classList.remove("result");
    document.getElementById("temperature").classList.add("error");
    var errorDiv = document.createElement("div");
    errorDiv.classList.add("error");
    errorDiv.innerHTML = errorMessage;
    document.getElementById("result").appendChild(errorDiv);
  }