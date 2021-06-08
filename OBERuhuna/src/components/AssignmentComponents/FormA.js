import React, { Component } from 'react';  
import axios from 'axios';  
import Logo from '../../photos/logo.jpg';
import {Button } from 'reactstrap'
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom'

  
export default class FormA extends Component {  
  
   moduleId=this.props.match.params.value;
  constructor(props) {  
      super(props);  
      this.state = {
        moduleId:'',
        module:[],
          POs:[],
          LOs:[],
          ph1:0,pm1:0,pl1:0,
          ph2:0,pm2:0,pl2:0,
          ph3:0,pm3:0,pl3:0,
          ph4:0,pm4:0,pl4:0,
          ph5:0,pm5:0,pl5:0,
          ph6:0,pm6:0,pl6:0,
          ph7:0,pm7:0,pl7:0,
          ph8:0,pm8:0,pl8:0,
          ph9:0,pm9:0,pl9:0,
          ph10:0,pm10:0,pl10:0,
          ph11:0,pm11:0,pl11:0,
          ph12:0,pm12:0,pl12:0,
          sum1:0,sum2:0,sum3:0,sum4:0,
          sum5:0,sum6:0,sum7:0,sum8:0,
          sum9:0,sum10:0,sum11:0,sum12:0,
          s1:'',
          s2:'',
          s3:'',
          s4:'',
          s5:'',
          s6:'',
          s7:'',
          s8:'',
          s9:'',
          s10:'',
          s11:'',
          s12:'',
      } 
    } 


    Addsummary=()=>{
      debugger;
      //Update module data according to the summary
      axios.put('https://oberuhunaapi.azurewebsites.net/api/modules/'+this.props.match.params.ModuleId, 
      {
        
        moduleId:this.props.match.params.ModuleId,
        name:this.state.module.name,
        credits:this.state.module.credits,
        type:this.state.module.type,
        state:this.state.module.state,
        s1:this.state.s1,
        s2:this.state.s2,
        s3:this.state.s3,
        s4:this.state.s4,
        s5:this.state.s5,
        s6:this.state.s6,
        s7:this.state.s7,
        s8:this.state.s8,
        s9:this.state.s9,
        s10:this.state.s10,
        s11:this.state.s11,
        s12:this.state.s12,
       }
      )
      .then(json => {  
        alert("Saved mapping summary to database module" +this.state.module.moduleId);
        })   

    }

    async componentDidMount(){  
      debugger;  
      
      const response =await axios.get('https://oberuhunaapi.azurewebsites.net//api/POes1')  
        const POs = response.data;
        this.setState({POs});
        console.log(POs);

        const res =await axios.get('https://oberuhunaapi.azurewebsites.net//api/LOes?id='+this.props.match.params.ModuleId)  
        const LOs = res.data;
        this.setState({LOs});
        console.log(LOs)

        const res1 =await axios.get('https://oberuhunaapi.azurewebsites.net//api/modules/'+this.props.match.params.ModuleId)  
        const module = res1.data;
        this.setState({module});
       
    }    
       

    
    rendertableheader = () =>{
        return this.state.POs.map(PO=> {
            return(
                <th key={PO.poid}>
                    <td>{PO.poid}</td>
                </th>
            )
        } );
    }

