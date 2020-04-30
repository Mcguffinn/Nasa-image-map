import React from "react";
import '../css/Details.css'

const Details = props => {
    console.log(props)

    if (props.image !=null && props.image.includes('img')){
        return (
            <div className="hero-image" >

                <img src = {props.image} alt={props.title}/>   

            </div>
        )
    }
    else
        return (
            <div className="hero-image">
                {/* <img src = {props.image} style= {style} alt={props.title}/>          
                else (){
                    <video src = {props.image} style= {style} alt={props.title}/>
                }} */}
                
                    
            </div> 
        )
}

export default Details;