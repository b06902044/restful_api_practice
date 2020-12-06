import React, { useState, useRef } from 'react';
import Ninja from './components/Ninja';

const App = () => {
  const [ninjas, setNinjas] = useState([]);
  const lat = useRef(null);
  const lng = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/ninjas?lng=' + lng.current.value + '&name=' + lat.current.value).then(function(data){
        console.log(data.json);
        return data.json();
    }).then(json => {
      console.log(json);
      setNinjas(json);
    })
  }

  return (
    <div id="ninja-container">
      <form id="search" onSubmit = {handleSubmit}>
        <label>Enter your Latitude:</label>
        <input type="text" ref = {lat} placeholder="latitude" required />
        <label>Enter your Longitude:</label>
        <input type="text" ref = {lng} placeholder="longitude" required />
        <input type="submit" value="Find Ninjas" />
      </form>
      <ul>
        {ninjas.map((ninja, index) => {
          return <Ninja ninja = {ninja} index = {index} />
        })}
      </ul>
    </div>
  );
}

export default App;
