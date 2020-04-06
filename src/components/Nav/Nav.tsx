import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav(){
    return <nav>
        <div className="Top"> 
        <h1 className="Header">Philip Franchi-Pereira</h1>
        <ol className="Nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><a  href="/Resume.pdf">Resume</a></li>
        </ol>
        </div>
    </nav>
}
    