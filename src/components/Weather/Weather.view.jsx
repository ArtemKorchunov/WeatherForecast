import React from "react";
import styled from "styled-components";

function WeatherView({ winning, leading }) {
  return (
    <WeatherView.Wrap>
      <WeatherView.Content>
        <WeatherView.WinningWrap>{winning}</WeatherView.WinningWrap>
        <div>{leading}</div>
      </WeatherView.Content>
    </WeatherView.Wrap>
  );
}

WeatherView.Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

WeatherView.Content = styled.div`
  display: flex;
  flex-direction: column;
`;

WeatherView.WinningWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export default WeatherView;
