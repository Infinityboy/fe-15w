/**
 * Desc:  视频详情页js
 * Author: liangqi
 * Date: 16/5/10
 */

$(function () {
    $.get('data/video-detail.json', function (res) {
        if (res.code == 10000) {
            var data = res.data;
            var htmlStr = '<header><h1 class="title">' + data.title + '</h1>';
            htmlStr += '<div class="video-meta"><span class="date">' + data.time + '</span><span class="author color-blue ml5">';
            htmlStr += data.author + '</span><span class="views">';
            htmlStr += '<span class="views">' + data.views + '</span></div>';
            htmlStr += '<div class="player">' + data.content + '</div>';
            htmlStr += '<div class="video-excerpt"><p>' + data.excerpt + '</p></div></header>';

            // 视频推荐列表
            if (data.recomendVideos.length > 0) {
                htmlStr += '<h2>视频推荐</h2>';
                htmlStr += '<div class="video-list">';

                $.each(data.recomendVideos, function (index, item) {
                    htmlStr += '<a href="###" class="clearfix recommend-video" data-type="' + item.articleType + '" data-id="' + item.extra + '"><img src="' + item.thumbnail + ' alt="" class="cover">';
                    htmlStr += '<h3>' + item.title + '</h3>';
                    htmlStr += '<p>' + item.excerpt + '</p>';
                    htmlStr += '<div class="video-item-meta"><span class="tag" style="border-color:' + item.tagColor + ';color:' + item.tagColor + '">' + item.tagName + '</span></div></a>';
                });
                htmlStr += '</div>';
            }
            $('#detail').html(htmlStr);
        }
    });

    $(document).on('click', '.recommend-video', function (e) {
        e.preventDefault();
        console.log($(this).data('id'));
        console.log($(this).data('type'));
    });
});


