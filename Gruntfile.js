module.exports = function (grunt) {
    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options:{
                mangle:true
            },
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
        },
        //压缩HTML
        htmlmin: {
            dist:{
                options: {
                    removeComments: true,
                    removeCommentsFromCDATA: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true
                },
                files: {
                    'html/index2.html': ['html/index.html']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // 默认任务
    grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin']);
};