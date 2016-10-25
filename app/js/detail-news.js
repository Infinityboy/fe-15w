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
    htmlStr += '<div class="meta"><span class="date">' + time + '</span><span class="author color-blue ml5">';
    htmlStr += data.author + '</span></div></header>';

    htmlStr += '<div class="indent flat-content">' + content + '</div>';

    // 分享
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
    var news_list = data.relate_news;
    if (news_list.length > 0) {
        htmlStr += '<div class="list"><h3>相关新闻</h3><ul id="news_list">';
        $.each(news_list, function (index, item) {
            htmlStr += '<li class="clearFix"><a href="###" class="clearfix list-item" data-type="' + item.articleType + '" data-id="' + item.extra + '"><img class="fl" src="' + item.thumbnail + '"/><p class="list-title">' + item.title + '</p>';

            if (item.tagColor && item.tagName) {
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

        htmlStr += '</ul></div><section class="line"></section>';
    }
    $('#newsDetail').html(htmlStr);
    $('.indent p strong').parent().css('margin','1.5rem 0 1.25rem 0');
    $('.indent p img').parent().css({'padding':'0','margin':'1.5rem 0'});
}

$(function () {
      //$.ajax({
      //   url: 'data/news.json',
      //   type: "GET",
      //   dataType: 'json',
      //   success: function (str) {
      //       renderData(str.data);
      //   },
      //   error: function (err) {
      //       //alert('失败:' + err);
      //   }
      //});

    // 相关新闻
    $(document).on('click', '.list-item', function (e) {
        e.preventDefault();
        try {
            Jnapp.jn_related($(this).data('type'), $(this).data('id') + "");
        } catch (e) {

        }
    });

    // 图片查看大图
    $(document).on('click', '.flat-content img', function (e) {
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

});