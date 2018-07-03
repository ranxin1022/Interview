var name = "The Window";

var object = {
    name : "My Object",

    getNameFunc : function(){
        return function(){
            return this.name;
        };

    }

};

//alert(object.getNameFunc()());

var name = "The window";
function a(){
    var n = 0;
    var name = "a";
    function inc() {
        n++;
        console.log(n);
        alert(this.name);
    }
    inc();
    inc();
}
//a();

$(document).ready(function () {
    alert('heheh,ready');
});
