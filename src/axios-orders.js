import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-98d63.firebaseio.com/'
});

export default instance;
