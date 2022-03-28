import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import apiData from './apiData'
import { useState,useEffect } from 'react';
import Weather from './Weather';

const WeatherDay = ({min,max,weatherImg}) =>
{

  return(
    <div className="weatherday">
           
        <div className='img'><img alt={weatherImg} src={`https://developer.accuweather.com/sites/default/files/${weatherImg}-s.png`}/></div>
        <div>Temp : {min} / {max}</div> 
       
    </div>
  )
}

export default WeatherDay;


