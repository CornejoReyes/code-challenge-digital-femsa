const reactNativePathRegex = /node_modules(\\{1,2}|\/)(@react-native|react-native)/;

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  overrides: [
    {
      exclude: [reactNativePathRegex],
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  ],
};
