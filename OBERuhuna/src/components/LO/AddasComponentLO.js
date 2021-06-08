import React, { Component } from 'react';  
import axios from 'axios';  
import Logo from './logo.jpg';
import LOTable from '../LO/AddasComponentLOtable';  
  
export default class AddasComponentLO extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    // This file display the LOs in add Assessment component file
    componentDidMount(){  
      debugger;  
      axios.get('https://oberuhunaapi.azurewebsites.net//api/LOes?id='+this.props.dataFromParent)  
        .then(response => {  
      
          this.setState({ business: response.data });
          console.log(json.data.Status);  
          alert("LOs of  "+this.props.match.params.value);   
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <LOTable obj={object} key={i} />;  
      });  
    }  
    
    render() {  
      return (    
        <div>  
          <h5 align="center">LO List</h5>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th >LOId</th>  
                <th >LO Name</th>
   
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  
