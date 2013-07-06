require.config({
  paths: {
    'components': '../components',
    'jquery': '../components/jquery/jquery',
    'underscore': '../components/underscore/underscore'
  },
  shim: {
    'underscore' : {
      exports: '_'
    }
  },
});


require(['app'], function(){ });






