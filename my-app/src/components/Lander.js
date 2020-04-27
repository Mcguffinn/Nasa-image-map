import React, { useState } from "react";
import {connect} from 'react-redux';
import {NasaCaller} from '../actions/NasaCaller';


const dataProps = state => ({
    data: state.data,
    error: state.data
})

const Lander = (props) => {
    const [apiReq, setApiReq] = useState({}); // this is empty
    const [res, setRes] = useState({}); // 


    const handleSubmit = e =>{
        e.preventDefault()
        props.NasaCaller(apiReq.date)
    }

    const handleChange = e => {
        setApiReq({...apiReq,
          [e.target.name]:e.target.value
        })
        
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='date' 
                    id='picker'
                    name = 'date'
                    min='1970-01-01'
                    onChange={handleChange}
                />
                <button type='submit'>Save</button>
            </form>
            {console.log(props.data)}
        </div>
    );
}

export default connect(dataProps, {NasaCaller})(Lander) // 