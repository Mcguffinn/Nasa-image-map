import React, { useState } from "react";
import {connect} from 'react-redux';
import {NasaCaller} from '../actions/NasaCaller';
import Details from './Details';


const dataProps = state => ({
    data: state.data,
    error: state.data
})


const Lander = (props) => {
    const [apiReq, setApiReq] = useState({});

    const handleSubmit = e =>{
        e.preventDefault()
        props.NasaCaller(apiReq.date)
    }

    const handleChange = e => {
        setApiReq({
          [e.target.name]:e.target.value
        })
        
    }

    return (
        <div className="hero-image">
            <img src = {props.image} alt={props.title}/> 
            <section className="masthead" role="img" aria-label="Image Description">
                <h1>
                    Call to the Stars
                </h1>
                <div className='calendar'>
                    <form onSubmit={handleSubmit}>
                        <input type='date' 
                            id='picker'
                            name = 'date'
                            min='1970-01-01'
                            onChange={handleChange}
                        />
                        <button type='submit'>Save</button>
                    </form>
                </div>
            </section>
            <Details 
                title={props.data.title}
                date={props.data.date}
                image={props.data.url}  
                explanation={props.data.explanation}
            />
        </div>
        
    );
}

export default connect(dataProps, {NasaCaller})(Lander)