
import React, { useEffect, useState ,Component} from 'react';
import { Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home'
import Lecturer from './components/Lecturer/lecturer'
import Student from './components/Students/Student'

import Admin from './components/Admin/Admin'
import ModuleList from './components/Feedback/ModuleList'
import FeedbackCourse from './components/Feedback/FeedbackCourse'
import FeedbackChart from './components/Feedback/FeedbackChart'
import Login2 from './components/Login/Login2'
import LO from './components/LO/AddLO'
import LOlist from './components/LO/LOlist'
import AddPO from './components/PO/AddPO';
import POlist from './components/PO/POlsit'
import AsComponentList from './components/AssignmentComponents/AsComponentList';
import AddAsComponent from './components/AssignmentComponents/AddAsComponent';

import FormA from './components/AssignmentComponents/FormA';
import Summary from './components/Lecturer/Summary';
import Summary2 from './components/Lecturer/Summary2';
import Summary3 from './components/Lecturer/Summary3';


class App extends Component {
  render() {
  return (
      <BrowserRouter>
      <div>
        <div className="App">
          <Route exact path='/' component={Home}/>
          <Route path='/lecturer' component={Lecturer} />
          <Route path='/student' component={Student} />
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login2} />
          <Route path='/EnrolledModules' component ={ModuleList} />
          <Route path='/feedback' component ={FeedbackCourse} />
          <Route path='/feedbackChart' component ={FeedbackChart} />
          <Route path ='/AddLO/:value' component = {LO}/>
          <Route path = '/LOlist/:value' component ={LOlist} />
          <Route path = '/AddPO' component={AddPO}/>
          <Route path='/POlist' component={POlist}/>
          <Route path='/Ascomponent/:value' component={AsComponentList}/>
          <Route path= '/AddAsComponent/:Moduleid' component={AddAsComponent} />
          <Route path='/formA/:ModuleId' component={FormA}/>
          <Route path='/Summary' component={Summary}/>
          <Route path='/Summary2' component={Summary2}/>
          <Route path='/Summary3' component={Summary3}/>
          

        </div>        
      </div>
      </BrowserRouter>
    );
}
}

export default App;
