var provinces = new Array();
provinces["shanxi"] = ["西安","咸阳","宝鸡","延安","汉中"];
provinces["taiwan"] = ["台北","台中","台南"];
provinces["zhejiang"] = ["杭州","宁波","绍兴","温州"];


function provinceChange(){
    console.log('change is triggered');
    var city = document.getElementById('city');

    //city.options.length = 0;
    for(var i in provinces[province.value]){
        city.options.add(new Option(provinces[province.value][i],provinces[province.value][i]));
    }
}

window.onload = function () {

    /*
    function x() {

    }
    */

    console.log(x);


    var x = 1;
    x = function(){
        alert(2);
    };
   // var x = 1;

    var province = document.getElementById('province');

    for(var index in provinces){
        province.options.add(new Option(index,index));
    }

    var event = document.createEvent('HTMLEvents');
    event.initEvent("change", true, true);
    event.eventType = 'message';
    //province.dispatchEvent(event);
    //
    //province.onchange = function () {
    /*

    */

    var btn = document.getElementById('btn');
    btn.onclick = function () {
        alert('onclick1');
    };
    console.log('event: ' + event);
    btn.onclick = function (e) {
        alert('e:' + evt);
    };

    btn.addEventListener('click', function () {
        alert('add event list1');
    });

    btn.addEventListener('click', function () {
        alert('add event list2');
    });

};

