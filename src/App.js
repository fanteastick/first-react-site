import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js'
import Photos from './components/Photos.js'
import Error from './components/Error404.js'

function App() {
  return (
    <div className="App">
      <Switch>
         <Route path='/' component={Home} exact/>
         <Route path="/photos" component={Photos} />
         <Route component={Error} />
      </Switch>

    </div>
  );
}

export default App;
