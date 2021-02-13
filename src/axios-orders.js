import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://portal-tech-react-default-rtdb.firebaseio.com/'
});

export default instance;