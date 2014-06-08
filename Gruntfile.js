module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                'Gruntfile.js',
                'app/*.js',
                'app/controllers/*.js',
                'app/models/*.js',
                'test/*.js'
            ]
        },
        'http-server': {
            'dev': {
                root: 'app/',
                port: 8080,
                host: "127.0.0.1",
                cache: 'foobarbaz',
                showDir : true,
                autoIndex: true,
                defaultExt: "html",
                runInBackground: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask('default', [
        'jshint'
    ]);

    grunt.registerTask('run', [
        'jshint',
        'http-server:dev'
    ]);
};