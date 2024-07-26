//this is the axios base/config file

import axios from 'axios';

// create a new instance of Axios with a custom config. This allows us to reuse the provided configuration for all the calls made by that particular instance.
export default axios.create({
    baseURL: "http://localhost:8000/",
});