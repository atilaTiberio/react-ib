import React, {Component} from "react"
import {connect} from 'react-redux'
import {deletePost} from "../actions/postActions";

class Post extends Component {

   /* state = {
        post:null
    }
    componentDidMount() {
        let id = this.props.match.params.post_id
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })

    }*/

   handleClick = () => {
       this.props.deletePost(this.props.post.id);
       this.props.history.push('/')

   }

    render(){
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center"> {this.props.post.title} </h4>
                <p> {this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center"> Loading post...</div>

            )

        return (
            <div className="container">
                <h4>{post}</h4>
            </div>
        )
    }

}

const mapStateToProps = (state,ownProps) => {
    let id = parseInt(ownProps.match.params.post_id) //Route parameters
    return {
        post: state.posts.find(post => post.id===id)
    }

}

const mapDispatchToProps = (dispatch)=> {
    return {
        /*deletePost: (id) => {dispatch({type: 'DELETE_POST',id:id})}*/
            deletePost: (id) => {dispatch (deletePost(id))}
    }

}

export default  connect(mapStateToProps,mapDispatchToProps)(Post)