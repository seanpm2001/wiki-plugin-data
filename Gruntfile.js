module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-git-authors');

  grunt.initConfig({

    authors: {
      prior: [
        "Ward Cunningham <ward@c2.com>",
        "Stephen Judkins <stephen.judkins@gmail.com>",
        "Nick Niemeir <nick.niemeir@gmail.com>"
      ]
    },

    coffee: {
      client: {
        expand: true,
        options: {
          transpile: { presets: ['@babel/preset-env'] },
          sourceMap: true
        },
        src: ['client/*.coffee'],
        ext: '.js'
      }
    },

    watch: {
      all: {
        files: ['client/*.coffee'],
        tasks: ['coffee']
      }
    }
  });

  grunt.registerTask('build', ['coffee']);
  grunt.registerTask('default', ['build']);

};
