module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["react-native"],
    plugins: [],
    sourceMaps: true,
  };
};
//"babel-preset-expo",

