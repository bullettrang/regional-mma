import React from 'react';
const Prospect=(props)=>{
    return(
        // <div className="Prospect__Wrapper">
        //     <span>{props.name}</span>
        //     <span><img alt={props.name} src={props.image}/></span>
        // </div>
        <figure className="Prospect__Wrapper">
            <img  className="Prospect--Image" src={props.image} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}

export default Prospect;