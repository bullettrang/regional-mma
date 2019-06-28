import React from 'react';
import Loader from 'react-loader-spinner'
import Prospects from './Prospects/Prospects';

import './FighterList.css';
const FighterList = (props)=>{

    return(
      <div className="Fighter_Content">
        <h1 className="Fighter--Title">Top {props.selected !==null ? props.selected: "Regional"} Fighters</h1>
        {props.loading? <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />:<Prospects fighters={props.fighters}/>}
    </div>
    )
  }

  export default FighterList;