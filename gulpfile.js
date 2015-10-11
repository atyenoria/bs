var gulp = require('gulp');
var browserSync = require("browser-sync");
var bs1 = browserSync.create("proxy1");


gulp.task('browser-sync', function() {

bs1.init({
    proxy: "http://localhost:3000",  // !!!SETTING!!!
    port: 4000,
    reloadDelay: 0,
        ui: {
        port: 9999
    }
});

});


gulp.task('bs-reload', function () {
    bs1.reload();
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch("../**/*", ['bs-reload']);
});














//accept privilege port for non root user
//sudo sysctl -w net.inet.ip.forwarding=1
// echo 'rdr pass on lo0 inet proto tcp from any to 127.0.0.1 port 80 -> 127.0.0.1 port 4000' | sudo pfctl -ef -

// check
// sudo pfctl -sn

// disable
// sudo pfctl -ef /etc/pf.conf

// enable
// sudo pfctl -e

