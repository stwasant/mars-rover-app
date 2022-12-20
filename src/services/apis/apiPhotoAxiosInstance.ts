import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api',
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})