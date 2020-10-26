import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'

//Pages
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost'
import './Blog.css';

class Blog extends Component
{
    
    


    render()
    {


        return (
            <div>
                <header className = "Blog">
                    <nav>
                        <ul>
                            <li>
                                {/* <a href='/'>Home</a> */}
                                <Link to = "/">Home</Link>
                            </li>
                            <li>
                                {/* <a href='/new-post'>New Post</a> */}
                                <Link
                                    to={{
                                        pathname: '/new-post',
                                        hash: '#submit', //if needed hash value in the end
                                        search:'?query=true' // if needed search query in the end
                                    }}
                                >
                                    New Post
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/*Rare cases*/}
                {/* <Route path = "/" exact render = {() => <h1>Route 1 Exact</h1>} />
                <Route path = "/"  render = {() => <h1>Route 2</h1>} /> */ } 

                {/*Production cases*/}
                <Route path="/" exact component={Posts} />
                <Route path = "/new-post" exact component = {NewPost} />

        
            </div>
        );
    }
}

export default Blog;