'use strict';
window.Jn = {};
var cacheData = null;

Jn.setData = function (data) {
    if (data.key == 'videoInitDetail') {
        renderData(data.content);
    }
};

function renderData(content) {
    var data = content;
    cacheData = data;
    var htmlStr = '<header><h1 class="title">' + data.title + '</h1>';
    htmlStr += '<div class="video-meta"><span class="date">' + data.time + '</span><span class="author color-blue ml5">';
    htmlStr += data.author + '</span>';
    htmlStr += '<span class="views">' + data.views + '</span></div>';
    var videoContent = data.content ? data.content : '';

    var videoHeight = $(document).width() / 1.7;
    if (!videoHeight) {
        videoHeight = '10rem';
    } else {
        videoHeight += 'px';
    }
    if(data.videoType=="2"){
        videoContent = '<img  data-id="'+data.videoUrl+'" src="'+data.thumbnail+'" />';
    }

    htmlStr += '<div class="player" style="height:' + videoHeight + '">' + videoContent + '</div>';

    htmlStr += '<div class="video-excerpt"><p>' + data.excerpt + '</p></div></header>';

    htmlStr += '<div class="maintext-share"><a href="" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /><p class="sharename">微信</p></a><a href="" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /><p class="sharename">微博</p></a><a href="" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /><p class="sharename">朋友圈</p></a></div>';

    if (data.recomendVideos.length > 0) {
        htmlStr += '<section class="list"><h3>视频推荐</h3><ul> ';
        $.each(data.recomendVideos, function (index, item) {
            htmlStr += '<li class="clearFix"><a href="##" class="list-item"  data-type="' + item.articleType + '" data-id="' + item.extra + '"> <img class="fl" src="' + item.thumbnail + '"/>';
            htmlStr += '<p class="list-title">' + item.title + '</p> ';

            if (item.tagColor && item.tagName) {
                htmlStr += '<span class="list-tag" style="color:' + item.tagColor + ';border-color:' + item.tagColor + ';">' + item.tagName + '</span>';
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
        htmlStr += '</ul></section><section class="line"></section>';
    }
    $('#detail').html(htmlStr);
}

$(function () {
     //$.get('data/video-detail.json', function (res) {
     //    renderData(res.content);
     //});

    // 相关新闻
    $(document).on('click', '.list-item', function (e) {
        e.preventDefault();
        try {
            Jnapp.jn_related($(this).data('type'), $(this).data('id') + "");
        } catch (e) {

        }
    });

    $(document).on('click', '.player img', function (e) {
        e.preventDefault();
        try {
            jn_video(101,$(this).data('id')+ "");
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


    $(window).on('resize', function () {
        var videoHeight = $(document).width() / 1.7;
        var player = $('.player');
        if (player) {
            player.css('height', videoHeight);
        }
    });
});
