const axios = require('axios').default;
const BASE_API_URL = 'localhost:8000/api';

export default{
    getAllPosts: () => 
        axios.get(`/api/posts/${id}`),
    getOnePost: (id) =>
        axios.get(`/api/posts/${id}/edit`),
    addPost: (post) =>
        axios.post(`api/posts`, post),
    updatePost: (post, id) =>
        axios.put(`api/posts/${id}`, post),
    deletePost: (id) => 
        axios.delete(`api/posts/${id}`),
}