import { WeatherApiResponse } from './weather-api-response.model';

describe('WeatherApi', () => {
  it('should create an instance', () => {
    expect(new WeatherApiResponse()).toBeTruthy();
  });
});
