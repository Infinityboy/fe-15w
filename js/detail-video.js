'use strict';
window.onload = window.onresize =function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';
    $.ajax({
        url:'video.js',
        type:"GET",
        dataType:'json',
        success:function(str){
            var oTitle=str.data.title;
            var oData=str.data.time;
            var oAuthor=str.data.author;
            var oViews=str.data.views;
            var oPlayer=str.data.content;
            var oPlayerExcerpt=str.data.excerpt;
            var oVideolistImg=str.data.recomendVideos[0].thumbnail;
            var oVideolistH2=str.data.recomendVideos[0].title;
            var oVideolistExcerpt=str.data.recomendVideos[0].excerpt;
            var oVideolistTag=str.data.recomendVideos[0].tagName;

            //console.log(oPlayer);


            $("#title").html(oTitle);
            $("#data").html(oData);
            $("#author").html(oAuthor);
            $("#views").html(oViews);
            $("#player").attr("src",oPlayer);
            $("#video-excerpt").html(oPlayerExcerpt);
            $(".video-list img").attr("src",oVideolistImg);
            $(".video-list h2").html(oVideolistH2);
            $(".video-list p").html(oVideolistExcerpt);
            $(".tag").html(oVideolistTag);

        },
        error:function(err){
            alert('失败:'+err);
        }
    });
};