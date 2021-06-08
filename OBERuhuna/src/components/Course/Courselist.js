import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Tables';  
  
export default class Courselist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      // get courses from server
      axios.get('https://oberuhunaapi.azurewebsites.net//api/modules')  
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
          <h4 align="center">Course List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  {/* Table headers for course list */}
                <th>CourseId</th>  
                <th>Name</th>  
                <th>Credits</th>
                <th>Type</th>
                <th>State</th>
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  
