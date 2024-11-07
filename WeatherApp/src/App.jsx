import React, { useEffect, useState } from "react";
import { useRef } from "react";
// import getWeatherData from './weather';
const apiKey = "f97101e465ee88b72aa8a4202392e225";
const App = () => {
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef();
  const WeatherData = (city) => {
    async function cityData(city) {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=1&appid=${apiKey}&units=metric`
      );
      let actualData = await res.json();
      console.log(actualData);
    }
    cityData(city);
  };

  useEffect(() => {
    if ( inputVal !== ""){
      
      WeatherData(inputVal);
    }
  }, [inputVal]);

  function handleClick() {
    setInputVal(inputRef.current.value);
  }

  // const[search, setSearch]=useState(searchCity);

  // searchCity=()=>{
  //   if(search){
  //     const res=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&limit=1&appid=${apiKey}&units=metric`);
  //     res.json().then((data)=>{
  //       console.log(data);
  //       })
  // }

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Enter your city here" />
      <button onClick={handleClick}>Search </button>
    </>
  );
};
export default App;
