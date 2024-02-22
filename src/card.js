import React from "react";
import { Card } from "antd";
const { Meta } = Card;


const MyCard = (props) => {
  let image = "/sun.png";
  if (props.weather === "cloudy") {
    image = "/cloudy.png";
  } else if (props.weather === "rainy") {
    image = "/rainy.png";
  } else if (props.weather === "snowy") {
    image = "/snowy.png";
  }

  return (
    <Card
      title={props.title}
      style={{ width: 300 }}
      cover={<img alt="example" src={image} />}
    >
      <Meta title={props.temp} description={props.weather} />
    </Card>
  );

}

export default MyCard;