import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID utq4zWF26u7UNgUMWq_obFHCQIVyigk7TY9adWw8UwI'
  }
})
