import React from "react";
<<<<<<< HEAD
import './App.css';
import { HashRouter, Route } from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';
import Navigation from "./components/Navigation";
import Detail from './routes/Detail';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/about" component={About} />
      <Route path="/" exact={true} component={Home} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
=======

function App() {
  return (
    <div className="App">
     
        
    </div>
  );
}

export default App;
>>>>>>> 8f5c4e24d201c110309e0760b4e6d251ff61f2a2
