Java.perform(function () {
    console.log("[*] Run instrumentation");
    var MainActivity = Java.use('com.su.lab4.utils.RootUtil');
        MainActivity.isRootAvailable.implementation = function () {
            console.log('Done: bypassed');
        };
});