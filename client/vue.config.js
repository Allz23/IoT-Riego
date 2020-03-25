module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "IoT Riego";
      args[0].meta = {
        viewport: "width=device-width, initial-scale=1.0"
      };

      return args;
    });
  }
};
