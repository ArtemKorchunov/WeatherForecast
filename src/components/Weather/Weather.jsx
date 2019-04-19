import React from "react";
import {
  lifecycle,
  branch,
  compose,
  withHandlers,
  withState,
  renderComponent
} from "recompose";

import { WeatherApi } from "services/api";
import WeatherView from "./Weather.view";

import WeatherCard from "./Common/WeatherCard";
import WeatherLeadingWrap from './WeatherLedingWrap';
import Spinner from '../Common/Spinner';

import { getSubtractionModule } from './utils';

function Weather({ weatherList: { winning, leading } }) {
  return (
    <WeatherView
      winning={
        <WeatherCard
          title={winning.name}
          tags={[`${winning.temp}℃`, `${winning.humidity}φ`]}
        />
      }
      leading={<WeatherLeadingWrap list={leading}/>}
    />
  );
}


export default compose(
  withState("weatherList", "setWeatherList", []),
  withHandlers({
    getOptimalStations: () => (
      weatherForecatsList,
      optimalTemperature = 21,
      optimalHumidity = 50
    ) => {
      return new Promise(res => {
        const firtResult = weatherForecatsList.shift();
        const optimalResults = {
          leading: [],
          winning: {
            temp: firtResult.main.temp,
            humidity: firtResult.main.humidity,
            name: firtResult.name
          }
        };
        for (const {
          main: { temp, humidity },
          name
        } of weatherForecatsList) {
          const tempDif = getSubtractionModule(temp, optimalTemperature);
          const humidityDif = getSubtractionModule(humidity, optimalHumidity);
          const optimalTempDif = getSubtractionModule(
            optimalTemperature,
            optimalResults.winning.temp
          );
          const optimalHumidityDif = getSubtractionModule(
            optimalHumidity,
            optimalResults.winning.humidity
          );

          if (tempDif < optimalTempDif && humidityDif < optimalHumidityDif) {
            optimalResults.winning = { temp, humidity, name };
          } else if (tempDif < 2 && humidityDif < 3) {
            optimalResults.leading.push({ temp, humidity, name });
          }
        }
        res(optimalResults);
      });
    }
  }),
  lifecycle({
    async componentDidMount() {
      const {
        data: { list }
      } = await WeatherApi.getCitiesByRectZone({
        bbox: "-158.1,-38.2,179.1,64.7,100"
      });
      const res = await this.props.getOptimalStations(list);
      this.props.setWeatherList({...res, leading: res.leading.slice(1, 6)});
    }
  }),
  branch(
    ({ weatherList }) => weatherList.length === 0,
    renderComponent(Spinner)
  )
)(Weather);
