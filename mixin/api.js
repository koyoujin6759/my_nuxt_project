import axios from 'axios';

const config = {
    baseUrl: "https://www.modoodaechi.com/"
}

function getDataApi() {
    return axios.get(`${config.baseUrl}auth/user_info/self_read/`)
}

export {
    getDataApi
}