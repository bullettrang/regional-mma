import React from 'react';
import { useTrail, animated } from 'react-spring'
// import Prospect from './Prospect/Prospect';
import './Prospects.css';
import './Prospect/Prospect.css';



const Prospects=({fighters})=>{
    const trail = useTrail(fighters.length, {
        to:{opacity:1},
        from: { opacity: 0},
      })
    return(
        <div className="Prospects__Wrapper">
            <div className="Prospects__Content">
                {/* {props.fighters.map(fighter=><Prospect key={fighter.name} href={fighter.href} rank={fighter.rank} image={fighter.image} name={fighter.name}/>)} */}
                {trail.map(({...rest},index)=> <animated.figure style={rest} className="Prospect__Wrapper">
                <img  className="Prospect--Image" src={fighters[index].image} alt={fighters[index].name}/>
            <figcaption><a rel="noopener noreferrer" className="Prospect--Link"target="_blank" href={fighters[index].href}><span className="Prospect--Rank">{`${fighters[index].rank} ${fighters[index].name}`}</span></a></figcaption>
                </animated.figure>)}
            </div>
        </div>
    )
}

export default Prospects;