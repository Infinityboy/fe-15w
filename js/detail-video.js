'use strict';
window.onload = window.onresize =function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';
    $(function () {
        $.get('data/video-detail.json', function (res) {
            if (res.code == 10000) {
                var data = res.data;
                var htmlStr = '<header><h1 class="title">' + data.title + '</h1>';
            htmlStr += '<div class="video-meta"><span class="date">' + data.time + '</span><span class="author color-blue ml5">';
                htmlStr += data.author + '</span>';
                htmlStr += '<span class="views">' + data.views + '</span></div>';
                htmlStr += '<div class="player">' + data.content + '</div>';
                htmlStr += '<div class="video-excerpt"><p>' + data.excerpt + '</p></div></header>';

                // 视频推荐列表
                //if (data.recomendVideos.length > 0) {
                //    htmlStr += '<section class="header-bottomline3"></section><h2>视频推荐</h2>';
                //    htmlStr += '<div class="video-list">';
                //
                //    $.each(data.recomendVideos, function (index, item) {
                //        htmlStr += '<a href="###" class="clearfix recommend-video" data-type="' + item.articleType + '" data-id="' + item.extra + '"><img src="' + item.thumbnail + ' alt="" class="cover">';
                //        htmlStr += '<h3>' + item.title + '</h3>';
                //        htmlStr += '<p>' + item.excerpt + '</p>';
                //        htmlStr += '<div class="video-item-meta"><span class="tag" style="border-color:' + item.tagColor + ';color:' + item.tagColor + '">' + item.tagName + '</span></div></a>';
                //    });
                //    htmlStr += '</div>';
                //}

                if (data.recomendVideos.length > 0) {
                    htmlStr += '<section class="header-bottomline3"></section><section class="gamelist"><h3>视频推荐</h3> <ul> ';

                    $.each(data.recomendVideos, function (index, item) {//alert(1);
                        htmlStr += '<li class="clearFix"> <img class="fl" src="' + item.thumbnail + '"/>';
                        htmlStr += ' <div class="fl gamelist-into"> <P class="gamelist-into-title">' + item.title + '</P> ';
                        htmlStr += '<p class="gamelist-into-text">' + item.excerpt + '</p></div> ';
                        htmlStr += '<span>' + item.extra+ '</span><a>' + item.tagName + '</a></li>';
                    });
                    htmlStr += '</ul> </section>';
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
}