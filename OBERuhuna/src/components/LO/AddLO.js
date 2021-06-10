import React from 'react';
import axios from 'axios';   
import { Container, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';  
import Logo from '../logo.jpg';
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom'

class AddLO extends React.Component{  
  constructor(props){  
  super(props)  
  this.state = {  
  loid:'',  
  name:'',
  ModuleId:'', 
  p1:'',
  p2:'',
  p3:'',
  p4:'',
  p5:'',
  p6:'',
  p7:'',
  p8:'',
  p9:'',
  p10:'',
  p11:'',
  p12:'',
  } 
  
  }   
  AddLO=()=>{  
    axios.post('https://oberuhunaapi.azurewebsites.net//api/LOes', {loid:this.state.loid,
  name:this.state.name,ModuleId:this.props.match.params.value,
p1:this.state.p1,
p2:this.state.p2,
p3:this.state.p3,
p4:this.state.p4,
p5:this.state.p5,
p6:this.state.p6,
p7:this.state.p7,
p8:this.state.p8,
p9:this.state.p9,
p10:this.state.p10,
p11:this.state.p11,
p12:this.state.p12, })  
    
  .then(json => {  
      console.log(json.data.Status);  
      alert("Data Save Successfully to "+this.props.match.params.value); 
      window.open("", "_self");
    window.close(); 
      this.props.history.push('/LOlist') 
              }  
      )
  .catch((err) => {
    console.log(err);
    
  alert("Error!! Data Not saved. Please enter LOID and LO name")})
      
              

  }

  onClose = () => {
    alert("Are you sure you want to cancel?"); 
    window.open("", "_self");
    window.close();
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
     
     

    <div class="w3-container" >
            <div class="w3-bar w3-blue">
          <h3 align="center"><strong>Add Learning Outcomes to Module {this.props.match.params.value}</strong></h3></div></div><br></br>
    <Form className="form">  
      <Col>  
      <FormGroup row>  
          <Label for="loid" sm={2}></Label>  
            
        </FormGroup>  


        <FormGroup row>  
          <Label for="loid" sm={2}>LOID</Label>  
          <Col sm={10}>  
            <Input type="text" name="loid" onChange={this.handleChange} value={this.state.loid}  placeholder="Enter LO Id"  />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="name" sm={2}>Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Enter LO Name" />  
          </Col>  
        </FormGroup> 
        <FormGroup row>  
          <Label for="p1" sm={2}>PO1</Label>  
          <Col sm={10}>  
            <select className="form-control mb-3" onChange={event => this.setState({p1:event.target.value})}>
              <option value=""></option>
              <option value="H">H</option>
              <option value="M">M</option>
              <option value="L">L</option>       
            </select>
         </Col>  
         </FormGroup>

         <FormGroup row>  
          <Label for="p2" sm={2}>PO2</Label>  
          <Col sm={10}>  
          <select className="form-control mb-3" onChange={event => this.setState({p2:event.target.value})}>
            <option value=""></option>
            <option value="H">H</option>
            <option value="M">M</option>
            <option value="L">L</option>       
        </select>
             
          </Col>  
         </FormGroup>
         <FormGroup row>  
          <Label for="p3" sm={2}>PO3</Label>  
          <Col sm={10}>  
          <select className="form-control mb-3"  onChange={event => this.setState({p3:event.target.value})}>
            <option value=""></option>
            <option value="H">H</option>
            <option value="M">M</option>
            <option value="L">L</option>       
          </select>  
          </Col>  
         </FormGroup>

         <FormGroup row>  
          <Label for="p4" sm={2}>PO4</Label>  
          <Col sm={10}>  
          <select className="form-control mb-3"  onChange={event => this.setState({p4:event.target.value})}>
            <option value=""></option>
            <option value="H">H</option>
            <option value="M">M</option>
            <option value="L">L</option>       
          </select>  
          </Col>  
         </FormGroup>
         <FormGroup row>  
          <Label for="p5" sm={2}>PO5</Label>  
          <Col sm={10}>  
          <select className="form-control mb-3"  onChange={event => this.setState({p5:event.target.value})}>
            <option value=""></option>
            <option value="H">H</option>
            <option value="M">M</option>
            <option value="L">L</option>       
          </select>  
    
          </Col>  
         </FormGroup>
  
         <FormGroup row>  
          <Label for="p6" sm={2}>PO6</Label>  
          <Col sm={10}>  
          <select className="form-control mb-3"  onChange={event => this.setState({p6:event.target.value})}>
            <option value=""></option>
            <option value="H">H</option>
            <option value="M">M</option>
            <option value="L">L</option>       
          </select>  
            </Col>  
         </FormGroup>
         <FormGroup row>  
          <Label for="p7" sm={2}>PO7</Label>  
          <Col sm={10}>  
          <select className="form-control mb-3"  onChange={event => this.setState({p7:event.target.value})}>
            <option value=""></option>
            <option value="H">H</option>
            <option value="M">M</option>
            <option value="L">L</option>       
          </select>  
   
          </Col>  
         </FormGroup>
         <FormGroup row>  
          <Label for="p8" sm={2}>PO8</Label>  
          <Col sm={10}>
          <select className="form-control mb-3"  onChange={event => this.setState({p3:event.target.value})}>
            <option value=""></option>
            <option value="H">H</option>
            <option value="M">M</option>
            <option value="L">L</option>       
          </select>  
    
          </Col>  
         </FormGroup>
         <FormGroup row>  
          <Label for="p9" sm={2}>PO9</Label>  
          <Col sm={10}>  
          <select className="form-control mb-3"  onChange={event => this.setState({p9:event.target.value})}>
            <option value=""></option>
            <option value="H">H</option>
            <option value="M">M</option>
            <option value="L">L</option>       
          </select>  
            </Col>  
         </FormGroup>
         <FormGroup row>  
          <Label for="p10" sm={2}>PO10</Label>  
          <Col sm={10}>  
          <select className="form-control mb-3"  onChange={event => this.setState({p10:event.target.value})}>
            <option value=""></option>
            <option value="H">H</option>
            <option value="M">M</option>
            <option value="L">L</option>       
          </select>  
   
          </Col>  
         </FormGroup>
  
         <FormGroup row>  
          <Label for="p11" sm={2}>PO11</Label>  
          <Col sm={10}>  
          <select className="form-control mb-3"  onChange={event => this.setState({p11:event.target.value})}>
            <option value=""></option>
            <option value="H">H</option>
            <option value="M">M</option>
            <option value="L">L</option>       
          </select>  
          </Col>  
         </FormGroup>
         <FormGroup row>  
          <Label for="p12" sm={2}>PO12</Label>  
          <Col sm={10}>  
          <select className="form-control mb-3"  onChange={event => this.setState({p12:event.target.value})}>
            <option value=""></option>
            <option value="H">H</option>
            <option value="M">M</option>
            <option value="L">L</option>       
          </select>  
   
          </Col>  
         </FormGroup>
      </Col>
        
           
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={2}>  
          <button type="button" onClick={this.AddLO} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={2}>  
            <Button color="danger" onClick={this.onClose}>Cancel</Button>
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

export default AddLO