module.exports = {
  appenders: {
    console: { type: 'console' },
    out: {
      type: 'file',
      filename: '/u/data/logs/gateway-server/out.log',
      maxLogSize: 10 * 1024 * 1024,
      layout: {
        type: 'basic'
      },
      backups: 5,
    },
    error: {
      type: 'file',
      filename: '/u/data/logs/gateway-server/error.log',
      maxLogSize: 10 * 1024 * 1024,
      layout: {
        type: 'basic'
      },
      backups: 5,
    },
    monitor: {
      type: 'file',
      filename: '/u/data/logs/gateway-server/monitor.log',
      // 10M 单文件大小，单位字节
      maxLogSize: 10 * 1024 * 1024,
      backups: 5
    },
    cron: {
      type: 'dateFile',
      filename: '/u/data/logs/gateway-server/cron.log',
      pattern: '-yyyy-MM-dd.log',
      backups: 10
    },
  },
  categories: {
    default: { appenders: ['console', 'out'], level: 'info' },
    error: { appenders: ['error'], level: 'error' },
    monitor: { appenders: ['monitor'], level: 'info' },
    cron: { appenders: ['cron'], level: 'info' },
  }
};
