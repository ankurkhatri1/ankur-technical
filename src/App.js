
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Services from './component/Services';
import Navbar from './Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/service">
            <Services/>
          </Route>
          
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
