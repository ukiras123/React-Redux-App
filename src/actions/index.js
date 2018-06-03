import axios from 'axios';

const API_KEY = "8b41a06f7ee84b7b40065d52fb860389";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_ERROR = "FETCH_ERROR";

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: FETCH_WEATHER,
                payload: response
            })
            
            dispatch({
                type: FETCH_ERROR,
                payload: ""
            })
        }
        ).catch((error) => {
            console.log('Error in action' + error);

            dispatch({
                type: FETCH_ERROR,
                payload: "Invalid City"
            })
        })
    }

}