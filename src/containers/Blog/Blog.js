import React, { Component, Fragment, lazy, Suspense } from 'react';
import { Link, Route, NavLink, Switch, Redirect } from 'react-router-dom'

//Pages
import Posts from '../Posts/Posts';
// import NewPost from '../NewPost/NewPost'
import FullPost from '../FullPost/FullPost'
import './Blog.css';

import LazyLoading from '../../hoc/LazyLoading'

//React <16.6 
const AsyncNewPost = LazyLoading(() =>
{
    return import('../NewPost/NewPost')
})

//React >16.6
const LazyNewPost = lazy(() => import('../NewPost/NewPost'))

//Usage
/*< Route path = "/posts/" render = {() =>
{
    return <Suspense fallback = {<div>Loading...</div>}>
        <LazyNewPost />
    </Suspense>
}}/>*/ 


class Blog extends Component
{
    
    state = {
        authenticated:true
    }
    


    render()
    {


        return (
            <div>
                <header className = "Blog">
                    <nav>
                        <ul>
                            <li>
                                {/* <a href='/'>Home</a> */}
                                <NavLink
                                    exact
                                    to="/posts/"
                                    activeClassName="my-active" //To overwrite css
                                    activeStyle = {{color:"orange", textDecoration:'underline'}}
                                >Home</NavLink>
                            </li>
                            <li>
                                {/* <a href='/new-post'>New Post</a> */}
                                <NavLink
                                    to={{
                                        pathname: /*this.props.match.url +*/ '/new-post', //Relative Path(appends to current path) || '/new-post' absolute path appends directly to domain
                                        hash: '#submit', //if needed hash value in the end
                                        search:'?query=true' // if needed search query in the end
                                    }}
                                >
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/*Rare cases*/}
                {/* <Route path = "/" exact render = {() => <h1>Route 1 Exact</h1>} />
                <Route path = "/"  render = {() => <h1>Route 2</h1>} /> */ } 

                {/*Production cases*/}
                <Switch>
                    {this.state.authenticated ? <Route path="/new-post" exact component={AsyncNewPost} /> : null}
                    <Route path="/posts/" component={Posts} />
                    {/* <Route render = {() => <h1>Not Found</h1>} /> */}
                    <Redirect from = "/" to="/posts"/>

                </Switch>

        
            </div>
        );
    }
}

export default Blog;