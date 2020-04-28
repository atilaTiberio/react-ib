
const initState = {
    posts: []
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_POST':
            let newPosts = state.posts.filter(post => post.id !== action.id)
            return {
                ...state,
                posts: newPosts
            }
        case 'GET_POSTS':
            return {
                ...state,
                posts: action.payload
            }

        default:
            console.log('Nothing to do')

    }

    return state;
}

export default rootReducer;