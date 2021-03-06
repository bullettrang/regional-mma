import React from 'react';
import Prospect from './Prospect/Prospect';
import './Prospects.css';


const Prospects=(props)=>{
    return(
        <div className="Prospects__Wrapper">
            <div className="Prospects__Content">
                {props.fighters.map(fighter=><Prospect key={fighter.name} href={fighter.href} rank={fighter.rank} image={fighter.image} name={fighter.name}/>)}
            </div>
        </div>
    )
}

export default Prospects;