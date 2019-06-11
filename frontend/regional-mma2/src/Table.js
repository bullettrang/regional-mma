import React from 'react';
import './Table.css';

const TableRow=(props)=>{
    return(
        <div>
            <span>{props.name}</span>
            <span><img src={props.image}/></span>
        </div>
    )
}
const Table=(props)=>{
    return(
        <div className="Prospects__Wrapper">
            <div>
                <h2>Prospects</h2>
            </div>
            <div className="Prospects__Content">
                {props.fighters.map(fighter=><TableRow key={fighter.name} image={fighter.image} name={fighter.name}/>)}
            </div>
        </div>
    )
}

export default Table;