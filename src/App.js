import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js'
import Projects from './components/Projects.js'
//import Photos from './components/Photos.js'
import Error from './components/Error404.js'

function App() {
  return (
    <div className="App">
      <Switch>
         <Route path='/' component={Home} exact/>
         <Route path="/projects" component={Projects} />
         <Route component={Error} />
      </Switch>

    </div>
  );
}

export default App;
