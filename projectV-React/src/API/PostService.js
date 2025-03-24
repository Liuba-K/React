import axios from 'axios';

export default class PostService{
    static async getAll() {       
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts22')
        return response.data
    }
}
