import {getUserWeatherData, getInputWeatherData} from "../API";

test('Get User Weather Data', async () => {
    const response = await getUserWeatherData(53.28, -6.32);
    console.log(await response);
    const data = await response;
    // console.log(data.coord);
    expect(data.coord.lat).toEqual(53.28);
    expect(data.coord.lon).toEqual(-6.32);
    expect(data.name).toBe("Ballyboden");
    // expect(true).toBeTruthy();
});

test('Get Input Weather Data', async () => {
    const response = await getInputWeatherData("Dublin,ie");
    console.log(await response);
    const data = await response;
    // console.log(data.coord);
    expect(data.coord.lat).toEqual(53.34);
    expect(data.coord.lon).toEqual(-6.27);
    expect(data.name).toBe("Dublin");
    // expect(true).toBeTruthy();
});