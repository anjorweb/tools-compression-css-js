module.exports = function (grunt) {
    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            "project": {
                "files": {
                    'html/js/index.min.js': [
                        "html/js/libs/zepto.min.js",
                        "html/js/libs/hammer.min.js",
                        "html/js/libs/createjs-2015.11.26.min.js",
                        "html/js/libs/TweenMax.min.js",
                        "html/js/animate/loading.js",
                        "html/js/animate/main.js",
                        "html/js/util/loading.js",
                        "html/js/util/main.js"
                    ]
                }
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            compress: {
                files: {
                    'html/css/index.min.css': [
                        "html/css/main.css"
                    ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // 默认任务
    grunt.registerTask('default', ['uglify', 'cssmin']);
};