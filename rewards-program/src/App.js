
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomersList from "./components/customers-list";
import customerRewards from './components/customerRewards';
import "bootstrap/dist/css/bootstrap.min.css";

 
function App() {
 return (
 <Router>
    <div className="container">
      <div className="header">
        <h1>Wow Rewards Program</h1>
      </div>
      <Route path="/" exact component={CustomersList} />
      <Route path='/:id' component={customerRewards} />
    </div>
  </Router>
 );
}
 
export default App;