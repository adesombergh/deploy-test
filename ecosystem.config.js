module.exports = {
  apps : [{
    name      : 'TEST',
    script    : 'app.js',
  }],
  deploy : {
    production : {
      user : 'deba',
      host : '54.38.243.11',
      ref  : 'origin/master',
      repo : 'https://github.com/adesombergh/deploy-test.git',
      path : '/var/www/deploy-test',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js'
    }
  }
};
