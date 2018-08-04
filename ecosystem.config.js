module.exports = {
  apps : [{
    name      : 'API',
    script    : './src/server/index.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    },
    output: '~/.pm2/logs/out.log',
    error: '~/.pm2/logs/error.err',
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    autorestart: true,
    restart_delay: 3,
    max_restarts: 5,
    instances: 2,
    exec_mode: 'cluster',
    watch: ['src', 'index.js']
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    development: {
      user: 'node',
      host: 'localhost',
      path : '/var/www/development',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env development'
    }
  }
};
