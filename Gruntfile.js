module.exports = function (grunt) {
    // load time-grunt and all grunt plugins found in the package.json
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        },
        watch: {
            files: ['_layouts/*.html',
                    '_posts/*.markdown',
                    'css/*.css',
                    'css/libs/*.css',
                    '_config.yml',
                    'index.html',
                    '404.html'],
            tasks: ['shell:jekyllBuild', 'shell:jekyllServe'],
            options: {
                spawn: false,
                interrupt: true,
                atBegin: true,
                livereload: true
            }
        }
    });

    // register custom grunt tasks
    grunt.registerTask('deploy', ['shell:jekyllBuild']);
    grunt.registerTask('serve', ['shell:jekyllServe'])
};
