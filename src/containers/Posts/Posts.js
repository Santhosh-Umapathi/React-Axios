import React, { Component } from 'react';
import './Posts.css'
import axios from '../../axios/axios'
import Post from '../../components/Post/Post'

class Posts extends Component
{

	state = {
        posts: [],
        // selectedPostId: null,
        // error:false
    }

    componentDidMount()
	{
		console.log(this.props)
        axios.get('/posts')
            .then(resp => {
                const data = resp.data.slice(0, 4)
                const newData = data.map(item =>
                {
                    return {...item, author:'Santhosh'}
                    })
                this.setState({ posts: newData})
            })
			.catch(err => console.log(err)
				//this.setState({error:true})
			)
    }

    selectedPostHandler = (id) =>
    {
        this.setState({selectedPostId: id})
	}
	
	
	render()
	{
		let headerPosts = <p style={{textAlign:'center'}}>Something went wrong</p>

        // if (!this.state.error) {
            headerPosts = this.state.posts.map(item => {
                return <Post title={item.title} key={item.id} author={item.author} clicked={() => this.selectedPostHandler(item.id)} />
            })
        // }

	return (
		<section className="Posts">
			{headerPosts}
		</section>
	);
  }
}

export default Posts