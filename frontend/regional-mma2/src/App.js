import React from 'react';
import axios from 'axios';
import CustomMap from './CustomMap';
import FighterList from './FighterList'
import './App.css';




//No links for :
//Delaware, Maryland, Wyoming

//shared link
//Washington, Oregon

//shared link
//Missouri, Kansas

//shared link
//Massachusetts, New Hamphsire, Connecticut

//shared link
//North Dakota, South Dakota
class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      stateNames:{
        'Illinois':{
          fighters:[],
          urlParam:'illinois'
        },
        'Indiana':{
          fighters:[],
          urlParam:'indiana'
        },
        'Iowa':{
          fighters:[],
          urlParam:'iowa'
        },
        'Kansas':{
          fighters:[],
          urlParam:'kansas-missouri'
        },
        "Missouri":{
          fighters:[],
          urlParam:'kansas-missouri'
        },
        'Michigan':{
          fighters:[],
          urlParam:'michigan'
        },
        'Minnesota':{
          fighters:[],
          urlParam:'minnesota'
        },
        'Nebraska':{
          fighters:[],
          urlParam:'nebraska'
        },
        "North Dakota":{
          fighters:[],
          urlParam:'north-south-dakota'
        },
        "South Dakota":{
          fighters:[],
          urlParam:'north-south-dakota'
        },
        'Ohio':{
          fighters:[],
          urlParam:'ohio'
        },
        'Wisconsin':{
          fighters:[],
          urlParam:'wisconsin'
        },
        'New Jersey':{
          fighters:[],
          urlParam:'new-jersey'
        },
        'New York':{
          fighters:[],
          urlParam:'new-york'
        },
        'Pennsylvania':{
          fighters:[],
          urlParam:'pennsylvania'
        },
        'Alabama':{
          fighters:[],
          urlParam:'alabama'
        },
        'Arkansas':{
          fighters:[],
          urlParam:'arkansas'
        },
        'Florida':{
          fighters:[],
          urlParam:'florida'
        },
        'Georgia':{
          fighters:[],
          urlParam:'georgia'
        },
        'Kentucky':{
          fighters:[],
          urlParam:'kentucky'
        },
        'Louisiana':{
          fighters:[],
          urlParam:'louisiana'
        },
        'Mississippi':{
          fighters:[],
          urlParam:'mississippi'
        },
        'North Carolina':{
          fighters:[],
          urlParam:'north-carolina'
        },
        'South Carolina':{
          fighters:[],
          urlParam:'south-carolina'
        },
        'Tennessee':{
          fighters:[],
          urlParam:'tennessee'
        },
        'Virginia':{
          fighters:[],
          urlParam:'virginias'
        },
        'West Virginia':{
          fighters:[],
          urlParam:'west-virginia'
        },
        'Arizona':{
          fighters:[],
          urlParam:'arizona'
        },
        'New Mexico':{
          fighters:[],
          urlParam:'new-mexico'
        },
        'Oklahoma':{
          fighters:[],
          urlParam:'oklahoma'
        },
        'Texas':{
          fighters:[],
          urlParam:'texas'
        },
        'California':{
          fighters:[],
          urlParam:'california'
        },
        'Colorado':{
          fighters:[],
          urlParam:'colorado'
        },
        'Idaho':{
          fighters:[],
          urlParam:'idaho'
        },
        'Montana':{
          fighters:[],
          urlParam:'montana'
        },
        'Nevada':{
          fighters:[],
          urlParam:'nevada'
        },
        'Oregon':{
          fighters:[],
          urlParam:'pacific-northwest'
        },
        'Washington':{
          fighters:[],
          urlParam:'pacific-northwest'
        },
        "Alaska":{
          fighters:[],
          urlParam:'alaska'
        },
        "Massachusetts":{
          fighters:[],
          urlParam:'new-england'
        },
        "New Hampshire":{
          fighters:[],
          urlParam:'new-england'
        },
        "Connecticut":{
          fighters:[],
          urlParam:'new-england'
        },
        "Hawaii":{
          fighters:[],
          urlParam:'hawaii'
        },
        "Delaware":{
          fighters:[],
          urlParam:null
        },
        "Wyoming":{
          fighters:[],
          urlParam:null
        },
        "Maryland":{
          fighters:[],
          urlParam:null
        }
      },
      loading:false,
      selected:null
    }
  }

  /**
   * @function - selectHandler - sets selected state and queries for prospects
   */
  selectHandler= async (stateName)=>{
    console.log(stateName)
    this.setState({selected:stateName,loading:true});
    if(this.state.stateNames.hasOwnProperty(stateName)&&this.state.stateNames[stateName].fighters.length===0 )
      await this.getProspects(stateName);
    else{
      console.log('no async processed');
      this.setState({selected:stateName,loading:false});
      return
    }
  }

  /**
   * @function - getProspects - Performs an ASYNC GET request to retrieve fighters based on stateName
   * @param {string} - stateName - string of stateName clicked 
   */
  getProspects =async (stateName)=> {
    try {
      const chosenState = this.state.stateNames[stateName];
      if(chosenState.urlParam !==null){
        const response = await axios.get(`/states/${chosenState.urlParam}`);
        console.log(response);
        if(response.status===200){
          console.log(response.data);
          const newObj = Object.assign({},{...this.state.stateNames[stateName]},{fighters:response.data});
          console.log('newObj',newObj);
          this.setState({stateNames: {...this.state.stateNames,
                                  ...this.state.stateNames[stateName],
                                  [stateName]:newObj
                                  
          }});
        }
      }
        this.setState({loading:false});
    } catch (error) {
      console.error(error);
    }
  }

  render(){
    let chosenFighters=[];

    if(this.state.selected !==null){
      chosenFighters=this.state.stateNames[this.state.selected].fighters;
    }
    return (
      <div className="App">
        <section  className="Prospects_Section">
          <FighterList selected={this.state.selected} fighters={chosenFighters} loading={this.state.loading}/>
        </section>
        <section className="Map_Section">
          <CustomMap selected={this.state.selected} loading={this.state.loading}clicked={this.selectHandler}/>
        </section>
      </div>
    );
  }
}

export default App;
