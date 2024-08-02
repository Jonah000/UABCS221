document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const conversionType = document.getElementById('conversionType').value;
    let result;

    switch (conversionType) {
        case 'length':
            result = convertMetersToFeet(inputValue);
            break;
        case 'weight':
            result = convertKilogramsToPounds(inputValue);
            break;
        case 'temperature':
            result = convertCelsiusToFahrenheit(inputValue);
            break;
        case 'lengthInvert':
            result = convertFeetToMeters(inputValue);
            break;
        case 'weightInvert':
            result = convertPoundsToKilograms(inputValue);
            break;
        case 'temperatureInvert':
            result = convertFarhenheitToCelsius(inputValue);
            break;
        default:
            result = 'Invalid conversion type';
    }

    document.getElementById('result').textContent = result;
});

function convertMetersToFeet(meters) {
    return meters * 3.28084;
}

function convertKilogramsToPounds(kilograms) {
    return kilograms * 2.20462;
}

function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function convertFeetToMeters(feet) {
    return feet / 3.28084;
}

function convertPoundsToKilograms(pounds) {
    return pounds / 2.20462;
}

function convertFarhenheitToCelsius(farhenheit) {
    return (farhenheit - 32) * 5/9;
}