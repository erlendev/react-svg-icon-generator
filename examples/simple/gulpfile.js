const gulp = require('gulp');
const path = require('path');
const configureGenerator = require('./../../lib/index').configureGenerator;

gulp.task('svg-icon', configureGenerator({
    comment: 'Generated by gulp svg-icon, if you add new icon run gulp svg-icon', // optional
    // svgDir: path.join(__dirname, 'icons'), // absolute path
    svgDir: './icons', // relative path
    // template: path.join('template', 'icon.nunjucks'), // optional
    reactPureRender: false, // optional
    destination: path.join(__dirname, 'components', 'Icon.js') // can be absolute or relative
}));

gulp.task('default', ['svg-icon']);