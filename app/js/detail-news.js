/**
 * Created by admin on 2016/5/6.
 */
'use strict';
window.Jn = {};
var cacheData = null;

Jn.setData = function (data) {
    if (data.key == 'newsInitDetail') {
        renderData(data.content);
    }
};

function renderData(data) {
    cacheData = data;

    var title = data.title ? data.title : '';
    var time = data.time ? data.time : '';
    var content = data.content ? data.content : '';

    var htmlStr = '<header><h1 class="title">' + title + '</h1>';
    htmlStr += '<div class="video-meta"><span class="date">' + time + '</span><span class="author color-blue ml5">';
    htmlStr += data.author + '</span></div></header>';

    htmlStr += '<div class="indent flat-content">' + content + '</div>';

    htmlStr += '<div class="maintext-share"><a href="" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /><p class="sharename">微信</p></a><a href="" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /><p class="sharename">微博</p></a><a href="" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /><p class="sharename">朋友圈</p></a></div></section>';
    var news_list = data.relate_news;
    if (news_list.length > 0) {
        htmlStr += '<section class="line"></section><section class="list"><h3>相关新闻</h3><ul id="news_list">';
        $.each(news_list, function (index, item) {
            htmlStr += '<li class="clearFix"><a href="###" class="clearfix list-item" data-type="' + item.articleType + '" data-id="' + item.extra + '"><img class="fl" src="' + item.thumbnail + '"/><p class="list-title">' + item.title + '</p><span class="list-tag" style="color:' + item.tagColor + ';border-Color:' + item.tagColor + ';">' + item.tagName + '</span>';

            var date = new Date();
            var dateStr;
            if (item.updateTime) {
                date = new Date(item.updateTime * 1000);
            }
            dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
            htmlStr += '<span class="list-time">' + dateStr + '</span>';
            htmlStr += '</a></li>';

        });

        htmlStr += '</ul></section><section class="line"></section>';
    }
    $('#newsDetail').html(htmlStr);
}

$(function () {
    //$.ajax({
    //    url: 'data/news.json',
    //    type: "GET",
    //    dataType: 'json',
    //    success: function (str) {
    //        renderData(str.data);
    //    },
    //    error: function (err) {
    //        alert('失败:' + err);
    //    }
    //});

    // 相关新闻
    $(document).on('click', '.list-item', function (e) {
        e.preventDefault();
        try {
            Jnapp.jn_related($(this).data('type'), $(this).data('id') + "");
        } catch (e) {

        }
    });

    // 微博
    $(document).on('click', '.maintext-share-weibo', function (e) {
        e.preventDefault();
        shareBegin(0)
    });

    // 微信
    $(document).on('click', '.maintext-share-weixin', function (e) {
        e.preventDefault();
        shareBegin(1);
    });

    // 朋友圈
    $(document).on('click', '.maintext-share-frident', function (e) {
        e.preventDefault();
        shareBegin(2)
    });

    function shareBegin(type) {
        try {
            var thumbnail = cacheData.thumbnail;
            var title = cacheData.title;
            var content = cacheData.excerpt;
            var url = cacheData.shareUrl;
            Jnapp.jn_share(type, thumbnail, title, content, url);
        } catch (e) {

        }
    }
});