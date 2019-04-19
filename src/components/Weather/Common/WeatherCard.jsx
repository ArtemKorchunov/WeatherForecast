import React from "react";
import { TaggedContentCard } from "react-ui-cards";


export default function WeatherCard({ title, tags , thumbnail, description = ''}) {
  return (
    <TaggedContentCard
      thumbnail={thumbnail}
      title={title}
      arrows={false}
      description={description}
      tags={tags}
    />
  );
}

WeatherCard.defaultProps = {
  thumbnail: "https://bit.ly/2DoXU7p"
}