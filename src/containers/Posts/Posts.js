import React, { Component } from 'react';
import './Posts.css'
import axios from '../../axios/axios'
import Post from '../../components/Post/Post'
import { Link, Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

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
        this.setState({ selectedPostId: id })
        this.props.history.push('/posts/' + id)
        // this.props.history.push({pathname:'/' + id})

	}
	
	
	render()
	{
		let headerPosts = <p style={{textAlign:'center'}}>Something went wrong</p>

        // if (!this.state.error) {
        headerPosts = this.state.posts.map(item =>
        {
            return (
                // <Link to={"/" + item.id}
                //     key={item.id}
                //     className = "Link"
                // >
                <Post
                    title={item.title}
                    author={item.author}
                    clicked={() => this.selectedPostHandler(item.id)}
                    key={item.id}
                />
                // </Link>
                
            )
        })
        // }

        console.log(this.props.match.url)

        return (
        <div>
            <section className="Posts">
                {headerPosts}
            </section>
            <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
        </div>
            

	);
  }
}

export default Posts