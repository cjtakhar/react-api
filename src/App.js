import './App.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap.min';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUpForm';

export default function App() {
  return (
    <div>
      < NavBar />
      < LoginForm />
    </div>
  );
}