    //Calaculating H M L total marks by adding the LO weight and Respective H M L state value
     

sumcal1(LO){
  
  if(LO.p1=='H')
   { this.state.ph1 = parseFloat(LO.lmarks*0.5)+parseFloat(this.state.ph1);}
  else if(LO.p1=='M')
    {this.state.pm1=parseFloat(LO.lmarks*0.3)+parseFloat(this.state.pm1);}
  else if(LO.p1=='L')
      {this.state.pl1=parseFloat(LO.lmarks*0.2)+parseFloat(this.state.pl1);}  
}
sumcal2(LO){
  debugger;
  if(LO.p2=='H')
   { this.state.ph2 = parseFloat(LO.lmarks*0.5)+parseFloat(this.state.ph2);}
  else if(LO.p2=='M')
    {this.state.pm2=parseFloat(LO.lmarks*0.3)+parseFloat(this.state.pm2);}
  else if(LO.p2=='L')
      {this.state.pl2=parseFloat(LO.lmarks*0.2)+parseFloat(this.state.pl2);}  
}

sumcal3(LO){
  if(LO.p3=='H')
   { this.state.ph3 = parseFloat(LO.lmarks*0.5)+parseFloat(this.state.ph3);}
  else if(LO.p3=='M')
    {this.state.pm3=parseFloat(LO.lmarks*0.3)+parseFloat(this.state.pm3);}
  else if(LO.p3=='L')
      {this.state.pl3=parseFloat(LO.lmarks*0.2)+parseFloat(this.state.pl3);}  
}
sumcal4(LO){
  if(LO.p4=='H')
   { this.state.ph4 = parseFloat(LO.lmarks*0.5)+parseFloat(this.state.ph4);}
  else if(LO.p4=='M')
    {this.state.pm4=parseFloat(LO.lmarks*0.3)+parseFloat(this.state.pm4);}
  else if(LO.p4=='L')
      {this.state.pl4=parseFloat(LO.lmarks*0.2)+parseFloat(this.state.pl4);}  
}
sumcal5(LO){
  if(LO.p5=='H')
   { this.state.ph5= parseFloat(LO.lmarks*0.5)+parseFloat(this.state.ph5);}
  else if(LO.p5=='M')
    {this.state.pm5=parseFloat(LO.lmarks*0.3)+parseFloat(this.state.pm5);}
  else if(LO.p5=='L')
      {this.state.pl5=parseFloat(LO.lmarks*0.2)+parseFloat(this.state.pl5);}  
}
sumcal6(LO){
  if(LO.p6=='H')
   { this.state.ph6 = parseFloat(LO.lmarks*0.5)+parseFloat(this.state.ph6);}
  else if(LO.p6=='M')
    {this.state.pm6=parseFloat(LO.lmarks*0.3)+parseFloat(this.state.pm6);}
  else if(LO.p6=='L')
      {this.state.pl6=parseFloat(LO.lmarks*0.2)+parseFloat(this.state.pl6);}  
}
sumcal7(LO){
  if(LO.p7=='H')
   { this.state.ph7 = parseFloat(LO.lmarks*0.5)+parseFloat(this.state.ph7);}
  else if(LO.p7=='M')
    {this.state.pm7=parseFloat(LO.lmarks*0.3)+parseFloat(this.state.pm7);}
  else if(LO.p7=='L')
      {this.state.pl7=parseFloat(LO.lmarks*0.2)+parseFloat(this.state.pl7);}  
}

sumcal8(LO){
  if(LO.p8=='H')
   { this.state.ph8 = parseFloat(LO.lmarks*0.5)+parseFloat(this.state.ph8);}
  else if(LO.p8=='M')
    {this.state.pm8=parseFloat(LO.lmarks*0.3)+parseFloat(this.state.pm8);}
  else if(LO.p8=='L')
      {this.state.pl8=parseFloat(LO.lmarks*0.2)+parseFloat(this.state.pl8);}  
}

sumcal9(LO){
  if(LO.p9=='H')
   { this.state.ph9 = parseFloat(LO.lmarks*0.5)+parseFloat(this.state.ph9);}
  else if(LO.p9=='M')
    {this.state.pm9=parseFloat(LO.lmarks*0.3)+parseFloat(this.state.pm9);}
  else if(LO.p9=='L')
      {this.state.pl9=parseFloat(LO.lmarks*0.2)+parseFloat(this.state.pl9);}  
}

sumcal10(LO){
  if(LO.p10=='H')
   { this.state.ph10 = parseFloat(LO.lmarks*0.5)+parseFloat(this.state.ph10);}
  else if(LO.p10=='M')
    {this.state.pm10=parseFloat(LO.lmarks*0.3)+parseFloat(this.state.pm10);}
  else if(LO.p10=='L')
      {this.state.pl10=parseFloat(LO.lmarks*0.2)+parseFloat(this.state.pl10);}  
}

sumcal11(LO){
  if(LO.p11=='H')
   { this.state.ph11 = parseFloat(LO.lmarks*0.5)+parseFloat(this.state.ph11);}
  else if(LO.p11=='M')
    {this.state.pm11=parseFloat(LO.lmarks*0.3)+parseFloat(this.state.pm11);}
  else if(LO.p11=='L')
      {this.state.pl11=parseFloat(LO.lmarks*0.2)+parseFloat(this.state.pl11);}  
}

sumcal12(LO){
  if(LO.p12=='H')
   { this.state.ph12 = parseFloat(LO.lmarks*0.5)+parseFloat(this.state.ph12);}
  else if(LO.p12=='M')
    {this.state.pm12=parseFloat(LO.lmarks*0.3)+parseFloat(this.state.pm12);}
  else if(LO.p12=='L')
      {this.state.pl12=parseFloat(LO.lmarks*0.2)+parseFloat(this.state.pl12);}  
}


renderrows=() => {
        return this.state.LOs.map(LO=> {
            return(
                <tr key={LO.id}>
                    <td>{LO.loid}</td>
                    <td>{LO.lmarks/100} </td>
                    <td> {LO.p1}</td>
                    <td>{LO.p10}</td>
                    <td>{LO.p11}</td>
                    <td>{LO.p12}</td>
                    <td>{LO.p2}</td>
                    <td>{LO.p3}</td>
                    <td>{LO.p4}</td>
                    <td>{LO.p5}</td>
                    <td>{LO.p6}</td>
                    <td>{LO.p7}</td>
                    <td>{LO.p8}</td>
                    <td>{LO.p9}</td>
                   {this.sumcal1(LO)}
                   {this.sumcal2(LO)}
                   {this.sumcal3(LO)}
                   {this.sumcal4(LO)}
                   {this.sumcal5(LO)}
                   {this.sumcal6(LO)}
                   {this.sumcal7(LO)}
                   {this.sumcal8(LO)}
                   {this.sumcal9(LO)}
                   {this.sumcal10(LO)}
                   {this.sumcal11(LO)}
                   {this.sumcal12(LO)}
                  </tr>

                  )
              }
          );

    }

