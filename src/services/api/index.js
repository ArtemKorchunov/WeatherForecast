import axios from "axios";
import { WEATHER_API_URL_ZONE, WEATHER_API_KEY } from "./constants";

export const WeatherApi = {
  getCitiesByRectZone: params =>
    axios.get(
      "https://samples.openweathermap.org/data/2.5/box/city?bbox=-4,43,7,50,1",
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        params: {
          ...params,
          appid: WEATHER_API_KEY
        }
      }
    )
};
