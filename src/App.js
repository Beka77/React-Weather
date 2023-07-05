import Form from "./Form";
import Table from "./Table";
import {useState} from 'react';
import axios from "axios";
import './style.css'



function App() {
  const [weather, setWeather] = useState({});
  const getWeather = (city) =>{
    const KEY = '80e34a566bd26ec7c42ee9f4fadb9a62';
    const API = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
    axios(API)
    .then(({data}) =>{
      setWeather(data);
    })
  }
  return (
    <div>
      <div className="main">
      <Form getWeather={getWeather} />
      <Table weather={weather} />
      </div>
    </div>
  );
}

export default App;
