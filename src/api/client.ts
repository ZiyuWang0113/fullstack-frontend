import axios from "axios";

const client = axios.create({
    baseURL: 'http://localhost:8888',
    headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGVJZCI6MSwiaWF0IjoxNzUxNTE3OTY2LCJleHAiOjE3NTE2MDQzNjZ9.27UymDLU9nZkJDX-d55NqxgeW7LjO4jydPQ8qxoF8i8`,
    }
})

export default client;