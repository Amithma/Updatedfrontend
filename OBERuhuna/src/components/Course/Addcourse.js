import React from 'react';  
import axios from 'axios';   
import {Link} from 'react-router-dom';
import { Container, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';  
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class Addcourse extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
ModuleId:'',  
Name:'', 
credits:'',
type:'',
state:'',
} 

}   
Addcourse=()=>{  //creating a new course

  axios.post('https://oberuhunaapi.azurewebsites.net//api/modules', {ModuleId:this.state.ModuleId,
  Name:this.state.Name,
  credits:this.state.credits,
  state:this.state.state,
  type:this.state.type })  
  
.then(json => {  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/Courselist')  
})

.catch((err) => {
  console.log(err.title);
  debugger;
alert("Error!! Data Not saved. Please fill all the feilds")})

}  

// map data save data from input to state             
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
handleChange1 =(e)=>{
  this.setState({type:e.target.value});
}

handleChange2 =(e)=>{
  this.setState({state:e.target.value});
}
   
render() {  
return (     <Container className="App">  
<h4 className="PageHeading">Enter Course Informations</h4>  
<Form className="form">  
  <Col>  
    <FormGroup row>  
      <Label for="ModuleId" sm={2}>ModuleId</Label>  
      <Col sm={10}>  
        <Input type="text" name="ModuleId" onChange={this.handleChange} value={this.state.ModuleId} placeholder="Enter Module Id" />  
      </Col>  
    </FormGroup>  
    <FormGroup row>  
      <Label for="name" sm={2}>Module Name</Label>  
      <Col sm={10}>  
        <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter Module Name" />  
      </Col>  
    </FormGroup>
    <FormGroup row>

      <Label for="credits" sm={2}>Number of Credits</Label>  
      <Col sm={10}>  
        <Input type="text" name="credits" onChange={this.handleChange} value={this.state.credits} placeholder="Enter Number of Credits" />  
      </Col>  
    </FormGroup>
    
    <FormGroup row>  
      <Label for="type" sm={2}>Type of the Module</Label>  
      <Col sm={10}>  

      {/* Dropdown for selecting course type */}
      <select className="form-control mb-3" onChange={this.handleChange1}>
          <option value=""></option>
          <option value="Core">Core</option>
          <option value="TE">TE</option>
          <option value="GE">GE</option>
                                                
      </select>

      
      </Col>  
    </FormGroup> 

    <FormGroup row>  
      <Label for="state" sm={2}>State of the Module</Label>  
      <Col sm={10}>  
      {/* dropdown for selecting the course type */}
        <select className="form-control mb-3" onChange={this.handleChange2}>
            <option value=""></option>
            <option value="GPA">GPA</option>
            <option value="NGPA">NGPA</option>
        </select>
      </Col>  
    </FormGroup>  
       
  </Col>  
  <Col>  
    <FormGroup row>  
      <Col sm={5}>  
      </Col>  
      <Col sm={2}>  
      <button type="button" onClick={this.Addcourse} className="btn btn-success">Submit</button>  
      </Col>  
      <Col sm={2}> 
      <Link to ={'/Courselist'}> 
        <Button color="danger">
          Cancel</Button>{' '} 
          </Link>     
      </Col>  
      <Col sm={5}>  
      </Col>  
    </FormGroup>  
  </Col>  
</Form>  
</Container>   
);  
}  
   
}  
   
export default Addcourse;