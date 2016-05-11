/**
 * Created by admin on 2016/5/6.
 */
'use strict';
window.onload = window.onresize =function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';
    $.ajax({
        url:'http://localhost:63342/work/fe-15w-app/data/news.js',
        type:"GET",
        dataType:'json',
        success:function(str){
            var oMaintitle=str.data.title;
            var oTime=str.data.time;
            var oAuthor=str.data.author;
            var oIndent=str.data.content;
            var news_list=str.data.relate_news;
            /*var oThumnail=str.data.relate_news[0].thumbnail;
             var oGamenewsintotitle=str.data.relate_news[0].title;
             var oGamenewsintotext=str.data.relate_news[0].excerpt;*/


            $("#maintext-title-h2").html(oMaintitle);
            $("#time").html(oTime);
            $("#author").html(oAuthor);
            $("#indent").html(oIndent);
            $.each(news_list,function(index,item){
                $('#news_list').append('<li class="clearFix"><a href=""><img class="fl thumbnail" src="'+item.thumbnail+'"/><div class="fl gamenews-into"><P class="gamenews-into-title">'+item.title+'</P><p class="gamenews-into-text">'+item.excerpt+'</p></div><span>122评论</span></a></li>')
            });

            /* $(".thumbnail").attr("src",oThumnail);
             $(".gamenews-into-title").html(oGamenewsintotitle);
             $(".gamenews-into-text").html(oGamenewsintotext);*/


        },
        error:function(err){
            alert('失败:'+err);
        }
    });
};