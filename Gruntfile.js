'use strict';

module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    clean: {
      files: ['dist']
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['app/components/requirejs/require.js', '<%= concat.dist.dest %>'],
        dest: 'dist/components/require.js'
      },
    },    
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'dist/images'
        }]
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'app/css',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css',
        ext: '.min.css'
      } 
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/components/require.js'
      },
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    jshint: {
      app: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['app/scripts/**/*.js']
      },
      // test: {
      //   options: {
      //     jshintrc: 'test/.jshintrc'
      //   },
      //   src: ['test/**/*.js']
      // }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'app',
          dest: 'dist',
          src: [
            '*.{ico,txt}',
            'components/**/*',
            'images/{,*/}*.{gif,webp}',
            '*.html',
          ]
        }]
      }
    },  
    requirejs: {
      compile: {
        options: {
          name: 'main',
          mainConfigFile: 'app/scripts/main.js',
          out: 'dist/scripts/main.js',
          // optimize: 'none'
        }
      }
    },
    connect: {
      development: {
        options: {
          keepalive: true,
          middleware: function (connect) {
            return [
              connect.static(require('path').resolve('app')),
            ];
          }
        }
      },
      test: {
        options: {
          keepalive: true,
          middleware: function (connect) {
            return [
              connect.static(require('path').resolve('test')),
              connect.static(require('path').resolve('app'))
            ];
          }
        }
      },
      production: {
        options: {
          keepalive: true,
          port: 8000,
          middleware: function(connect) {
            return [
              connect.static(require('path').resolve('dist'))
            ];
          }
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', [
    'jshint', 
    'karma', 
    'clean', 
    'imagemin',
    'concat',
    'copy',
    'cssmin',
    'requirejs', 
    'concat', 
    'uglify'
  ]);

  grunt.registerTask('server:dev', ['connect:development']);
  grunt.registerTask('server:test', ['karma:unit']);
  grunt.registerTask('server:prod', ['default', 'connect:production']);


};
