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
    var videoContent = data.content ? data.content : '';
    htmlStr += '<div class="player">' + videoContent + '</div>';
    htmlStr += '<div class="video-excerpt"><p>' + data.excerpt + '</p></div></header>';
    if (data.recomendVideos.length > 0) {
        htmlStr += '<section class="line"></section><section class="list"><h3>视频推荐</h3><ul> ';
        $.each(data.recomendVideos, function (index, item) {
            htmlStr += '<li class="clearFix"><a href="##" class="list-item"  data-type="'+item.articleType+'" data-id="'+ item.extra +'"> <img class="fl" src="' + item.thumbnail + '"/>';
            htmlStr += '<p class="list-title">' + item.title + '</p> ';
            htmlStr += '<span class="list-tag" style="color:'+item.tagColor+';border-color:'+item.tagColor+';">' + item.tagName + '</span>';
            var date = new Date();
            var dateStr;
            if (item.updateTime) {
                date = new Date(item.updateTime);
            }
            dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

            htmlStr += '<span class="list-time">' + dateStr + '</span>';

            htmlStr += '</a></li>';

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
        try {
            Jnapp.jn_related($(this).data('type'), $(this).data('id') +"");
        } catch (e) {

        }
    });
});
