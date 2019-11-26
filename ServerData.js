import axios from 'axios';

const mock="http://private-2a49c-tomax.apiary-mock.com";

export default axios.create({
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
    baseURL:mock
});