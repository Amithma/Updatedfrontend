import React, { Component } from 'react';  
import axios from 'axios';  
//import { Link } from 'react-router-dom';  
import CourseDetails from '../Lecturer/CourseDetails'
import { Route,Link} from 'react-router-dom'


class Table2 extends Component {  
  

  constructor(props) {  
    super(props);  
    }

     // Render result data
  render() {  
    return (  
     
        <tr>
            <td >  
                    {this.props.obj.Reg_NO}  
           </td> 
            <td >  
                    {this.props.obj.LO1}  
           </td> 
           <td >  
                    {this.props.obj.LO2}  
           </td>
           <td >  
                    {this.props.obj.LO3}  
           </td>
           <td >  
                    {this.props.obj.LO4}  
           </td>
           <td >  
                    {this.props.obj.LO5}  
           </td>
           <td >  
                    {this.props.obj.Total}  
           </td>

        </tr> 
        
    );
      
  }  
}  
  
export default Table2; 