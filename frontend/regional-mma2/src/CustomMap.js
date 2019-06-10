import React, { Component } from "react";
import axios from 'axios';
import { feature } from "topojson-client";
import Modal from './Modal';
import JSONmap from "./static/us-albers.json";

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import { relative } from "path";

const wrapperStyles = {
  width: "100%",
  maxWidth: 480,
  margin: "0 auto",
  fontFamily: "Roboto, sans-serif",
  backgroundColor: "#7fcdff", /*ocean blue */
  position:'relative'
};

const selectedStyle={
  default: {
    fill: "#FF5722",
    stroke: "#607D8B",
    strokeWidth: 0.75,
    outline: "none"
  },
  hover: {
    fill: "#607D8B",
    stroke: "#607D8B",
    strokeWidth: 0.75,
    outline: "none"
  },
  pressed:{
    outline: "none",
    strokeWidth: 0.75,
    fill: "#FF5722"
  }
}

const nonSelectedStyle={
  default: {
    fill: "#ECEFF1",
    stroke: "#607D8B",
    strokeWidth: 0.75,
    outline: "none"
  },
  hover: {
    fill: "#607D8B",
    stroke: "#607D8B",
    strokeWidth: 0.75,
    outline: "none"
  },
pressed:{
  outline: "none",
  strokeWidth: 0.75
}
}
class CustomMap extends Component {
  constructor() {
    super();
    this.state = {
      geographyPaths: []
    };
    this.loadPaths = this.loadPaths.bind(this);
  }
  componentDidMount() {
    this.loadPaths();
  }
  loadPaths() {
    const world = JSONmap;
    // Transform your paths with topojson however you want...
    const countries = feature(
      world,
      world.objects[Object.keys(world.objects)[0]]
    ).features;
    this.setState({ geographyPaths: countries });
  }

  // selectHandler= async (stateName)=>{
  //   this.setState({selected:stateName,loading:true});
  //   //await this.getProspects(stateName);
  // }


  render() {
    return (
      <div style={wrapperStyles}>
        {this.props.loading? <Modal/>:null}
        <ComposableMap
          projectionConfig={{
            scale: 1085,
            rotation: [0, 0, 0]
          }}
          width={980}
          height={651}
          style={{
            width: "100%",
            height: "auto"
          }}
        >
          <ZoomableGroup center={[-47, 18]} disablePanning>
            <Geographies
              geography={this.state.geographyPaths}
              disableOptimization
            >
              {(geographies, projection) =>
                geographies.map((geography, i) => (

                  <Geography
                    cacheId={`path-${geography.properties.ADM0_A3}-${i}`}
                    round
                    name={geography.properties.name}
                    key={geography.properties.name}
                    geography={geography}
                    projection={projection}
                    onClick = {()=>this.props.clicked(geography.properties.name)}
                    style={this.props.selected ===geography.properties.name ? selectedStyle : nonSelectedStyle}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default CustomMap;
