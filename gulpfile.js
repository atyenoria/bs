var gulp = require('gulp');
var browserSync = require("browser-sync");
// var static = require('node-static');
var bs1 = browserSync.create("proxy1");
// var bs2 = browserSync.create("proxy2");



gulp.task('browser-sync', function() {

bs1.init({
    proxy: "http://localhost:3000",
    port: 4000,   // MAIN SERVER ACCESS!!
    reloadDelay: 0,
        ui: {
        port: 9999
    }
});

// bs2.init({
//     proxy: "http://localhost:3000", // MAIN SERVE PORT!!
//     port: 4000,  // MAIN SERVER ACCESS!!
//     reloadDelay: 0,
//             ui: {
//         port: 9998
//     }
// });

});


gulp.task('bs-reload', function () {
    bs1.reload();
    // bs2.reload();
});




// gulp.task('node-static', function () {
// var file = new static.Server('../public');  // STATIC FILES!!

// require('http').createServer(function (request, response) {
//     request.addListener('end', function () {
//     file.serve(request, response);
//     }).resume();
// }).listen(7070);

// });





gulp.task('default', ['browser-sync','node-static'], function () {
    gulp.watch("../**/*", ['bs-reload']);
});





