import React from 'react';
import './App.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap.min';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUpForm';
import Home from './components/Home';

export default function App() {
  return (
    <div>
      < NavBar />
          <Router>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/register" component={SignUp}/>
        </Router>
    </div>
  );
}