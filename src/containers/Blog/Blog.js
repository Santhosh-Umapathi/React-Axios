import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import axios from 'axios'

class Blog extends Component
{
    state = {
        posts: [],
        selectedPostId: null,
        error:false
    }

    componentDidMount()
    {
        axios.get('/posts')
            .then(resp => {
                const data = resp.data.slice(0, 4)
                const newData = data.map(item =>
                {
                    return {...item, author:'Santhosh'}
                    })
                this.setState({ posts: newData})
            })
            .catch(err => this.setState({
                error:true
            }))
    }

    selectedPostHandler = (id) =>
    {
        this.setState({selectedPostId: id})
    }
    


    render()
    {

        let headerPosts = <p style={{textAlign:'center'}}>Something went wrong</p>

        if (!this.state.error) {
            headerPosts = this.state.posts.map(item => {
                return <Post title={item.title} key={item.id} author={item.author} clicked={() => this.selectedPostHandler(item.id)} />
            })
        }

        
           


        return (
            <div>
                <section className="Posts">
                    {headerPosts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;