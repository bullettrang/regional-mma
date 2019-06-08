import React,{Component} from 'react';
import CustomMap from './CustomMap'
import Header from './Header';
export default class Page extends Component{
    render(){
        return(
            <div>
                <CustomMap/>
                {this.props.children}
            </div>
        )
    }
}