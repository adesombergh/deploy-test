module.exports = {
  apps : [{
    name      : 'TEST',
    script    : 'app.js',
  }],
  deploy : {
    production : {
      user : 'deba',
      host : [
        {
          host: '54.38.243.11',
          port: '747'
        }
      ],
      ref  : 'origin/master',
      repo : 'https://github.com/adesombergh/deploy-test.git',
      path : '/var/www/deploy-test',
      'post-deploy' : 'pm2 reload ecosystem.config.js'
    }
  }
};
