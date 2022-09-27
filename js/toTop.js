$(function () {
    $('#BackTop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 333);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#BackTop').fadeIn(222);
        } else {
            $('#BackTop').stop().fadeOut(222);
        }
    }).scroll();
});

$(function(){$("#send").click(function(b){var a=!0;b=$("#QA").val();""==b?(a=!1,alert("\u54c8\u56c9~\u76ee\u524d\u672a\u8f38\u5165\u4efb\u4f55\u6587\u5b57\u5537\uff0c\u8acb\u518d\u78ba\u8a8d\u662f\u5426\u5df2\u5b8c\u6210\u8f38\u5165~\u8b1d\u8b1d\uff01")):10>b.length&&(a=!1,alert("\u54c8\u56c9~\u76ee\u524d\u8f38\u5165\u7684\u6587\u5b57\u592a\u77ed\u5537\uff0c\u8acb\u518d\u78ba\u8a8d\u662f\u5426\u5df2\u5b8c\u6210\u8f38\u5165~\u8b1d\u8b1d\uff01"));a&&(a=new Date,a=a.getFullYear()+"/"+(a.getMonth()+1)+
"/"+a.getDate()+"  "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),sendqu({qa:b,qatime:a}))})});function sendqu(b){$.ajax({type:"get",url:"https://script.google.com/macros/s/AKfycbzzN6OMGiDVEygIR5aIzuRUGM6Vi4YernBpIkzaAayqOLz97Fc/exec?callback=?",data:b,success:function(a){$("#QA").val("");alert("\u6536\u5230\u4f60\u7684\u56de\u8986\u56c9\uff01 \u6211\u5011\u5c07\u8490\u96c6\u5927\u5bb6\u554f\u984c\u5f8c\uff0c\u4e0d\u5b9a\u671f\u66f4\u65b0\uff0c\u656c\u8acb\u9396\u5b9a\uff01")}})};