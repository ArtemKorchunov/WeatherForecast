import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import WeatherCard from "./Common/WeatherCard";

const settings = {
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1
};

function WeatherLeadingWrap({ list }) {
  return (
    <WeatherLeadingWrap.SliderWrap>
      <Slider {...settings}>
        {list.map((item, index) => (
          <WeatherCard
            key={index}
            title={item.name}
            tags={[`${item.temp}℃`, `${item.humidity}φ`]}
          />
        ))}
      </Slider>
    </WeatherLeadingWrap.SliderWrap>
  );
}

WeatherLeadingWrap.SliderWrap = styled.div`
  max-width: 800px;
`;
export default WeatherLeadingWrap;
