import React, { Component } from "react";
import { feature } from "topojson-client";
import JSONmap from "../../static/us-albers.json";

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";

const wrapperStyles = {

  // padding: "calc(8px + 2vmin)",
  
}

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

  render() {
    return (
      <div style={wrapperStyles}>
        <h1>MMA REGIONAL</h1>
        <ComposableMap
          projectionConfig={{
            scale: 1000,
            rotation: [0, 0, 0],
          }}
          width={980}
          height={551}
          projection="albersUsa"
          style={{
            width: "100%",
            height: "auto"
          }}
        >
          <ZoomableGroup>
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
