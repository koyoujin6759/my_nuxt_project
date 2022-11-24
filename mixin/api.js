import axios from "axios";

const config = {
  baseUrl:
    "http://testsomeko-env.eba-wmbt9224.ap-northeast-2.elasticbeanstalk.com/",
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
