import React from 'react'
import ServiceCards from '../containers/ServiceCards';
import ServiceCardFilters from '../containers/ServiceCardFilters';
import ServiceCardSearch from '../containers/ServiceCardSearch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Details from '../containers/Details';


const App = () => (
  <Router>
  <div>
    <ServiceCardSearch/>
    <ServiceCardFilters/>
    <Route path="/home" component={ServiceCards} />
    <Route path="/about/:id" component={Details} />
  </div>
  </Router>

)

export default App
