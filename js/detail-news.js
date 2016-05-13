/**
 * Created by admin on 2016/5/6.
 */

'use strict';
var Jn = {};

/**
 * 客户端传递数据到页面
 */
Jn.setData = function (data) {
    if (data.key) {
        switch (data.key) {
            case 'videoInitDetail':
                newsInitDetail(data);
                break;
        }
    }
};

function newsInitDetail(res) {
    renderData(res);
}

$(function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';
    $.ajax({
        url: 'data/news.js',
        type: "GET",
        dataType: 'json',
        success: function (str) {
            renderData(str);
        },
        error: function (err) {
            alert('失败:' + err);
        }
    });

    function renderData(src) {
        if (src.code == 10000) {
            var data = src.data;
            var htmlStr = '<div class="maintext-title"><p class="maintext-title-h2">' + data.title + '</p><div><span id="time">' + data.time + '</span><span class="author">' + data.author + '</span></div></div>';
            htmlStr += '<div class="indent">' + data.content + '</div>';
            // 分享
            htmlStr += '<div class="maintext-share"><a href="" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /><p class="sharename">微信</p></a><a href="" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /><p class="sharename">微博</p></a><a href="" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /><p class="sharename">朋友圈</p></a></div></section>';

            var news_list = data.relate_news;
            if (news_list.length > 0) {
                htmlStr += '<section class="header-bottomline3"></section><section class="gamenews"><h2>相关新闻</h2><ul id="news_list">';
                $.each(news_list, function (index, item) {
                    htmlStr += '<li class="clearFix"><a href="###" class="relate-news" data-type="' + item.articleType + '" data-id="' + item.extra + '"><img class="fl thumbnail" src="' + item.thumbnail + '"/><div class="fl gamenews-into"><P class="gamenews-into-title">' + item.title + '</P><p class="gamenews-into-text">' + item.excerpt + '</p></div><span>122评论</span></a></li>';
                });

                htmlStr += '</ul></section>';
            }
            $('#newsDetail').html(htmlStr);
        }
    }

    // 绑定事件
    $(document).on('click', '.relate-news', function (e) {
        e.preventDefault();
        console.log($(this).data('id'));
        console.log($(this).data('type'));
    });

    // 微信
    $(document).on('click', '.maintext-share-weixin', function(e){
        e.preventDefault();
        console.log('微信!');
    });

    // 微博
    $(document).on('click', '.maintext-share-weibo', function(e){
        e.preventDefault();
        console.log('微博!');
    });

    // 朋友圈
    $(document).on('click', '.maintext-share-frident', function(e){
        e.preventDefault();
        console.log('朋友圈!');
    });
});