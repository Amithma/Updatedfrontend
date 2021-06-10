import React from 'react';
import axios from 'axios';   
import { Container, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';  
import AddasComponentLO from'../LO/AddasComponentLO'
import AddasComponentPO from'../PO/AddasComponentPO'
import Select from 'react-select'

class AddAsComponent extends React.Component{  
  constructor(props){  
  super(props)  
  this.state = {  
    ascomponent:'',
  loid:'',  
  poid:'',
  marks:'',
  ld:'',
  type:'',
  id:0,
  lmarks:0,
  name:'',
  mks:0,
  nm:'',
  lid:0,
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
  async getoptions(){
    const res =await axios.get('https://oberuhunaapi.azurewebsites.net//api/LOes?id='+this.props.match.params.Moduleid);  //get LOs related to the modules
    const data =res.data
    console.log(res.data);
 const options = data.map(d=> ({
   "num": d.id,
    "label" :d.loid,
    "mks":d.lmarks,
    "name":d.name,
    "p1":d.p1,
    "p2":d.p2,
    "p3":d.p3,
    "p4":d.p4,
    "p5":d.p5,
    "p6":d.p6,
    "p7":d.p7,
    "p8":d.p8,
    "p9":d.p9,
    "p10":d.p10,
    "p11":d.p11,
    "p12":d.p12
    
 }))

 this.setState({selectoptions: options})
}   

  async getpos(){
    const res1 =await axios.get('https://oberuhunaapi.azurewebsites.net//api/POes1');  //get LOs related to the modules
    const data =res1.data
    console.log(res1.data);
 const options = data.map(d=> ({
 
    "label" :d.poid,
    
 }))

 this.setState({selectoptions1: options})
}



handleChange2 = (e)=> {  
  this.setState({poid:e.label, 

 });  
  }
  handleChange1 = (e)=> {  
    this.setState({loid:e.label, id:e.num, mks:e.mks, nm:e.name,
    p1:e.p1,
    p2:e.p2,
    p3:e.p3,
    p4:e.p4,
    p5:e.p5,
    p6:e.p6,
    p7:e.p7,
    p8:e.p8,
    p9:e.p9,
    p10:e.p10,
    p11:e.p11,
    p12:e.p12,
   });  
    }

componentDidMount ()
{
  
  this.getpos()
  this.getoptions()
}
// creating new assignment components
  AddAsComponent=()=>{  
    
      {
        axios.post('https://oberuhunaapi.azurewebsites.net//api/AsComponents', {ascomponent:this.state.ascomponent,
      loid:this.state.loid,
      poid:this.state.poid,
      marks:this.state.marks,
      ld:this.state.ld,
      type:this.state.type,
      lid:this.state.id,
      ModuleId:this.props.match.params.Moduleid})
     
      .catch((err) => {
        console.log(err);
        
      alert("Error!! Data Not saved. Please Check the input feilds")})
    }
    // updating the LO marks by adding marks from Assessment component
    if((this.state.ascomponent!='')&&(this.state.poid!='')){
      axios.put('https://oberuhunaapi.azurewebsites.net//api/LOes1/'+this.state.id, {
      lmarks:parseInt(this.state.marks)+parseInt(this.state.mks) ,
      id:this.state.id, 
      loid:this.state.loid,
      ModuleId:this.props.match.params.Moduleid,
      name:this.state.nm,
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
      p12:this.state.p12
    })
      
    .then(json => {  
        console.log(json.data.Status);  
        alert("Data Save Successfully to " +this.props.match.params.Moduleid); 
        this.props.history.push( `/AsComponent/${this.props.match.params.Moduleid}`) 
                }  
        )

        .catch((err) => {  //Error handling
          console.error(err);
        alert("Invalid operation! Please select a LO")})
  }     

  }
// close when cancel button pressed
  onClose = () => {
      this.props.history.push(`/AsComponent/${this.props.match.params.Moduleid}`);
  }
         
      
// mappong data to state
  handleChange= (e)=> {  
  this.setState({[e.target.name]:e.target.value});  
  }  
    

  render() {  
  return (
    
    <Container className="App">        
     
    <h4 className="PageHeading"> Add Assignment Componets </h4>  
    <Form className="form">  
      <Col>
      <FormGroup row>  
          <Label for="ascomponent" sm={2}>Assignment Component</Label>  
          <Col sm={10}>  
            <Input type="text" name="ascomponent" onChange={this.handleChange} value={this.state.ascomponent} placeholder="Enter Assignment Component" />  
          </Col>  
        </FormGroup>  
         
        <FormGroup row>  
          <Label for="loid" sm={2}>LOID</Label>  
          <Col sm={10}>  
            <Select options={this.state.selectoptions} onChange={this.handleChange1.bind(this)}/>
            <p>You have selected <strong>{this.state.loid}</strong></p>
          </Col>  
        </FormGroup>
        <FormGroup row>  
          <Label for="poid" sm={2}>POID</Label>  
          <Col sm={10}>  
         <Select options={this.state.selectoptions1} onChange={this.handleChange2.bind(this)}/>
         {/*<Input type="text" name="poid" onChange={this.handleChange} value={this.state.poid} placeholder="Enter valid PO from bottom List" />*/}
          <p>You have selected <strong>{this.state.poid}</strong></p>
          </Col>  
        </FormGroup>  
          
        <FormGroup row>  
          <Label for="marks" sm={2}>Marks</Label>  
          <Col sm={10}>  
            <Input type="text" name="marks" onChange={this.handleChange} value={this.state.marks} placeholder="Enter Marks" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="ld" sm={2}>Learning Domain</Label>  
          <Col sm={10}>  
            <Input type="text" name="ld" onChange={this.handleChange} value={this.state.ld} placeholder="C1/C2/C3/C4/P/A" />  
          </Col>  
        </FormGroup> 
        <FormGroup row>  
          <Label for="type" sm={2}>Type</Label>  
          <Col sm={10}>  
            <Input type="text" name="type" onChange={this.handleChange} value={this.state.type} placeholder="C/E" />  
          </Col>  
        </FormGroup>  
         
            
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={2}>  
          <button type="button" onClick={this.AddAsComponent} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={2}>  
            <Button color="danger" onClick={this.onClose}>Cancel</Button>
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>
        <FormGroup row>
            <div class="column">
                <AddasComponentLO  dataFromParent = {this.props.match.params.Moduleid}/> {/*child components to display LOs*/ }
            </div>
            <div class="column">
                <AddasComponentPO  />   {/*child components to display POs*/ }
            </div>
       </FormGroup>  
    </Form>  
    
  </Container>  
    
  );
}

}

export default AddAsComponent