import axios from "axios";

const config = {
  baseUrl: process.env.BASE_URL,
  baseApiUrl: process.env.BASE_API_URL,
};

export default {
  methods: {
    async GetBoardData() {
      let boardData = await axios.get(`${config.baseApiUrl}board/user_board/`);
      if (boardData === null) {
        console.log("result is null");
        return;
      }
      return boardData;
    },
  },
};
