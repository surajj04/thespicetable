import React from 'react'
import Navbar from './Components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import DataMenu from './Data/TodayMenu.json'
import OrderOnline from './Pages/OrderOnline';
import Registrations from './Pages/Registrations';
import Login from './Pages/Form/Login';


export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/menu">
            <Menu DataMenu={DataMenu}/>
          </Route>
          <Route path="/order">
            <OrderOnline DataMenu={DataMenu}/>
          </Route>
          <Route path="/registrations">
            <Registrations DataMenu={DataMenu}/>
          </Route>
          <Route path="/login">
            <Login DataMenu={DataMenu}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
