import React from 'react';
import '../src/App.css';

function Home() {
  return (
    <div className="Home"> 
        <h1>Click a State</h1>
        <p>State PAGE.</p>
      <style jsx>
      {`
        .Home{
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