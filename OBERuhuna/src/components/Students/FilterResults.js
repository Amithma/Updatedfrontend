import React, { Component } from 'react';  
import { Link} from 'react-router-dom'
import axios from 'axios';  
import Table2 from '../Lecturer/Table2';  


export default class FilterResults extends Component {  

  constructor(props) {  
 
      super(props);  
      this.state = {business: [],
        moduleId:'',
        module:[],
          LOs:[],};  
    } 
    
    // Get results from  the google sheet
    async componentDidMount(){  
      debugger;  
      console.log(this.props.match.params.moduleId);
      axios.get('https://sheetdb.io/api/v1/x56s2u7t66fhe?sheet='+this.props.match.params.moduleId)  
        .then(response => {  
          this.setState({ business: response.data });  
      
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
        // Get LOids fo results table
        const res =await axios.get('https://oberuhunaapi.azurewebsites.net//api/LOes?id='+this.props.match.params.moduleId)  
        const LOs = res.data;
        this.setState({LOs});
        console.log(LOs)
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table2 obj={object} key={i} />;  
      });  
    }  

    rendertableheader = () =>{
      return this.state.LOs.map(LO=> {
          return(
              <th key={LO.loid}>
                  <td>{LO.loid}</td>
              </th>
          )
      } );
  }
  
    render() {  
      return (  
        <div >  
        
        <div  >
          <h4 align="center">LO List</h4>  
          <table allign="left" className="table table-striped " >  
            <thead >  
              <tr >  
                <th >REG_NO</th>   
                {this.rendertableheader()}
                <th >Total</th> 
              </tr>  
            </thead>  
            <tbody  >  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  </div>
      );  
    }  
  }  
