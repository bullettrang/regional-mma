import React from 'react';
import './Prospect.css';
const Prospect=(props)=>{
    return(
        <figure className="Prospect__Wrapper">
            <img  className="Prospect--Image" src={props.image} alt={props.name}/>
            <figcaption><a className="Prospect--Link"target="_blank" href={props.href}>{props.name}</a></figcaption>
        </figure>
    )
}

export default Prospect;