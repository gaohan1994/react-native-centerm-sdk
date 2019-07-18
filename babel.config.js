module.exports = {
  presets: [
    // "react-native", 
    "module:metro-react-native-babel-preset"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
  ]
}