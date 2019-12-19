import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/work' component={Work} />
          <Route path='/github' component={() => { 
              window.location.href = 'https://github.com/taylorbcool'; 
              return null;
          }}/>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
