import React from 'react';
import { withState, lifecycle, compose } from 'recompose';

import { WeatherApi } from 'services/api';
import WeatherView from './Weather.view';

function Weather() {
  return <WeatherView/>
}

export default compose(
  lifecycle({
    async componentDidMount() {
      const weather = await WeatherApi.getCitiesByRectZone()
    }
  })
)(Weather)