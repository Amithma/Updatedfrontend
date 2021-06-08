import React from 'react'
import Logo from '../../photos/logo.jpg';
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom';
import Courselist from './Courselist';
import Filter2 from './FilterResults';
import ViewLO from './AddasComponentLO';
import FeedbackCourse from '../Feedback/FeedbackCourse';
import { left, right } from '@popperjs/core';
import { Dropdown,DropdownButton} from 'react-bootstrap';


  function Student(props) {
//Logout event handler
  const onLogoutHandler = (e) => {
      e.preventDefault();
      localStorage.removeItem('myData');
      localStorage.removeItem('username');
     props.history.push('/')
    }
//retrieve username
    var user =localStorage.getItem('username');
    console.log(user);

  return (
    <div>
<div class= "header">
          <img src={Logo} alt ='weblogo' />
         
          <h1>
              <Link className="header" to='/'  >
                  Faculty of Engineering University of Ruhuna
              </Link>

              
              <DropdownButton id="dropdown-basic-button" title={user} style ={{float:right}}>
                <Dropdown.Item href="/Student"> Dashboard</Dropdown.Item>
                <Dropdown.Item  onClick={onLogoutHandler}>Logout</Dropdown.Item>
              </DropdownButton> 
          </h1>
                        
          <h2><strong>OBE Curriculum Plannig Tool</strong></h2>
          
        </div>
      <div >
        <h3 className="center">Student</h3>

        <BrowserRouter>{/*Navigation bar */}
        <div >  
        <nav className="navbar-expand-sm navheader" >  
          <div className="collapse navbar-collapse">  
            <ul className="navbar-nav mr-auto">   
              <li className="nav-item">  
                <Link to={'/Student/Course'} className="nav-link">Course List</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        {/* paths for the links */}
        <Switch>  
          <Route path='/Student/Course' component={Courselist} /> 
          <Route path='/results/:moduleId' component={Filter2} />
          <Route path='/ViewLO/:moduleId' component={ViewLO} /> 
          <Route path='/FeedbackCourse/:moduleId' component={FeedbackCourse} />
        </Switch>  
      </div>  
      </BrowserRouter>
      </div>
    </div>
  )
}

export default Student
