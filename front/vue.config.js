const path = require("path");
const webpack = require("webpack");
module.exports = {
  lintOnSave: false,
  // 개발 서버 설정
  devServer: {
    // 프록시 설정
    proxy: {
      // 프록시 요청을 보낼 api의 시작 부분
      "/api": {
        // 프록시 요청을 보낼 서버의 주소
        target: "http://localhost:8081",
        changeOrigin: true,
        secure: false,
      },
    },
    client: {
      overlay: false,
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        "@": path.join(__dirname, "src"),
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      }),
    ],
  },
};
