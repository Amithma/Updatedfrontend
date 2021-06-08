import React, { Component, useEffect,useState,setState } from 'react';  
import axios from 'axios';  
import { Route,Link} from 'react-router-dom'



class AsComponentTable extends Component {  
  constructor(props) {  
    super(props);
    
    this.state = {  
      PLO:[],

    } 
  }

      getlo = (iid) => {
        debugger;

        axios.get('https://oberuhunaapi.azurewebsites.net//api/LOes1/'+iid)  // Get the marks and PO mappings of relevant LO
        .then(response => {  
          this.state.PLO = response.data 
          axios.put('https://oberuhunaapi.azurewebsites.net//api/LOes1/'+this.props.obj.lid,
          {
          lmarks:parseInt(this.state.PLO.lmarks)-parseInt(this.props.obj.marks),  // Substracting the marks of the relevant LO and update
          id:this.props.obj.lid, 
          loid:this.props.obj.loid,
          ModuleId:this.state.PLO.moduleId,
          name:this.state.PLO.name,
          p1:this.state.PLO.p1,
          p2:this.state.PLO.p2,
          p3:this.state.PLO.p3,
          p4:this.state.PLO.p4,
          p5:this.state.PLO.p5,
          p6:this.state.PLO.p6,
          p7:this.state.PLO.p7,
          p8:this.state.PLO.p8,
          p9:this.state.PLO.p9,
          p10:this.state.PLO.p10,
          p11:this.state.PLO.p11,
          p12:this.state.PLO.p12
        })
  
        })
     
       } 
    DeleteAsComponent= () =>{  
    this.getlo(this.props.obj.lid);
     axios.delete('https://oberuhunaapi.azurewebsites.net//api/AsComponents/'+this.props.obj.asID)  // Delete the assessment component
    .then(json => {  
    alert('Record deleted successfully!!');
    debugger;  
    window.location.reload(false);  
     
    }) 
   
    } 

  
     
  render() {  
    
    return ( 
       
        <tr >  
          <div class=" col-md-1 offset-md-3">
            <td >  
              {this.props.obj.ascomponent}  
            </td>
            
          </div>      
          
            <td >  
            <div style={{ textAlign:"center" }}>
              {this.props.obj.loid}  
              </div>
            </td> 

           <td >  
           <div style={{ textAlign:"center" }}>
              {this.props.obj.poid}  
              </div>
            </td>

            <td > 
            <div style={{ textAlign:"center" }}> 
              {this.props.obj.marks}  
              </div>  
            </td>
            <td class=" offset-md-3" > 
              <div style={{ textAlign:"center" }}> 
              {this.props.obj.ld}  
              </div> 
            </td>
            <td >  
            <div style={{ textAlign:"center" }}>
              {this.props.obj.type}  
              </div>
            </td>
          <td> 
            <Link to={`/AsComponent/${this.props.dataFromParent}`}>

              <button type="button" onClick={this.DeleteAsComponent} className="btn btn-danger">Delete</button> 
            </Link>          
          </td>
          
     </tr> 
      
    );

      
  }  
}  
  
export default AsComponentTable;