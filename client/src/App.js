import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateUser from "./components/Pages/Register"
import Navbar from "./components/Navigation";
import SignIn from "./components/Pages/Signin"
import FlightPage from "./components/Pages/FlightPage";
import FlightDynamic from "./components/FlightDynamic";
import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faPlane, faPlaneArrival, faPlaneDeparture, faCalculator,faCalendarAlt, faUser, faIdCard, faHotel, faCarSide, faMoneyBillWave,faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import API from "./utils/API"
import FlightCard from './components/FlightCard';

library.add(faCheckSquare, faPlane, faPlaneArrival, faPlaneDeparture, faCalculator,faCalendarAlt, faUser, faIdCard, faHotel, faCarSide, faMoneyBillWave,faMapMarkedAlt)



function App() {
  API.validateToken(function(){
    console.log('Token Validation processed');
<<<<<<< HEAD
    //API.testFlights();
=======
    // API.getFlights();
>>>>>>> a3134ef312a794786f09c829c0b95a2e57781267
  })
  return (
    <Router>
      <Navbar />
        <Route path="/" exact component={CreateUser} />
        <Route path="/users/login" exact component={SignIn} />
        <Route path="/flight" exact component={FlightPage} />
    </Router>
  );
}

export default App;
