import React, {Component} from 'react'
import {Link} from "react-router-dom"
import Pokeball from '../pokeball.png'
import {connect} from 'react-redux'
import {fetchPosts} from "../actions/postActions";
import axios from 'axios';

class Home extends Component{

  /*  state = {
        posts: []
    }
*/
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.props.fetchPosts(res.data.slice(0,10))
            })
    }

    render() {
        const {posts} = this.props;
        const postList= posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A pokeball"/>
                        <div className="card-content">
                            <Link to={'/'+post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"> No posts yet</div>
        )
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

//This will tell to redux what things of the store we want to grab
const mapStateToProps = (state)=> {

    return {
        posts: state.posts
    }

}

const mapDispatchToProps = (dispatch)=> {
    return {
        fetchPosts: (posts) => {dispatch (fetchPosts(posts))}
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
