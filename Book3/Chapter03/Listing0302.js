import {getLocalWeather} from './utilities/weatherUtils.js';

function Weather(props){
    const localWeather = getLocalWeather(props.postalCode);
    return(
        <div class="weatherWidget">
            {localWeather}
        </div>
    )
}

export default Weather;