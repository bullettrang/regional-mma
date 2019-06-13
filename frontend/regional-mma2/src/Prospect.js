import React from 'react';
import './Prospect.css';

const ProspectRow=(props)=>{
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
const Prospect=(props)=>{
    return(
        <div className="Prospects__Wrapper">
            <div className="Prospects__Content">
                {props.fighters.map(fighter=><ProspectRow key={fighter.name} image={fighter.image} name={fighter.name}/>)}
            </div>
        </div>
    )
}

export default Prospect;