const commonConfig = require('../../release-it');
const _ = require('lodash-es');

exports.default = _.merge(commonConfig, {
  git:{
    tagName: '@test/foo@${version}',
  }
});