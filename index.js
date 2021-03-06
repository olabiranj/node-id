let uidd = (length = 24) => {
  if (typeof length === "number" && length < 51 && length > 7) {
    String.random = (length) => {
      let random13chars = () => {
        return Math.random().toString(16).substring(2, 15);
      };
      let loops = Math.ceil(length / 13);
      return new Array(loops)
        .fill(random13chars)
        .reduce((string, func) => {
          return string + func();
        }, "")
        .substring(0, length);
    };
    return String.random(length);
  } else {
    return new Error("Input a number between 8-50 as the length of the id");
  }
};

module.exports = uidd;
