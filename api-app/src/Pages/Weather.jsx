import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Logo from "../components/Logo/Logo";
import Button from "../components/Button/Button";

const data = new Date();

const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const str_data = dia + "/" + (mes + 1) + "/" + ano;
const str_hora = hora + ":00h";

const Weather = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");
  const [showMyComponent, setshowMyComponent] = useState(false);

  const getWeatherData = async (city) => {
    await axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt&appid=(tire os parenteses e cole seu número de API)`,
    })
      .then((res) => {
        console.log(res.data);
        setTemp(res.data.main.temp);
        setIcon(res.data.weather[0].icon);
        setDescription(res.data.weather[0].description);
        setHumidity(res.data.main.humidity);
        setWind(res.data.wind.speed);
        setCountry(res.data.sys.country);
        setshowMyComponent(true);
      })
      .catch((err) => {
        console.log(err);
        alert("Nome inválido. Digite novamente...");
      });
  };

  return (
    <div className="container">
      {!showMyComponent ? (
        <div>
          <h1 className="title-initial">Previsão do Tempo</h1>
          <div className="logotype">
            <Logo />
          </div>
          <input
            className="input"
            type="text"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
            placeholder="Digite o nome da Cidade"
            autoFocus
          />
          <Button onClick={() => getWeatherData(city)}>Consultar</Button>
        </div>
      ) : (
        <div className="data_container">
          <h1 className="city-title">
            {city},{country}
          </h1>
          <div className="icones">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="weather-icon"
              className="icons"
            />
          </div>
          <h4>{description}</h4>
          {temp ? <h1 className="temperature">{Math.floor(temp)}°C</h1> : null}
          <h4 className="umidade">
            Umidade do ar: <span>{Math.floor(humidity)}%</span>{" "}
          </h4>
          <h4 className="velocidade">
            Velocidade do vento: <span>{wind}m/s</span>
          </h4>
          <h4>Volume de Chuva: 0mm</h4>
          <h4>{"Medição: " + str_data + " às " + str_hora}</h4>
          <div className="btn-voltar">
            <Button onClick={() => window.location.reload()}>Voltar</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
