define(['jquery', 'underscore'], function(jQuery, _) {

  'use strict';

  jQuery('body').after('<p>jQuery and underscore('+_.uniqueId()+') loaded</p>');

  return 1;
});