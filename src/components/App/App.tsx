import React from 'react';
import './App.css';
import {Switch, Link, Route} from 'react-router-dom'
import Home from '../Home/Home'
import Blog from '../Blog/Blog'
import Projects from '../Projects/Projects'

function App() {
  return (
      <nav className="App">
        <div className="Top"> 
          <h1 className="Header">Philip Franchi-Pereira</h1>
          <ol className="Nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><a  href="/Resume.pdf">Resume</a></li>
          </ol>
        </div>
      <Switch>          
        <Route path="/blog"><Blog /></Route>
        <Route path="/projects"><Projects /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </nav>
  );
}

export default App;
