module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv',
        {
          enName: 'APP_ENV',
          moduleName:'@env',
          path:'.env'
        }
      ]
    ]
     

  };
};
