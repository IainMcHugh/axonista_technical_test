import { KelvinToDegrees, KelvinToFahrenheit } from "./conversions";

const kelvin = 273.16;

test("Kelvin To Degrees", () => {
  expect(KelvinToDegrees(kelvin)).toBe("0");
});

test("Kelvin To Fahrenheit", () => {
    expect(KelvinToFahrenheit(kelvin)).toBe("32");
});
