import React from 'react'
import Page from '../Page/Page'
import './Blog.css'
import {Link, Switch, Route, useRouteMatch, useParams} from 'react-router-dom'

function BlogPost() {
    let { postId } = useParams();
    return <Page pageName={postId ? postId : ""}>
            <p>Thus, we see a post called {postId}</p>
        </Page>
}

export default function Blog() {
    let match = useRouteMatch();
    return <Switch> 
            <Route path={`${match.url}/:postId`}><BlogPost /></Route>
            <Route path={match.url}> 
                <Page pageName="Blog">
                    <ul className="Blog">
                        <li><Link to={`${match.url}/post1`}>Post 1</Link></li>
                        <li><Link to={`${match.url}/post2`}>Post 2</Link></li>
                        <li><Link to={`${match.url}/post3`}>Post 3</Link></li>
                    </ul>
                </Page>
            </Route>
        </Switch>
}