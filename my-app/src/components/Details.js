import React from "react";
import '../css/Details.css'
import {connect} from 'react-redux';

const dataProps = state => ({
    data: state.data,
    error: state.data
})

const Details = props => {
    console.log(props)

    return (
        <div className="hero-image" >

            <img src = {props.image} alt={props.title}/>   

        </div>
    )

}

export default connect(dataProps, null)(Details);