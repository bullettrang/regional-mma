import React, { Component } from "react"
import JSONmap from './static/us-albers.json';
import "./Map.css";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"


  class Map extends Component {

    constructor(props){
      super(props);
      this.state={
        selected:null
      }
      this.setCountryName.bind(this);
    }
  
    setCountryName(name){
      console.log(name)
      this.setState({selected:name})
    }

  
    render() {
        const wrapperStyles = {
            // width: "100%",
            // maxWidth: 980,
            maxWidth: 480,
            margin: "0 auto",
            backgroundColor: "#7fcdff",
            overflow:'hidden',
            display:'block'
          }
      return (
        <div style={wrapperStyles}>
          <ComposableMap
            projectionConfig={{
            //   scale: 189
                scale:500
            }}
            // width={645}
            // height={375}
            // style={{
            //   width: "100%",
            //   height: "auto",
            // }}
            >
    <ZoomableGroup center={[-76,30]} disablePanning>
            <Geographies geography={JSONmap} >
              {(geographies, projection) =>
                geographies.map((geography, i) => {

                  return (
                    <Geography
                      round
                      name={geography.properties.name}
                      key ={geography.properties.name}

                      onClick={()=>this.setCountryName(geography.properties.name)}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                          display:'block'
                        },
                        hover: {
                          fill: "#607D8B",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        pressed: {
                          fill: "#FF5722",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
                  )
                }
              )}
            </Geographies>
          </ZoomableGroup>
          </ComposableMap>
          </div>
      )
    }
  }
  
  export default Map
  