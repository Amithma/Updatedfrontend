import React, { Component } from 'react';  
import axios from 'axios';  
import ReactToExcel from 'react-html-table-to-excel';
import Logo from '../../photos/logo.jpg';
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom'  

export default class Summary extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business1: [],
        sum1 :0,sum2 :0,sum3 :0,sum4 :0,sum5 :0,sum6 :0,sum7 :0,sum8 :0,sum9 :0,sum10 :0,   //initialize H,M,L count variables
        sum11 :0,sum12 :0,sum13 :0,sum14 :0,sum15 :0,sum16 :0,sum17 :0,sum18 :0,sum19 :0,
        sum20 :0, sum21 :0, sum22 :0, sum23 :0, sum24 :0, sum25 :0, sum26 :0, sum27 :0, sum28 :0, sum29 :0, sum30 :0,
        sum31 :0,sum32 :0,sum33 :0,sum34 :0,sum35 :0,sum36 :0,
       
    };  
    }  
    componentDidMount(){  
        debugger;  
        axios.get('https://oberuhunaapi.azurewebsites.net//api/Modules?field=type2&value=TE')  //Filter and get all the Core+GE modules
          .then(response => {  
            this.setState({ business1: response.data });  
            debugger;  
    
          })  

      }  

    // set table row data and data pass to the sumcal function
    renderrows=() => {
        return this.state.business1.map(business1=> {
            return(
                <tr>
             <td >{business1.moduleId}</td>  
            <td> {business1.name}  </td> 
            <td>{business1.credits} </td>  
            <td> {business1.type}</td>  
            <td> {business1.state} </td>  
            <td>{business1.s1}</td>  
            <td>{business1.s2}</td>  
            <td>{business1.s3}</td>  
            <td>{business1.s4}</td>  
            <td>{business1.s5}</td>  
            <td>{business1.s6}</td>  
            <td>{business1.s7}</td>  
            <td>{business1.s8}</td>  
            <td>{business1.s9}</td>  
            <td>{business1.s10}</td>  
            <td>{business1.s11}</td>  
            <td>{business1.s12}</td>  
            {this.sumcal1(business1)}
            {this.sumcal2(business1)}
            {this.sumcal3(business1)}
            {this.sumcal4(business1)}
            {this.sumcal5(business1)}
            {this.sumcal6(business1)}

            {this.sumcal7(business1)}
            {this.sumcal8(business1)}
            {this.sumcal9(business1)}

            {this.sumcal10(business1)}
            {this.sumcal11(business1)}
            {this.sumcal12(business1)}

            {this.sumcal13(business1)}
            {this.sumcal14(business1)}
            {this.sumcal15(business1)}

            {this.sumcal16(business1)}
            {this.sumcal17(business1)}
            {this.sumcal18(business1)}

            {this.sumcal19(business1)}
            {this.sumcal20(business1)}
            {this.sumcal21(business1)}

            {this.sumcal22(business1)}
            {this.sumcal23(business1)}
            {this.sumcal24(business1)}

            {this.sumcal25(business1)}
            {this.sumcal26(business1)}
            {this.sumcal27(business1)}

            {this.sumcal28(business1)}
            {this.sumcal29(business1)}
            {this.sumcal30(business1)}

            {this.sumcal31(business1)}
            {this.sumcal32(business1)}
            {this.sumcal33(business1)}

            {this.sumcal34(business1)}
            {this.sumcal35(business1)}
            {this.sumcal36(business1)}
          
            
            
                  </tr>

                  )
              }
          );

    }

    
  //calculate H count of PO1 column in summary Core+GE module table    
    sumcal1(business1){
  
        if(business1.s1=='H')
         { this.state.sum1= parseFloat(this.state.sum1)+1}

      }

  //calculate M count of PO1 column in summary Core+GE module table  
      sumcal2(business1){
  
        if(business1.s1=='M')
         { this.state.sum2= parseFloat(this.state.sum2)+1}

       
      }

  //calculate L count of PO1 column in summary Core+GE module table  
      sumcal3(business1){
  
        if(business1.s1=='L')
         { this.state.sum3= parseFloat(this.state.sum3)+1}

        
      }

    /////////////////////////////////

    //calculate H count of PO2 column in summary Core+GE module table      
    sumcal4(business1){
  
        if(business1.s2=='H')
         { this.state.sum4= parseFloat(this.state.sum4)+1}

      }


    //calculate M count of PO2 column in summary Core+GE module table 
      sumcal5(business1){
  
        if(business1.s2=='M')
         { this.state.sum5= parseFloat(this.state.sum5)+1}

       
      }


    //calculate L count of PO2 column in summary Core+GE module table 
      sumcal6(business1){
  
        if(business1.s2=='L')
         { this.state.sum6= parseFloat(this.state.sum6)+1}

        
      }

     ///////////////////////////////////////////////////////////

    //calculate H count of PO3 column in summary Core+GE module table 
     sumcal7(business1){
  
        if(business1.s3=='H')
         { this.state.sum7= parseFloat(this.state.sum7)+1}

      }

    //calculate M count of PO3 column in summary Core+GE module table 
      sumcal8(business1){
  
        if(business1.s3=='M')
         { this.state.sum8= parseFloat(this.state.sum8)+1}

       
      }

    //calculate L count of PO3 column in summary Core+GE module table 
      sumcal9(business1){
  
        if(business1.s3=='L')
         { this.state.sum9= parseFloat(this.state.sum9)+1}

        
      }

      ///////////////////////////////////////////////////////

    //calculate H count of PO4 column in summary Core+GE module table 
      sumcal10(business1){
  
        if(business1.s4=='H')
         { this.state.sum10= parseFloat(this.state.sum10)+1}

      }

    //calculate M count of PO4 column in summary Core+GE module table 
      sumcal11(business1){
  
        if(business1.s4=='M')
         { this.state.sum11= parseFloat(this.state.sum11)+1}

       
      }

    //calculate L count of PO4 column in summary Core+GE module table 
      sumcal12(business1){
  
        if(business1.s4=='L')
         { this.state.sum12= parseFloat(this.state.sum12)+1}

        
      }

      ///////////////////////////////////////////////////////
    //calculate H count of PO5 column in summary Core+GE module table 
      sumcal13(business1){
  
        if(business1.s5=='H')
         { this.state.sum13= parseFloat(this.state.sum13)+1}

      }

    //calculate M count of PO5 column in summary Core+GE module table 
      sumcal14(business1){
  
        if(business1.s5=='M')
         { this.state.sum14= parseFloat(this.state.sum14)+1}

       
      }

    //calculate L count of PO5 column in summary Core+GE module table 
      sumcal15(business1){
  
        if(business1.s5=='L')
         { this.state.sum15= parseFloat(this.state.sum15)+1}

        
      }

      ///////////////////////////////////////////////////////
    //calculate H count of PO6 column in summary Core+GE module table 
      sumcal16(business1){
  
        if(business1.s6=='H')
         { this.state.sum16= parseFloat(this.state.sum16)+1}

      }

    //calculate M count of PO6 column in summary Core+GE module table 
      sumcal17(business1){
  
        if(business1.s6=='M')
         { this.state.sum17= parseFloat(this.state.sum17)+1}

       
      }

    //calculate L count of PO6 column in summary Core+GE module table 
      sumcal18(business1){
  
        if(business1.s6=='L')
         { this.state.sum18= parseFloat(this.state.sum18)+1}

        
      }

      ///////////////////////////////////////////////////////

      sumcal19(business1){
  
        if(business1.s7=='H')
         { this.state.sum19= parseFloat(this.state.sum19)+1}

      }


      sumcal20(business1){
  
        if(business1.s7=='M')
         { this.state.sum20= parseFloat(this.state.sum20)+1}

       
      }


      sumcal21(business1){
  
        if(business1.s7=='L')
         { this.state.sum21= parseFloat(this.state.sum21)+1}

        
      }

      ///////////////////////////////////////////////////////

      sumcal22(business1){
  
        if(business1.s8=='H')
         { this.state.sum22= parseFloat(this.state.sum22)+1}

      }


      sumcal23(business1){
  
        if(business1.s8=='M')
         { this.state.sum23= parseFloat(this.state.sum23)+1}

       
      }


      sumcal24(business1){
  
        if(business1.s8=='L')
         { this.state.sum24= parseFloat(this.state.sum24)+1}

        
      }

      ///////////////////////////////////////////////////////

      sumcal25(business1){
  
        if(business1.s9=='H')
         { this.state.sum25= parseFloat(this.state.sum25)+1}

      }


      sumcal26(business1){
  
        if(business1.s9=='M')
         { this.state.sum26= parseFloat(this.state.sum26)+1}

       
      }


      sumcal27(business1){
  
        if(business1.s9=='L')
         { this.state.sum27= parseFloat(this.state.sum27)+1}

        
      }

      ///////////////////////////////////////////////////////
      sumcal28(business1){
  
        if(business1.s10=='H')
         { this.state.sum28= parseFloat(this.state.sum28)+1}

      }


      sumcal29(business1){
  
        if(business1.s10=='M')
         { this.state.sum29= parseFloat(this.state.sum29)+1}

       
      }


      sumcal30(business1){
  
        if(business1.s10=='L')
         { this.state.sum30= parseFloat(this.state.sum30)+1}

        
      }

      ///////////////////////////////////////////////////////
      sumcal31(business1){
  
        if(business1.s11=='H')
         { this.state.sum31= parseFloat(this.state.sum31)+1}

      }


      sumcal32(business1){
  
        if(business1.s11=='M')
         { this.state.sum32= parseFloat(this.state.sum32)+1}

       
      }


      sumcal33(business1){
  
        if(business1.s11=='L')
         { this.state.sum33= parseFloat(this.state.sum33)+1}

        
      }

      ///////////////////////////////////////////////////////

      sumcal34(business1){
  
        if(business1.s12=='H')
         { this.state.sum34= parseFloat(this.state.sum34)+1}

      }


      sumcal35(business1){
  
        if(business1.s12=='M')
         { this.state.sum35= parseFloat(this.state.sum35)+1}

       
      }


      sumcal36(business1){
  
        if(business1.s12=='L')
         { this.state.sum36= parseFloat(this.state.sum36)+1}

        
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
                            
          <h2>Outcome Based Education System</h2>
        </div> 
        <br></br>
        <h2><strong>Gap Analysis</strong></h2> 

          <div class="container">

        <div class="row justify-content-around">
          <div class="col-6" class="b">
         <h5> <strong><u>Level of Mapping</u></strong></h5>
          <p>H - Directly Fulfilling</p>
          <p>M - Sustantially Fulfilling</p>
          <p>L - Moderately Fulfilling</p></div>

          <div class="col-6" class="b" >
            <p>0 - Not Covered at all</p>
            <p>1 - Some Exposure</p>
            <p>2 - Explicity taught</p>
            <p>3 - Explicity taught and assessed</p>
            <p>4 - Assesses only(assume learnt earlier)</p>
          </div>
          </div>

          </div>
            <div class="w3-container">
            <div class="w3-bar w3-blue">
          <h2 align="center"><strong>Core Modules + GEs</strong></h2></div></div>
           <br></br>

           <div class="button7" >
           <ReactToExcel
          className="btn btn-success"
          table="table-to-xls2"
          filename="Core Modules + GEs"
          sheet="sheet1"
          buttonText="Export Excel"
          
          /></div>

          <table className="table table-striped" style={{ marginTop: 10 }}  id="table-to-xls2">  
            <thead>  
              <tr>  
                <th>CourseId</th>  
                <th>Name</th>  
                <th>Credits</th>
                <th>Type</th>
                <th>State</th>
                <th>PO1</th>
                <th>PO2</th>
                <th>PO3</th>
                <th>PO4</th>
                <th>PO5</th>
                <th>PO6</th>
                <th>PO7</th>
                <th>PO8</th>
                <th>PO9</th>
                <th>PO10</th>
                <th>PO11</th>
                <th>PO12</th>
                

              </tr>  
            </thead>  
            <tbody>  
             { this.renderrows() }   
         <tr>
         <td></td><td></td><td></td>
             <td>H</td>
             <td></td>
             <td>{this.state.sum1}</td>
             <td>{this.state.sum4}</td>
             <td>{this.state.sum7}</td>
             <td>{this.state.sum10}</td>
             <td>{this.state.sum13}</td>
             <td>{this.state.sum16}</td>
             <td>{this.state.sum19}</td>
             <td>{this.state.sum22}</td>
             <td>{this.state.sum25}</td>
             <td>{this.state.sum28}</td>

             <td>{this.state.sum31}</td>
             <td>{this.state.sum34}</td>
             </tr>

             <tr>
         <td></td><td></td><td></td>
             <td>M</td>
             <td></td>
             <td>{this.state.sum2}</td>
             <td>{this.state.sum5}</td>
             <td>{this.state.sum8}</td>
             <td>{this.state.sum11}</td>
             <td>{this.state.sum14}</td>
             <td>{this.state.sum17}</td>
             <td>{this.state.sum20}</td>
             <td>{this.state.sum23}</td>
             <td>{this.state.sum26}</td>
             <td>{this.state.sum29}</td>

             <td>{this.state.sum32}</td>
             <td>{this.state.sum35}</td>
             </tr>

             <tr>
         <td></td><td></td><td></td>
             <td>L</td>
             <td></td>
             <td>{this.state.sum3}</td>
             <td>{this.state.sum6}</td>
             <td>{this.state.sum9}</td>
             <td>{this.state.sum12}</td>
             <td>{this.state.sum15}</td>
             <td>{this.state.sum18}</td>
             <td>{this.state.sum21}</td>
             <td>{this.state.sum24}</td>
             <td>{this.state.sum27}</td>
             <td>{this.state.sum30}</td>

             <td>{this.state.sum33}</td>
             <td>{this.state.sum36}</td>
             </tr>
           
            </tbody>  
          </table>  
        
     
        </div>  
      );  
    }  
  }  
