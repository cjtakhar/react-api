import './App.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap.min';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from './components/LoginForm';

export default function App() {
  return (
    <div>
      <LoginForm/>
    </div>
  );
}