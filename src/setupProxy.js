const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/api",
    proxy({
      target: "http://ninjaz.me/api",
      changeOrigin: true
    })
  );
};