import React from 'react';
// import Map from './Map';
import CustomMap from '../src/CustomMap';
import '../src/App';

function App() {
  return (
    <div className="App"> 
      <CustomMap/>
      <style jsx>{`
      .App{
        padding:1em;
        box-sizing: inherit;
      }
      `}</style>
    </div>
  );
}

export default App;