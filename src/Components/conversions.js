const KELVIN = 273.16;

const KelvinToDegrees = (k) => {
    return (k - KELVIN).toFixed(0);
}

const KelvinToFahrenheit = (k) => {
    return (k * (9/5) - 459.67).toFixed(0);
}

export {KelvinToDegrees, KelvinToFahrenheit}