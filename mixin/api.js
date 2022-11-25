import axios from "axios";

const config = {
  baseUrl: process.env.BASE_API_URL,
};

export default {
  methods: {
    async GetUserData() {
      let res = await axios.get(`${config.baseUrl}board/user_board/`);
      if (res === null) {
        console.log("result is nulll");
        return;
      }
      return res;
    },
  },
};
