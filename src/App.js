import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { Layout } from 'antd';
import MyCard from './card';
import { api } from './API';

const { Header } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  backgroundColor: 'black',
};

function App() {

  useEffect(() => {
    api.getWeather("jakarta").then((response) => {
      console.log(response);
    });
  }, [])

  return (
    <div className="App">
      <Header style={headerStyle}>
        <div className="demo-logo" >
          <p>Weather app</p>
        </div>
      </Header>
      <div style={{ background: "#101010" }}>
        <Carousel autoplay>
          <MyCard temp="20" weather="sunny"></MyCard>
          <MyCard temp="20" weather="cloudy"></MyCard>
          <MyCard temp="20" weather="rainy"></MyCard>
        </Carousel>
      </div>

    </div>
  );
}

export default App;
