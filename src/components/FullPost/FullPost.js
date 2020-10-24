import Axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';



class FullPost extends Component
{

    state = {
        loadedPost: null
    }

    componentDidUpdate()
    {
        if (this.props.id)
        {
            if(!this.state.loadedPost || (this.state.loadedPost.id !== this.props.id)) 
            Axios.get('/posts/' + this.props.id)
                .then(resp => this.setState({ loadedPost: resp.data }))
        }
    }

    deletePostHandler = () =>
    {
        Axios.delete('/posts/' + this.props.id)
        .then(resp => console.log(resp))
        }



    render()
    {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        
        if (this.props.id)
        {
            <p style={{ textAlign: 'center' }}>Loading ....</p>
        }
        

        if(this.state.loadedPost)
        {post = (
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick = {this.deletePostHandler}>Delete</button>
                </div>
            </div>

        );}



        return post;
    }
}
export default FullPost;