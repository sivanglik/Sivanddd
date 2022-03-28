import axios from 'axios'
const key = 'xf7jK7o0TyC5FvTGHKTKdYNVy463xCL6'

const autoComplete = async (city) =>
{
    const url = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete'
    const query = `?apikey=${key}&q=${city}`
    const resp = await axios.get(url + query)
    return resp.data

}

const currentWeather = async (locationKey) => 
{
    const url = 'https://dataservice.accuweather.com/currentconditions/v1/' + `${locationKey}`;
    const query = `?apikey=${key}`
    const resp = await axios.get(url + query)
    return resp.data
}

const fiveDayDaily = async (locationKey) =>
{
    const url = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/' + `${locationKey}`;
    const query = `?apikey=${key}`
    const resp = await axios.get(url + query )
    return resp.data
}
export default  {autoComplete,currentWeather,fiveDayDaily,key}

