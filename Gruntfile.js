module.exports = function (grunt) {
    // load time-grunt and all grunt plugins found in the package.json
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
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

    grunt.registerTask('build', function () {
        var child = grunt.util.spawn({
            cmd: 'jekyll',
            args: ['build'],
            stdio: 'inherit'
        }, this.async());

        child.stdout.pipe(process.stdout);
        child.stderr.pipe(process.stderr);
    });
    grunt.registerTask('serve', function () {
        var child = grunt.util.spawn({
            cmd: 'jekyll',
            args: ['serve', '-P', process.env.PORT || 4000],
            stdio: 'inherit'
        }, this.async());

        child.stdout.pipe(process.stdout);
        child.stderr.pipe(process.stderr);
    });
};
