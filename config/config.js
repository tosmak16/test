import _ from 'underscore';
import all from '../config/env/all';
// Load app configuration

module.exports = _.extend(
  all,
  require(`${__dirname}/../config/env/${process.env.NODE_ENV}.json`) || {}
);
