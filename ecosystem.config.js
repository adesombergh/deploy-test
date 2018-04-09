module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'TEST',
      script    : 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }


  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'deba',
      host : '54.38.243.11:747',
      ref  : 'origin/master',
      repo : 'https://github.com/adesombergh/deploy-test.git',
      path : '/var/www/deploy-test',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }

  }
};
