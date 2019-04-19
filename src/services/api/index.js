import axios from "axios";
import { WEATHER_API_URL_ZONE, WEATHER_API_KEY } from "./constants";

export const WeatherApi = {
  getCitiesByRectZone: params =>
    axios.get(WEATHER_API_URL_ZONE, {
      params: {
        ...params,
        APPID: WEATHER_API_KEY
      }
    })
};
