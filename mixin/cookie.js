export default {
  methods: {
    setCookie(key, value, expires = "7d") {
      if (typeof value === "object") {
        const jsonString = JSON.stringify(value);
        this.$cookies.set(key, jsonString, expires);
      } else {
        const jsonString = JSON.stringify({ value: value });
        this.$cookies.set(key, jsonString, expires);
      }
    },
    getCookie(key) {
      if (this.$cookies.isKey(key)) {
        const jsonString = this.$cookies.get(key);
        return jsonString.value;
      } else {
        return null;
      }
    },
    removeCookie(key) {
      this.$cookies.remove(key);
    },
    removeAllCookie() {
      this.$cookies.keys().forEach((cookie) => this.$cookies.remove(cookie));
    },
  },
};
