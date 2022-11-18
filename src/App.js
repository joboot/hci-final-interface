import './index.css';
import Sidebar from './components/sidebar';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <SignIn/>
      </div>
    </Router>
  );
}

export default App;

