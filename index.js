module.exports = {

  sum: function sum(a, b) {
    return a + b;
  },

  //Validate if there is a path
  mdLinks: function mdLinks(path) {
    if (path) {
      return path;
    }else {
      return "error: path is needed";
    }
  },


};
