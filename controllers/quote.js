var _ = require('lodash');
var async = require('async');



/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('quote', {
    title: 'Quote Center'
  });
};

