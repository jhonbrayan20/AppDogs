module.exports = {
    webpack: {
      configure: {
        // Aquí puedes personalizar la configuración de Webpack
        // Por ejemplo, agregar loaders, plugins, etc.
      },
      resolve: {
        fallback: {
          "zlib": require.resolve("browserify-zlib")
        }
      }
    },
  };
  