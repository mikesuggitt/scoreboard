module.exports = function(grunt) {
    'use strict';
    grunt.config('watch', {
        css: {
            files: ['public/scss/**/*.scss'],
            tasks: ['sass']
        }
    });

    grunt.config('sass', {
        dev: {
            options: {
                style: 'expanded'
            },
            files: {
                'public/style.css': 'public/scss/style.scss'
            }
        },
        dist: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            files: {
                'public/style.css': 'public/scss/style.scss'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-sass');

};