import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Home/Home'
import Blog from '../Blog/Blog'
import Projects from '../Projects/Projects'

export default function Body() {
    return <Switch>          
        <Route path="/blog"><Blog /></Route>
        <Route path="/projects"><Projects /></Route>
        <Route path="/"><Home /></Route>
    </Switch>
}