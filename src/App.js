import './App.css';

import {Route, BrowserRouter as Router, Route, Link} from 'react-router-dom';

import { ServicesPage } from "./pages/ServicesPage";
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <nav>
        <Link to="./pages/HomePage">Home</Link>
        <Link to="./pages/ServicesPage">Services</Link>
      </nav>
    </Router>
  );
}

export default App;
