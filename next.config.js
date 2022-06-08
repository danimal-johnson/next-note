const {
  PHASE_PRODUCTION_BUILD,
  PHASE_DEVELOPMENT_SERVER 
} = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // Configure the production build here.
    console.log('Development Server');
  }

  return defaultConfig;
}