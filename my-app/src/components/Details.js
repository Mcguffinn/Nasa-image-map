import React from "react";


const Details = props => {
    console.log(props)

    return (
        <div>
            <img src = {props.image}  alt={props.title}/>
        </div>
    )
}

export default Details;