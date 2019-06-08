import React from 'react';
// import Map from './Map';
import CustomMap from '../src/CustomMap';
import '../src/App';

function Home() {
  return (
    <div className="App"> 
      <p>HOME</p>
      <style jsx>{`
        .App{
          padding:1em;
          box-sizing: inherit;
          text-align:center;
        }
        `}
      </style>
    </div>
  );
}

export default Home;