import React from "react";
import {useSpring, animated} from 'react-spring'

const MapTitle=()=>{
    const props = useSpring({opacity: 1, from: {opacity: 0}})
  
    return(
        <animated.h1 style={props}>MMA REGIONAL</animated.h1>
    )
}

export default MapTitle;