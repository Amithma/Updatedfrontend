import React from 'react';
import axios from 'axios';   
import { Container, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';  
import Logo from '../logo.jpg';
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom'

class AddPO extends React.Component{  
  constructor(props){  
  super(props)  
  this.state = {  
  poid:'',  
  poName:'',
  id:'',    
  } 
  
  }   
  AddPO=()=>{  
    axios.post('https://oberuhunaapi.azurewebsites.net//api/POes1', {poid:this.state.poid,
    poName:this.state.poName,
  })
    
  .then(json => {  
      alert("New PO Added to the list");
      this.props.history.push( `/POlist`)    
     }  
      )
      .catch((err) => {
        console.log(err);
        
      alert("Error!! Data Not saved. Data already in the database")})  
          
              
      
  }

  onClose = () => {
    alert("Are you Sure You want to cancel?"); 
    this.props.history.push( `/POlist`)    
     
  }
         
      

  handleChange= (e)=> {  
  this.setState({[e.target.name]:e.target.value});  
  }  
    

  render() {  
  return (
    <div>
       <div class= "header">
          <img src={Logo} alt ='weblogo' />
          <h1>
              <Link className="header" to='/'  >
                  Faculty of Engineering University of Ruhuna
              </Link>
          </h1>
                            
          <h2><strong>OBE Curriculum Plannig Tool</strong></h2>

        </div>

    <Container className="App"> 
     
    <h4 className="PageHeading">Add Program Outcomes </h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="poid" sm={2}>Enter Poid</Label>  
          <Col sm={10}>  
            <Input type="text" name="poid" onChange={this.handleChange} value={this.state.poid} placeholder="POid" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="name" sm={2}>Enter PO Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="poName" onChange={this.handleChange} value={this.state.poName} placeholder="PO Name" />  
          </Col>  
        </FormGroup>  
           
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={2}>  
          <button type="button" onClick={this.AddPO} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={2}>  
            <Button color="danger"  onClick={this.onClose} >Cancel</Button>
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
 </div>   
  );
}
}

export default AddPO