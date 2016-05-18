'use strict';
window.Jn = {};

Jn.setData = function(data){
    if (data.key == 'videoInitDetail') {
        renderData(data.content);
    }
};

function renderData(content){
    var data = content;
    var htmlStr = '<header><h1 class="title">' + data.title + '</h1>';
    htmlStr += '<div class="video-meta"><span class="date">' + data.time + '</span><span class="author color-blue ml5">';
    htmlStr += data.author + '</span>';
    htmlStr += '<span class="views">' + data.views + '</span></div>';
    htmlStr += '<div class="player">' + data.content + '</div>';
    htmlStr += '<div class="video-excerpt"><p>' + data.excerpt + '</p></div></header>';
    if (data.recomendVideos.length > 0) {
        htmlStr += '<section class="line"></section><section class="list"><h3>视频推荐</h3><ul> ';
        $.each(data.recomendVideos, function (index, item) {
            htmlStr += '<li class="clearFix list-item" data-type="'+item.articleType+'" data-id="'+ item.extra +'"><img class="fl" src="' + item.thumbnail + '"/>';
            htmlStr += '<p class="list-title">' + item.title + '</p> ';
            htmlStr += '<p class="list-excerpt">' + item.excerpt + '</p>';
            htmlStr += '<span class="list-tag" style="color:'+item.tagColor+';border-color:'+item.tagColor+';">' + item.tagName + '</span></li>';
        });
        htmlStr += '</ul></section><section class="line"></section>';
    }
    $('#detail').html(htmlStr);
}

$(function(){
    //$.get('data/video-detail.json', function (res) {
    //    renderData(res.content);
    //});

    // 相关新闻
    $(document).on('click', '.list-item', function (e) {
        e.preventDefault();
        console.log($(this).data('type') + ':' + $(this).data('id'));
        try {
            Jnapp.jn_related($(this).data('type'), $(this).data('id'));
        } catch (e) {

        }
    });
});