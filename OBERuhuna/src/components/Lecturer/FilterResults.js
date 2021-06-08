import React, { Component } from 'react';  
import { Link} from 'react-router-dom'
import axios from 'axios';  
import Table2 from '../Lecturer/Table2';  
import Logo from '../logo.jpg';

export default class FilterResults extends Component {  

  constructor(props) {  
 
      super(props);  
      this.state = {business: [],
        moduleId:'',
        module:[],
          LOs:[],};  
    } 
    
    // Linking the google sheet for results upload
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

        const res =await axios.get('https://oberuhunaapi.azurewebsites.net//api/LOes?id='+this.props.match.params.moduleId)  // get LO id for table header
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
                  <td>
                  <div style={{ textAlign:"rignt" }}>{LO.loid}</div>
                  </td>
              </th>
          )
      } );
  }
  
    render() {  
      return (  
        <div >  
        
        <div  >

          <div class="column col-md-1 offset-md-5">
            <h4 align="center">Results of Module {this.props.match.params.moduleId}</h4>  
        </div>
        <div class="column col-md-2 offset-md-4">
            <a href="https://docs.google.com/spreadsheets/d/14j_xmXiC0LeaxC1j0FWnK0nLSDQuy602mXN111lxZSA/edit#gid=0" target="_blank" > {/*Link for the google sheet */}
                  <button type="button"  className="btn btn-success">Add Results</button> 
            </a>
        </div>


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
