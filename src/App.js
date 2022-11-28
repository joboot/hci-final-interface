import './index.css';
import Sidebar from './components/sidebar';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router } from 'react-router-dom';
import React from "react";
import Header from "./components/TopBarComp";


function App() {
  return (
    <Router>
      <div className="App">  
        <Header/>
        <Sidebar/>
        <SignIn/>
        
      </div>
    </Router>
  );
}

export default App;

