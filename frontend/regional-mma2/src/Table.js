import React from 'react';
import './Table.css';

const TableRow=(props)=>{
    return(
        <tr><td>{props.name}</td></tr>
    )
}
const Table=(props)=>{
    return(
        <table className="table">
            <thead><tr><th>Prospects</th></tr></thead>
            <tbody>
                {props.fighters.map(fighter=><TableRow name={fighter}/>)}
            </tbody>
        </table>
    )
}

export default Table;