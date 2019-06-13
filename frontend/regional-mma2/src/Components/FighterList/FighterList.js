import React from 'react';
import Loader from 'react-loader-spinner'
import Prospects from './Prospects/Prospects';
const FighterList = (props)=>{
    return(
      <div className="Content">
      <h1>Top {props.selected !==null ? props.selected: "Regional"} Fighters</h1>
        {props.loading? <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />:<Prospects fighters={props.fighters}/>}
    </div>
    )
  }

  export default FighterList;