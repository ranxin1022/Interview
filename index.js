window.onload = function () {

/*
    var btn = document.getElementById('btn');


    function outputCurrentTarget(e){
        console.log("currentTarget:" + e.currentTarget + ", target: " + e.target);
    }

    btn.addEventListener('click', function (e) {
        outputCurrentTarget(e);
        //e.stopPropagation();
    }, true);
    btn.addEventListener('click', function (e) {
        outputCurrentTarget(e);
    }, false);
    window.addEventListener('click', function (e) {
        outputCurrentTarget(e);
        //e.stopPropagation();
    }, true);
    window.addEventListener('click', function (e) {
        outputCurrentTarget(e);
    }, false);
    document.addEventListener('click', function (e) {
        outputCurrentTarget(e);
    }, true);
    document.addEventListener('click', function (e) {
        outputCurrentTarget(e);
    }, false);

    var body = document.getElementsByTagName('body')[0];
    body.addEventListener('click', function (e) {
        outputCurrentTarget(e);
    }, true);
    body.addEventListener('click', function (e) {
        outputCurrentTarget(e);
    }, false);

    var html = document.getElementsByTagName('html')[0];
    html.addEventListener('click', function (e) {
        outputCurrentTarget(e);
    }, true);
    html.addEventListener('click', function (e) {
        outputCurrentTarget(e);
    }, false);
*/
    var eventPhase = {
        p_1 : "捕获",
        p_2 : "目标",
        p_3 : "冒泡"
    };

    function triggerClick(e, isCapture) {
        e = e||window.event;
        var target = e.target||e.srcElement;
        var currentTarget = e.currentTarget || this;


        //console.log(e.eventPhase);
        if(isCapture && currentTarget.className.toLocaleLowerCase() == "box1".toLocaleLowerCase()){
            //console.log("is capture: " + isCapture);
            //console.log("eventPhase: " + e.eventPhase);
            //e.stopPropagation();
            e.cancelBubble = true;
        }

        console.log(eventPhase["p_" + e.eventPhase]+ "|currentTarget:" + currentTarget.className);

    }

    var divs = document.getElementsByTagName('div');
    for (var i = 0;i<divs.length;i++){

        divs[i].addEventListener('click', function (e) {
            triggerClick(e, true);
        }, true);
        divs[i].addEventListener('click', function (e) {
            triggerClick(e, false);
        }, false);

    }

    var oBtn = document.getElementById("add");
    var oUl = document.getElementById("ul1");
    var aLi = oUl.getElementsByTagName('li');
    var num = 4;

    //事件委托，添加的子元素也有事件
    oUl.onmouseover = function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == 'li'){
            target.style.background = "red";
        }

    };
    oUl.onmouseout = function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == 'li'){
            target.style.background = "#fff";
        }

    };

    //添加新节点
    oBtn.onclick = function(){
        num++;
        var oLi = document.createElement('li');
        oLi.innerHTML = 111*num;
        oUl.appendChild(oLi);
    };

    var oUl = document.getElementById('test');
    oUl.addEventListener('click',function(ev){
        var target = ev.target;
        while (target !== oUl){
            if(target.nodeName.toLocaleLowerCase() == 'li'){
                console.log('li click');
                target.style.background = 'red';
                //break;
            }
            console.log("target nodeName: " + target.nodeName);
            target = target.parentNode;
        }

    });

/*
    function A(){
        this.test1 = "test1";
        this.test2 = "test2";
        this.add = function () {
            return this.test1 + this.test2;
        }
    }

    function B(){
        console.log(this);
        A.call(this);
        console.log(this);
    }

    var a = new B();
*/

console.log([2,3,5]);
var each = function (array, fn) {
    for(var index = 0; index < array.length;index++){
        //fn.call(array, index, array[index]);
        fn.call(array[index]);
    }
}

each([2,3,5], function () {
    console.log(this);
})

/*
function change(){
        //alert('change funciton');
    }
    var aDiv=document.getElementsByTagName("div");
    for(var i=0;i<aDiv.length;i++){
        aDiv[i].addEventListener("mouseover",change,false);
    }
    btn.onclick = function(){
        alert('button click');
    }

    window.onclick = function () {
        alert('window click');
    }

    */


var odiv = document.getElementById('oDiv');
delegateEvent(odiv, "a", "click", function () {
    alert('click a');
})

    function delegateEvent(container, selector, type, fn) {
        if(container.addEventListener){
            container.addEventListener(type, eventfn);
        }else{
            container.attachEvent('on'+type,eventfn);
        }

        function eventfn(e) {
            console.log(arguments[1]);
            var e = e || window.event;
            var target = e.target || e.srcElement;
            if(matchSelector(target, selector)){
                if(fn){
                    fn.call(target);
                }
            }
        }
    }

    function matchSelector(element, selector){
        return element.tagName.toLowerCase() == selector.toLowerCase();
    }


    document.addEventListener('ondataavailable', function (event) {
        //alert(event.eventType);
    }, false);
    var obj = document.getElementById("obj");
//obj元素上绑定click事件
    obj.addEventListener('click', function (event) {
        //alert(event.eventType);
    }, false);
//调用document对象的 createEvent 方法得到一个event的对象实例。
    var event = document.createEvent('HTMLEvents');
// initEvent接受3个参数：
// 事件类型，是否冒泡，是否阻止浏览器的默认行为
    event.initEvent("ondataavailable", true, true);
    event.eventType = 'message';
//触发document上绑定的自定义事件ondataavailable
    document.dispatchEvent(event);
    var event1 = document.createEvent('HTMLEvents');
    event1.initEvent("click", true, true);
    event1.eventType = 'message';
//触发obj元素上绑定click事件
    document.getElementById("test").onclick = function () {
        obj.dispatchEvent(event1);
    };


    document.getElementById("menu").addEventListener("click", function(e) {
        // 检查事件源e.targe是否为A
        var target = e.target || e.srcElement;
        while(target != null){
            console.log(target.nodeName);
            if(target.nodeName.toUpperCase() == "A") {
                console.log("钗神翻我牌，今晚就跟你走....");
                break;
            }
            target = target.parentNode;
        }

    }, true);



};