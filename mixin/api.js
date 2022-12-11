import axios from "axios";

const config = {
  baseUrl : process.env.BASE_URL,
  baseApiUrl: process.env.BASE_API_URL,
  
};

export default {
  methods: {
    // async GetBoardData() {
    //   let boardData = await axios.get(`${config.baseApiUrl}board/user_board/`);
    //   if (boardData === null) {
    //     console.log("result is null");
    //     return;
    //   }
    //   return boardData;
    // },

    // async GetUserData() {
    //   let userData = await axios.get('https://jsonplaceholder.typicode.com/users');
    //   if (userData === null) {
    //     console.log("result is null");
    //     return;
    //   }
    //   return userData;
    // },

    // async PostData(saveData) {
    //   return await axios.post('https://jsonplaceholder.typicode.com/posts',saveData);
    // },
    
  },
};

export const sessionVerify = async (token) => {
  return await axios.get(`${config.baseApiUrl}auth/session-verify/${token}`)
}

export const login = async (params) => {
  console.log('process.env.BASE_API_URL: ', process.env.BASE_API_URL);
  console.log('config.baseApiUrl: ', config.baseApiUrl);
  console.log('`${config.baseApiUrl}auth/login`: ', `${config.baseApiUrl}auth/login`);
  return await axios.post(`${config.baseApiUrl}auth/login`, params)
}