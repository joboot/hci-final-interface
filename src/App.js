import './index.css';
import Sidebar from './components/sidebar';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router } from 'react-router-dom';
import React from "react";
import Header from "./components/TopBarComp";
import PageOne from './pages/PageOne';


function App() {
  return (
    <Router>
      <div className="App">  
        <Header/>
        <Sidebar/>
        {/* <SignIn/> */}
        <PageOne/>
        
      </div>
    </Router>
  );
}

export default App;

