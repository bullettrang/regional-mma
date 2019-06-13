import React from 'react';
import './Prospect.css';
const Prospect=(props)=>{
    return(
        <figure className="Prospect__Wrapper">
            <img  className="Prospect--Image" src={props.image} alt={props.name}/>
            <figcaption><a rel="noopener noreferrer" className="Prospect--Link"target="_blank" href={props.href}><span className="Prospect--Rank">{`${props.rank} `}</span>{props.name}</a></figcaption>
        </figure>
    )
}

export default Prospect;