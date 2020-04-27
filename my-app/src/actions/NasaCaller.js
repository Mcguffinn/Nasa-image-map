import axios from 'axios';

export const GRAB_DATA_SUCESS = "GRAB_DATA_SUCESS";
export const GRAB_DATA_FAILURE = "GRAB_DATA_FAILURE";

export const NasaCaller = date => dispatch =>{
    axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=EO0h1b6xsNy1K10ItVFw6jS5f2XY8SDfPyXaWKoD&date=${date}`)
        .then(response =>{
            console.log(response.data);
            dispatch({
                type: "GRAB_DATA_SUCESS",
                payload: response.data
            })
        }, [])
        
        .catch(error=>{
            console.log("the data was not read properly", error)
            dispatch({
                type:"GRAB_DATA_FAILURE",
                payload: `Error: ${error}`
            })
        })

}