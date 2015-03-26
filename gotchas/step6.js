var Rx = require("rx");
var request = require("request");

var observable = Rx.Observable.fromNodeCallback(request)("http://www.google.com")
.map(function(args){
    console.log("can you see me?");
    return args[1];
})
.map(function(data){
    console.log("how about this?");
    return data;
})
.share()

observable.subscribe(function(body){
    console.log(body.length);
});


observable.subscribe(function(body){
    console.log(body.length);
});


