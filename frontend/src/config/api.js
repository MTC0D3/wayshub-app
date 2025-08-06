import axios from 'axios';

const API = axios.create({
    baseURL: process.env.REACT_APP_API || "http://localhost:5000/api/v1",
});

const setAuthToken = (token) => {
    if(token){
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete API.defaults.headers.common['Authorization'];
    }
}

export {
    API,
    setAuthToken
}
