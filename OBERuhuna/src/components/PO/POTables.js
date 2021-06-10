import React, { Component } from 'react';  
import axios from 'axios';  
//import { Link } from 'react-router-dom';  
import { Route,Link} from 'react-router-dom'

class POTable extends Component {  
  

  constructor(props) {  
    super(props);  
    }
      
    DeletePO= () =>{  
     axios.delete('https://oberuhunaapi.azurewebsites.net//api/POes1/'+this.props.obj.poid)  
    .then(json => {  
    alert('Record deleted successfully!!');
    window.location.reload(false);  
     
    })
    
    .catch((err) => {  //Error handling
      console.error(err);
    alert("Invalid operation! This PO is assigned to an assessment component.")}) 
   
    } 
     
  render() {  
    return (  
        <tr >  
          <div class=" col-md-1 offset-md-5">
            <td >  
              {this.props.obj.poid}  
            </td>
            
          </div>      
          
            <td >  
              {this.props.obj.poName}  
            </td>

          <td>  
            <Link to={`/POlist/${this.props.dataFromParent}`}>
              <button type="button" onClick={this.DeletePO} className="btn btn-danger">Delete</button> 
              </Link>                 
          </td>
      </tr> 
    );
      
  }  
}  
  
export default POTable; 