Java.perform(function () {
//2
    console.log("[*] Run instrumentation");
    var MainActivity = Java.use('com.su.lab4.utils.RootUtil');
        MainActivity.isRootAvailable.implementation = function () {
            console.log('Done: bypassed');
        };

//3
    var ActivityDecKey = Java.use('com.su.lab4.utils.EncryptionUtil');
    ActivityDecKey.encrypt.overload('java.lang.String', 'java.lang.String').implementation = function (str, str1){
    return str;
    }

//5
    var PasswordHack = Java.use('com.su.lab4.fragments.NativeHookFragment');
    PasswordHack.checkPassword.overload("java.lang.String").implementation = function(str){
    return true;
    }

//1
	var pinBypassFragment = Java.use("com.su.lab4.fragments.PinBypassFragment");
	var count = 0;
	while (true) {
	        var pin = count.toString();
	        if (pinBypassFragment.checkPin(pin)){
	            console.log(pin);
	            break;
	        }
	        count = count + 1;
	    }
});