module.exports = {

    api: {
      default_port: 3001,
      root: '/oceana',
    },

    auth: {
      jwt: {
        accessTokenSecret: '0d7c5c5f-768c-4d98-8900-13aadaa21937',
        refreshTokenSecret: '1a7v8c0l-391k-1f82-4492-tha3taa11334',
        accessTokenLife: 3600,
        refreshTokenLife: 2592000,
      },
      resetPassword: {
        secret: '56gXxY{+D6/4m#kZ394j2=bT2eHqTAu>r8zAT>yEn:;TM#9*Vg',
        ttl: 86400 * 1000, // 1 day
        algorithm: 'aes256',
        inputEncoding: 'utf8',
        outputEncoding: 'hex',
      },
    },
    
    name:"Hotel Salinas App Backend 2020",
    NODE_PORT:3000,
    logger: {
      console: {
        level: "debug"
        },
        file: {
          logDir: "logs",
          logFile: "logfile.log",
          level: "debug",
          maxsize: 10485760,
          maxFiles: 5
        }
      }
}
