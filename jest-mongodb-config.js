module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '3.7.2',
      skipMD5: true,
    },
    autoStart: false,
    instance: {
      dbName: 'jest'
    },
  },
};