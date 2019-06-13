import App, { Container } from "next/app"; //this wraps around all
import Page from "../src/Page";

class MyApp extends App {
  constructor() {
    super();
    this.state = {
      selected: "",
      states: [
        "Illinois",
        "Indiana",
        "Iowa",
        "KS/Missouri",
        "Michigan",
        "Minnesota",
        "Nebraska",
        "Dakotas",
        "Ohio",
        "Wisconsin",
        "New England",
        "New Jersey",
        "New York",
        "Pennsylvania",
        "Alabama",
        "Arkansas",
        "Florida",
        "Georgia",
        "Kentucky",
        "Louisiana",
        "Mississippi",
        "North Carolina",
        "South Carolina",
        "Tennessee",
        "Virginia",
        "West Virginia",
        "Arizona",
        "New Mexico",
        "Oklahoma",
        "Texas",
        "California",
        "Colorado",
        "Idaho",
        "Montana",
        "Nevada",
        "Pac Northwest",
        "Utah",
        "Alaska",
        "Hawaii"
      ]
    };
  }
  componentDidMount() {}

  clickHandler=(stateName)=>{
    this.setstate({selected:stateName});
  }
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
