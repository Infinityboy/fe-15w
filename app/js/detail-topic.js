/**
 * Desc:  专题js
 * Author: liangqi
 * Date: 16/6/15
 */
'use strict';
window.Jn = {};
Jn.setData = function (data) {
    if (data.key == 'topicInitDetail') {
        renderData(data.content);
    }
};

$(function () {
    // $.ajax({
    //     url: 'data/detail-topic.json',
    //     type: "GET",
    //     dataType: 'json',
    //     success: function (str) {
    //         renderData(str.data);
    //     },
    //     error: function (err) {
    //         alert('失败:' + err);
    //     }
    // });

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
    var title = data.title ? data.title : '';
    var time = data.time ? data.time : '2016-06-04';
    var content = data.content ? data.content : '';
    var banner = data.banner;
    var avatar = data.avatar;

    var htmlStr = '<div class="allcontain detailWrap" style=""><div class="banner" style="background: url(' + banner + ') no-repeat center top; background-size: auto 100%;"></div><div class="container">';
    htmlStr += '<div class="container"><div class="wrap"><div class="left"><div class="details"><h1>' + title + '</h1><div class="detailsTit">';
    htmlStr += '<div class="pic"><img src="' + avatar + '"></div>';
    htmlStr += '<div class="ti">作者：' + data.author + '</div><p><span class="art-time"><i></i>' + time + '</span><span>来源 <a href="#" target="_blank" class="f-blue">' + data['source'] + '</a></span></p></div>';

    // 文章正文
    htmlStr += content;
    htmlStr += '</div></div></div></div>';
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