    // Final Summary H M L values
        sum1(){ // summary PO1 value state.s1
      this.state.sum1=(parseInt(this.state.ph1)+parseInt(this.state.pm1)+parseInt(this.state.pl1));  
      if(this.state.sum1>=50)
      {
        {this.state.s1='H'}
        return( <td>{this.state.s1}</td>)
     }
      else if(this.state.sum1>=30)
      {
        {this.state.s1='M'}
        return(<td>{this.state.s1}</td>)}
      else if(this.state.sum1>=20)
      {
        {this.state.s1='L'}
        return(<td>{this.state.s1}</td>)
      }
      console.log(this.state.s1);   
    }

    sum2(){  //PO2 Summary value state.s2
      this.state.sum2=(parseInt(this.state.ph2)+parseInt(this.state.pm2)+parseInt(this.state.pl2));
      if(this.state.sum2>=50)
      {
        {this.state.s2='H'}
        return( <td>H</td>)
     }
      else if(this.state.sum2>=30)
      {
        {this.state.s2='M'}
        return(<td>M</td>)
      }
      else if(this.state.sum2>=20)
      {
        {this.state.s2='L'}
      return(<td>L</td>)
      }
    }
    
    sum3(){
      this.state.sum3=(parseInt(this.state.ph3)+parseInt(this.state.pm3)+parseInt(this.state.pl3));
      if(this.state.sum3>=50)
      {
        {this.state.s3='H'}
        return( <td>H</td>)
     }
      else if(this.state.sum3>=30)
      {
        {this.state.s3='M'}
        return(<td>M</td>)
      }
      else if(this.state.sum3>=20)
      {
        {this.state.s3='L'}
        return(<td>L</td>)}
    }
    sum4(){
      this.state.sum4=(parseInt(this.state.ph4)+parseInt(this.state.pm4)+parseInt(this.state.pl4));
      if(this.state.sum4>=50)
      {
        {this.state.s4='H'}
        return( <td>H</td>)
     }
      else if(this.state.sum4>=30)
      {
        {this.state.s4='M'}
        return(<td>M</td>)
      }
      else if(this.state.sum4>=20)
      {
        {this.state.s4='L'}
        return(<td>L</td>)
      }
    }
    sum5(){
      this.state.sum5=(parseInt(this.state.ph5)+parseInt(this.state.pm5)+parseInt(this.state.pl5));
      if(this.state.sum5>=50)
      {
        {this.state.s5='H'}
        return( <td>H</td>)
     }
      else if(this.state.sum5>=30)
      {
        {this.state.s5='M'}
        return(<td>M</td>)
      }
      else if(this.state.sum5>=20)
      {
        {this.state.s5='L'}
        return(<td>L</td>)
      }
    }
    sum6(){
      this.state.sum6=(parseInt(this.state.ph6)+parseInt(this.state.pm6)+parseInt(this.state.pl6));
      if(this.state.sum6>=50)
      {
        {this.state.s6='H'}
         return( <td>H</td>)
     }
      else if(this.state.sum6>=30)
      {
        {this.state.s6='M'}
        return(<td>M</td>)
      }
      else if(this.state.sum6>=20)
      {
        {this.state.s6='L'}
        return(<td>L</td>)
      }
    }
    sum7(){
      this.state.sum7=(parseInt(this.state.ph7)+parseInt(this.state.pm7)+parseInt(this.state.pl7));
      if(this.state.sum7>=50)
      {
        {this.state.s7='H'}
        return( <td>H</td>)
     }
      else if(this.state.sum7>=30)
      {
        {this.state.s7='M'}
        return(<td>M</td>)
      }
      else if(this.state.sum7>=20)
      {
        {this.state.s7='L'}
        return(<td>L</td>)
      }
    }
    sum8(){
      this.state.sum8=(parseInt(this.state.ph8)+parseInt(this.state.pm8)+parseInt(this.state.pl8));
      if(this.state.sum8>=50)
      {
        {this.state.s8='H'} 
        return( <td>H</td>)
     }
      else if(this.state.sum8>=30)
      {
        {this.state.s8='M'}
        return(<td>M</td>)
      }
      else if(this.state.sum8>=20)
      {
        {this.state.s8='L'}
        return(<td>L</td>)
      }
    }
    sum9(){
      this.state.sum9=(parseInt(this.state.ph9)+parseInt(this.state.pm9)+parseInt(this.state.pl9));
      if(this.state.sum9>=50)
      {
        {this.state.s9='H'}
        return( <td>H</td>)
     }
      else if(this.state.sum9>=30)
      {
        {this.state.s9='M'}
        return(<td>M</td>)
      }
      else if(this.state.sum9>=20)
      {
        {this.state.s9='L'}
        return(<td>L</td>)
      }
    }
    sum10(){
      this.state.sum10=(parseInt(this.state.ph10)+parseInt(this.state.pm10)+parseInt(this.state.pl10));
      if(this.state.sum10>=50)
      {
        {this.state.s10='H'}
        return( <td>H</td>)
     }
      else if(this.state.sum10>=30)
      {
        {this.state.s10='M'}
        return(<td>M</td>)
      }
      else if(this.state.sum10>=20)
      {
        {this.state.s10='L'}
        return(<td>L</td>)
      }
    }
    sum11(){
      this.state.sum11=(parseInt(this.state.ph11)+parseInt(this.state.pm11)+parseInt(this.state.pl11));
      if(this.state.sum11>=50)
      {
        {this.state.s11='H'}
        return( <td>H</td>)
     }
      else if(this.state.sum11>=30)
      {
        {this.state.s11='M'}
        return(<td>M</td>)
      }
      else if(this.state.sum11>=20)
      {
        {this.state.s11='L'}
        return(<td>L</td>)
      }
    }
    sum12(){
      this.state.sum12=(parseInt(this.state.ph12)+parseInt(this.state.pm12)+parseInt(this.state.pl12));
      if(this.state.sum12>=50)
      {
        {this.state.s12='H'}
         return( <td>H</td>)
     }
      else if(this.state.sum12>=30)
      {
        {this.state.s12='M'}
        return(<td>M</td>)
      }
      else if(this.state.sum12>=20)
      {
        {this.state.s12='L'}
        return(<td>L</td>)
      }
    }

    
    render() {
        const {POs} = this.state  
        if (POs.length>0)
        {

        }
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
        <div>
              <h1>{this.props.match.params.ModuleId} </h1>
        <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th >LOID </th>
                <th>LO Weight</th>                 
                {this.rendertableheader()}
            
              </tr>  
              </thead>
              <tbody>
                  {this.renderrows()}   
                  <td></td>
                  <td>H</td>    {/* Data for H count */}
                  <td>{this.state.ph1}</td>
                  <td>{this.state.ph10}</td>
                  <td>{this.state.ph11}</td>
                  <td>{this.state.ph12}</td>
                  <td>{this.state.ph2}</td>
                  <td>{this.state.ph3}</td>
                  <td>{this.state.ph4}</td>
                  <td>{this.state.ph5}</td>
                  <td>{this.state.ph6}</td>
                  <td>{this.state.ph7}</td>
                  <td>{this.state.ph8}</td>
                  <td>{this.state.ph9}</td>
                  <tr>
                    <td></td>
                    <td>M</td>  {/* Data for M count */}
                    <td>{this.state.pm1.toFixed(2)}</td>
                    <td>{this.state.pm10.toFixed(2)}</td>
                    <td>{this.state.pm11.toFixed(2)}</td>
                    <td>{this.state.pm12.toFixed(2)}</td>
                    <td>{this.state.pm2.toFixed(2)}</td>
                    <td>{this.state.pm3.toFixed(2)}</td>
                    <td>{this.state.pm4.toFixed(2)}</td>
                    <td>{this.state.pm5.toFixed(2)}</td>
                    <td>{this.state.pm6.toFixed(2)}</td>
                    <td>{this.state.pm7.toFixed(2)}</td>
                    <td>{this.state.pm8.toFixed(2)}</td>
                    <td>{this.state.pm9.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>L</td>    {/* Data for L count */}
                    <td>{this.state.pl1.toFixed(2)}</td>
                    <td>{this.state.pl10.toFixed(2)}</td>
                    <td>{this.state.pl11.toFixed(2)}</td>
                    <td>{this.state.pl12.toFixed(2)}</td>
                    <td>{this.state.pl2.toFixed(2)}</td>
                    <td>{this.state.pl3.toFixed(2)}</td>
                    <td>{this.state.pl4.toFixed(2)}</td>
                    <td>{this.state.pl5.toFixed(2)}</td>
                    <td>{this.state.pl6.toFixed(2)}</td>
                    <td>{this.state.pl7.toFixed(2)}</td>
                    <td>{this.state.pl8.toFixed(2)}</td>
                    <td>{this.state.pl9.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td> Summary</td>
                    <td></td>
                    <td>{this.sum1()}</td>
                    <td>{this.sum10()}</td>
                    <td>{this.sum11()}</td>
                    <td>{this.sum12()}</td>
                    <td>{this.sum2()}</td>
                    <td>{this.sum3()}</td>
                    <td>{this.sum4()}</td>
                    <td>{this.sum5()}</td>
                    <td>{this.sum6()}</td>
                    <td>{this.sum7()}</td>
                    <td>{this.sum8()}</td>
                    <td>{this.sum9()}</td>
                  </tr>
                  {console.log(this.state.module.name)}
              </tbody>
          </table>
         
          
          <div class="column col-md-4 offset-md-8">
            <button   type="button" onClick={this.Addsummary} className="btn btn-success">Approve</button>   {/* Approve button to update module data */}
          </div>
        </div>         
     </div>  
      );  
    }  
  }  
