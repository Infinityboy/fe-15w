/**
 * Desc:  专题js
 * Author: liangqi
 * Date: 16/6/15
 */
'use strict';
window.Jn = {};
var cacheData = null;
Jn.setData = function (data) {
    if (data.key == 'topicInitDetail') {
        renderData(data.content);
    }
};

$(function () {
     //$.ajax({
     //    url: 'data/detail-topic.json',
     //    type: "GET",
     //    dataType: 'json',
     //    success: function (str) {
     //        renderData(str.data);
     //    },
     //    error: function (err) {
     //        alert('失败:' + err);
     //    }
     //});

    // 图片查看大图
    $(document).on('click', '.detailsCon img', function (e) {
        e.preventDefault();
        var title = $(this).attr('alt');
        title = title ? title : '';
        try {
            Jnapp.jn_image($(this).attr('src'), title, '');
        } catch (e) {

        }
    });

    // 微博
    $(document).on('click', '.maintext-share-weibo', function (e) {
        e.preventDefault();
        shareBegin(0);
    });

    // 微信
    $(document).on('click', '.maintext-share-weixin', function (e) {
        e.preventDefault();
        shareBegin(1);
    });

    // 朋友圈
    $(document).on('click', '.maintext-share-frident', function (e) {
        e.preventDefault();
        shareBegin(2);
    });

    //qq
    $(document).on('click', '.maintext-share-qq-space', function (e) {
        e.preventDefault();
        shareBegin(3);
    });

    //空间
    $(document).on('click', '.maintext-share-qq', function (e) {
        e.preventDefault();
        shareBegin(4);
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

    // 相关新闻
    $(document).on('click', '.list-item', function (e) {
        e.preventDefault();
        try {
            Jnapp.jn_related($(this).data('type'), $(this).data('id') + "");
        } catch (e) {

        }
    });
});

function renderData(data) {
    cacheData = data;
    var title = data.title ? data.title : '';
    var content = data.content ? data.content : '';
    var banner = data.banner;
    var avatar = data.avatar;

    var htmlStr = '<div class="allcontain detailWrap" style=""><div class="banner" style="background: url(' + banner + ') no-repeat center top; background-size: auto 100%;"></div>';
    htmlStr += '<div class="container"><div class="wrap"><div class="left"><div class="details"><h1>' + title + '</h1><div class="detailsTit">';
    htmlStr += '<div class="pic"><img src="' + avatar + '"></div>';
    htmlStr += '<div class="ti">作者' + data.author + '</div>';
    if(data.time){
        htmlStr += '<span class="art-time"><i></i>' + time + '</span>';
    }
    htmlStr += '</div>';

    // 文章正文
    htmlStr += '<div class="indent">' + content + '</div>';
    htmlStr += '</div></div></div></div>';

    //try {
    //    var shareData = Jnapp.jn_getShare();
    //    if (typeof shareData == 'string') {
    //        shareData = $.parseJSON(shareData);
    //        htmlStr += '<div class="excerpt-share"><div class="video-excerpt"><div class="video-excerpt-tip"><img src="data:image/png;charset=utf-8;base64,'+ shareData.baseIcon+'" alt="loading..."/><p>' + shareData.title + '</p></div></div>';
    //    }
    //} catch (ex) {
    //
    //}

    htmlStr += '<div class="share-short-issue"><p></p><p>分享给召唤师们</p><p></p></div>'
    htmlStr += '<div class="maintext-share"><a href="" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /></a><a href="" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /></a><a href="" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /></a><a href="" class="maintext-share-qq-space"><img src="images/qq_zone.png" /></a><a href="" class="maintext-share-qq"><img src="images/QQ_2x.png" /></a></div></div>';


    if (data.pastlist.length > 0) {
        htmlStr += '<div class="list"><h3>往期回顾</h3><ul id="news_list">';
        $.each(data.pastlist, function (index, item) {
            htmlStr += '<li class="clearFix"><a href="###" class="clearfix list-item" data-type="' + item.articleType + '" data-id="' + item.extra + '"><img class="fl" src="' + item.thumbnail + '"/><p class="list-title">' + item.title + '</p>';

            if(item.tagColor && item.tagName){
                htmlStr += '<span class="list-tag" style="color:' + item.tagColor + ';border-Color:' + item.tagColor + ';">' + item.tagName + '</span>';
            }

            var date = new Date();
            var dateStr;
            if (item.updateTime) {
                date = new Date(item.updateTime * 1000);
            }
            dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            htmlStr += '<span class="list-time">' + dateStr + '</span>';
            htmlStr += '</a></li>';
        });

        htmlStr += '</ul></div>';
    }

    $('#content').html(htmlStr);

}
