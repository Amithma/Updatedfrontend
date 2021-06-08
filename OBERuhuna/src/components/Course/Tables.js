import React, { Component } from 'react';  
import axios from 'axios';  
import { Route,Link} from 'react-router-dom'


class Table extends Component {  
  

  constructor(props) {  
    super(props);  
    }
      //Deleting course and display console message
    DeleteCourse= () =>{  
     axios.delete('https://oberuhunaapi.azurewebsites.net//api/modules/'+this.props.obj.moduleId)  
    .then(json => {  
    alert('Record deleted successfully!!');  
     
    }) 
   
    } 
     
  render() {  
    return (  
        <tr>  
          <td >  
            {this.props.obj.moduleId}  
          </td>  
          <td>  
            {this.props.obj.name}  
          </td> 
          <td>
            {this.props.obj.credits}
            </td>  
            <td>
            {this.props.obj.type}
            </td>  
            <td>
            {this.props.obj.state}
            </td>  
          <td>  
            <Link to={"/"}>
              <button type="button" onClick={this.DeleteCourse} className="btn btn-danger">Delete</button> 
              </Link>                 
          </td>
        </tr> 
    );
      
  }  
}  
  
export default Table; 