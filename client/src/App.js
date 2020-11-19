
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomersList from "./components/customers-list";
import customerRewards from './components/customerRewards';

 
function App() {
 return (
 <Router>
    <div>
      <div className="App-header">
        <div className="container">
          <h1>Wow! Rewards Program</h1>
        </div>
      </div>
      <div className="container">
        <Route path="/" exact component={CustomersList} />
        <Route path='/:id' component={customerRewards} />
      </div>
    </div>
  </Router>
 );
}
 
export default App;