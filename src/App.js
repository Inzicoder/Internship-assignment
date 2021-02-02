import './App.css';
import Form from './form/form.component'
import React,{ Component } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component{
  render(){
    return (
      <div className="App">
        <Router>
           <Route exact path="/Jobs" component={Form}/>
        </Router>
    <Form />
      </div>
    );
  }

}

export default App;
