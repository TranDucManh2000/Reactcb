
import axios from 'axios';

const instance = axios.create({

    baseURL: 'https://6188f8b6d0821900178d7680.mockapi.io/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;