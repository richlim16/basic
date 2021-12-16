const axios = require('axios').default;
const BASE_API_URL = 'localhost:8000/api';

export default {
    //posts requests
    getAllPosts: (id) =>
        axios.get(`/api/posts/${id}`),
    getOnePost: (id) =>
        axios.get(`/api/posts/${id}/edit`),
    addPost: (post) =>
        axios.post(`api/posts`, post),
    updatePost: (post, id) =>
        axios.put(`api/posts/${id}`, post),
    deletePost: (id) =>
        axios.delete(`api/posts/${id}`),

    //friends requests
    getAllFriends: (id) =>
        axios.get(`/api/friends/${id}`),

    //getting profile
    getProfile: (id) =>
        axios.get(`/api/profile/${id}`),
    getProfilePosts: (id) =>
        axios.get(`api/profile/posts/${id}`),
}