const path = require("path");

module.exports = {
  // 路径前缀
  publicPath: "/",
  lintOnSave: true,
  productionSourceMap: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "~": path.resolve(__dirname, "src/components")
      }
    }
  },
  devServer: {
    port: 9000,
    inline: true,
    hot: true,
    proxy: {
      "/api/": {
        target: "http://127.0.0.1:3000",
        secure: false,
        changOrigin: true,
        pathRewrite: {
          "^/api/": "/"
        }
      }
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache"
    }
  }
};
