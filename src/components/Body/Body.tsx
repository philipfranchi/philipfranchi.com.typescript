import React from 'react'
import {Switch, Link, Route} from 'react-router-dom'
import './Body.css'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Blog from '../Blog/Blog'
import Projects from '../Projects/Projects'

export default function Body() {
  return (
      <nav>
        <div className="Top"> 
          <Header />
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