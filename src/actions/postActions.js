
export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id: id
    }
}

export const fetchPosts = (posts) => {
    return {
        type: 'GET_POSTS',
        payload: posts
    }
}