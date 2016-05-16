/**
 * Created by admin on 2016/5/6.
 */
'use strict';
window.Jn = {};

var cacheData = null;

Jn.setData = function(){
    if (data.key == 'newsInitDetail') {
        renderData(data.content);
    }
};

function renderData(data) {
    cacheData = data;

    var title = data.title ? data.title : '';
    var time = data.time ? data.time : '';
    var content = data.content ? data.content : '';

    var htmlStr = '<div class="maintext-title"><p class="maintext-title-h2">' + title + '</p><div><span id="time">' + time + '</span><span class="author">' + data.author + '</span></div></div>';
    htmlStr += '<div class="indent flat-content">' + content + '</div>';

    htmlStr += '<div class="maintext-share"><a href="" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /><p class="sharename">微信</p></a><a href="" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /><p class="sharename">微博</p></a><a href="" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /><p class="sharename">朋友圈</p></a></div></section>';
    var news_list = data.relate_news;
    if (news_list.length > 0) {
        htmlStr += '<section class="header-bottomline3"></section><section class="gamenews"><h2>相关新闻</h2><ul id="news_list">';
        $.each(news_list, function (index, item) {
            htmlStr += '<li class="clearFix"><a href="###" class="relate-news" data-type="' + item.articleType + '" data-id="' + item.extra + '"><img class="fl thumbnail" src="' + item.thumbnail + '"/><div class="fl gamenews-into"><P class="gamenews-into-title">' + item.title + '</P><p class="gamenews-into-text">' + item.excerpt + '</p></div><span class="tag" style="color: ' +item.tagColor +';border-color:'+item.tagColor+';">'+item.tagName+'</span></a></li>';
        });

        htmlStr += '</ul></section><section class="header-bottomline3"></section>';
    }
    $('#newsDetail').html(htmlStr);
}

$(function () {
    //document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';
    $.ajax({
        url: 'data/news.json',
        type: "GET",
        dataType: 'json',
        success: function (str) {
            renderData(str.data);
        },
        error: function (err) {
            alert('失败:' + err);
        }
    });


    // 相关新闻
    $(document).on('click', '.relate-news', function (e) {
        e.preventDefault();
        try{
            Jnapp.jn_related($(this).data('type'), $(this).data('id'));
        }catch(e){

        }
    });

    // 微博
    $(document).on('click', '.maintext-share-weibo', function(e){
        e.preventDefault();
        shareBegin(0)
    });

    // 微信
    $(document).on('click', '.maintext-share-weixin', function(e){
        e.preventDefault();
        shareBegin(1);
    });


    // 朋友圈
    $(document).on('click', '.maintext-share-frident', function(e){
        e.preventDefault();
        shareBegin(2)
    });

    function shareBegin(type){
        try {
            var thumbnail = cacheData.thumbnail;
            var title = cacheData.title;
            var content = cacheData.excerpt;
            var url = cacheData.shareUrl;
            Jnapp.jn_share(type, thumbnail, title, content, url);
        } catch (e){

        }
    }
});