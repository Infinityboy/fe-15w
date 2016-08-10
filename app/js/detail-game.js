'use strict';

var cacheData = null;
var s;
var sourceId;
var topicId;
window.Jn = {
    setCookie: function (name, value, iDay) {
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + iDay);
        document.cookie = name + '=' + value + ';expires=' + oDate;
    },
    getCookie: function (name) {
        var arr = document.cookie.split('; ');
        for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('=');
            if (arr2[0] == name) {
                return arr2[1];
            }
        }
        return '';
    }
};

Jn.setData = function (data) {
    if (data.key == 'gameInitDetail') {
        renderData(data.content);
    }
};

Jn.addComment = function(data){
    if(data.code == '10000' && data.message == 'success'){
        renderData(data.data);
    }
};

Jn.refreshComment = function(data){
    Jnapp.jn_getComment(data.content.changyanSid,data.content.sourceTitle);
};


function renderData(data) {
    var htmlStr = '<header><section class="header-scores">';
    htmlStr += '<div><img class="header-scores-logo1eft" src="' + data.teamA.logo + '"/></div>';
    htmlStr += '<div class="game-score"><span><b>' + data.teamA.score + '</b> </span><span><b>:</b></span>';
    htmlStr += ' <span><b>' + data.teamB.score + '</b></span></div> ';
    htmlStr += '<div><img class="header-scores-logoright" src="' + data.teamB.logo + '"/></div>';
    htmlStr += '</section>';

    htmlStr += '<section class="header-teams">';
    htmlStr += '<div class="header-teams-left">' + data.teamA.name + '</div> ';

    htmlStr += '<div class="header-teams-middle"><span>' + data.gameTime + ' ' + data.gameType + '</span></div> ';
    htmlStr += '<div class="header-teams-right">' + data.teamB.name + '</div> </section> <section class="ProgressBar clearFix"> ';

    // 单元长度为15px
    var leftItemLength = Math.max(data.teamA.score * 50, 5);
    var rightItemLength = Math.max(data.teamB.score * 50, 5);

    htmlStr += '<div class="ProgressBar-leftbox"><div class="ProgressBar-left" style="width:' + leftItemLength + 'px"></div></div>';
    htmlStr += '<div class="ProgressBar-rightbox"><div class="ProgressBar-right" style="width:' + rightItemLength + 'px"></div></div> </section>';
    htmlStr += '<section class="supporters"><a href="##" class="sp sp-left" data-id="' + data.dataId + '" data-team="' + data.teamA.teamId + '"><img class="supporters-leftlogo" src="images/matchdetail_ic_support.png"/>';
    htmlStr += '<span class="supporters-leftNumber supp" id="supporters-leftNumber"> ' + data.teamA.support_numbber + '</span></a>';
    htmlStr += '<div class="space-holder"></div>';
    htmlStr += '<a href="##" class="sp sp-right" data-id="' + data.dataId + '" data-team="' + data.teamB.teamId + '">';
    htmlStr += '<img class="supporters-rightlogo" src="images/matchdetail_ic_support.png"/><span class="supporters-rightNumber supp"id="supporters-rightNumber">' + data.teamB.support_numbber + '</span></a></section> ';
    htmlStr += '</header>';

    //比赛数据替换为直播平台

    if (data.state == '1') {
        //正在直播
        htmlStr += '</div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><div class="border"><a href="##">直播</a></div></li><li class="outList " data-id="1"><div class="border"><a href="##">讨论</a></div></li><li class="outList " data-id="2"><div class="border"><a href="##">新闻</div></a></li></ul><div class="outContainer ">';
        htmlStr += '<div class="live" data-id="0">';
        htmlStr += '<p class="live-tip">请选择直播平台</p>';
        htmlStr += '<section class="live-list clearfix">';
        htmlStr += '<div class="live-wrap">';
        $.each(data.originSrc,function(i,liveList){
            htmlStr += '<div class="deck">';
            htmlStr += '<div class="deck-img"><img src="'+liveList.logo+'" alt=""/>'+'</div>';
            htmlStr += '<span class="live-button select" data-url="'+liveList.link+'">观看直播</span></div>';
        });
        htmlStr += '</div></section></div>';

    }else if(data.state == '3'){
        //未直播将要直播
        htmlStr += '</div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><div class="border"><a href="##">直播</a></div></li><li class="outList " data-id="1"><div class="border"><a href="##">讨论</a></div></li><li class="outList " data-id="2"><div class="border"><a href="##">新闻</div></a></li></ul><div class="outContainer ">';
        htmlStr += '<div class="live" data-id="0">';
        htmlStr += '<p class="live-tip">请选择直播平台</p>';
        htmlStr += '<section class="live-list clearfix">';
        htmlStr += '<div class="live-wrap">';
        $.each(data.originSrc,function(index,liveList){
            htmlStr += '<div class="deck no-select">';
            htmlStr += '<div class="deck-img"><img src="'+liveList.logo+'" alt=""/>'+'</div>';
            htmlStr += '<span class="live-button">即将开始</span></div>';
        });
        htmlStr += '</div></section></div>';
    }else if(data.state == '2'){
        //直播结束回放视频列表
        htmlStr += '</div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><div class="border"><a href="##">视频</a></div></li><li class="outList " data-id="1"><div class="border"><a href="##">讨论</a></div></li><li class="outList " data-id="2"><div class="border"><a href="##">新闻</div></a></li></ul><div class="outContainer ">';
        if (data.relateVideos.length > 0) {
            htmlStr += '<div class="live" data-id="0">';
            htmlStr += '<section class="list"><ul> ';
            $.each(data.relateVideos, function (index, item) {
                htmlStr += '<li class="clearfix"><a href="##" class="list-item" data-type="' + item.articleType + '" data-id="' + item.extra + '"><img class="fl" src="' + item.thumbnail + '"/>';
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

            htmlStr += '</ul></section></div>';
        } else {
            htmlStr += '<div class="live" data-id="0" style="height: 10rem;font-size: 0.9rem; text-align: center;line-height:10rem;display:none;background-color: #ffffff;">暂无视频数据</div>';
        }
    }else{
        htmlStr += '<div class="live" data-id="0" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;display:block;background-color: #ffffff;">';
    }

    //图文直播变为讨论  PS：讨论无内容所以切换不正确
    //if (data.relateArticle.length > 0) {
    //    htmlStr += '<div class="reviews" data-id="1">';
    //    htmlStr += '<section class="live-byword-listbox"> <ul>';
    //    $.each(data.relateArticle, function (index, item) {
    //        htmlStr += '<li> <div class="innerbox"><div class="live-byword-list clearfix"> ';
    //        htmlStr += '<a href="##" class="live-byword-listimg"><img src="' + item.avatar + '"/> </a>';
    //        htmlStr += '<div class="fl live-byword-list-games"> ';
    //        htmlStr += '<p class="live-byword-list-name">' + item.author + '</p> ';
    //        htmlStr += '<p class="live-byword-list-time">' + item.round + '<span>' + '&nbsp;' + '' + item.time + '</span></p></div></div> ';
    //        htmlStr += '<div class="live-byword-list-words"> ';
    //        htmlStr += '<p>' + item.content + '</p>';
    //
    //        var itemImgs = data.relateArticle[index];
    //        if (itemImgs.images && itemImgs.images.length > 0) {
    //            htmlStr += '<div class="clearFix live-byword-list-words-images">';
    //            $.each(itemImgs.images, function (index, item) {
    //                htmlStr += '<img class="fl" src="' + item + '"/>';
    //            });
    //            htmlStr += '</div> ';
    //        }
    //        htmlStr += '</div></div></li>';
    //    });
    //    htmlStr += '</ul> </section>';
    //    htmlStr += '</section></div>';
    //}else{
    //    if(data.gameContent.length > 0){
    //        htmlStr += '<section class="live-byword-listbox selected"><p style="text-align: center">当前比赛场次还没有图文直播哦!</p></section>';
    //    }else{
    //        htmlStr += '<section class="live-byword-listbox selected"><p style="text-align: center;">当前比赛场次还没有图文直播哦!</p></section>';
    //    }
    //}

    //$.getJSON('http://changyan.sohu.com/api/2/topic/comments?client_id=cyqJ0s6uI&topic_id=' + data.changyanSid + '&callback=?',function(res){
    //    console.log(res);
    //});
    //function showAjax(){
    //    $.ajax({
    //        url:"http://changyan.sohu.com/api/2/topic/comments?client_id=cyqJ0s6uI&topic_id=" + data.changyanSid + "&callback=?",
    //        type:"GET",
    //        data:"",
    //        dataType: 'jsonp',
    //        success:function(data){
    //            //要执行的内容
    //            //showContent();
    //            //page++;	//页数加1
    //            console.log(data);
    //        }
    //    })
    //}
    sourceId = data.changyanSid;
    var sourceTitle = data.title;
    var getComment = Jnapp.jn_getComment(sourceId,sourceTitle);
    topicId = getComment.topic_id;
    htmlStr += '<div class="reviews" data-id="1">';
    //畅言评论
    htmlStr += '<section class="hot-reviews">';
    htmlStr += '<div class="reviews-title"><span>热门评论</span></div>';
    htmlStr += '<div class="reviews-box">';
    htmlStr += '<div class="reviews-header"><img src="'+getComment.hots[0].passport.img_url+'" alt=""/>'+'</div>';
    htmlStr += '<div class="reviews-right">';
    htmlStr += '<span class="reviews-name">'+getComment.hots[0].passport.nickname+'</span>';
    htmlStr += '<span class="reviews-time">6天前</span>';
    htmlStr += '<p class="reviews-content">'+getComment.hots[0].content+'</p> </div> </div>';
    htmlStr += '<div class="reviews-box">';
    htmlStr += '<div class="reviews-header"><img src="'+getComment.hots[1].passport.img_url+'" alt=""/>'+'</div>';
    htmlStr += '<div class="reviews-right">';
    htmlStr += '<span class="reviews-name">'+getComment.hots[1].passport.nickname+'</span>';
    htmlStr += '<span class="reviews-time">6天前</span>';
    htmlStr += '<p class="reviews-content">'+getComment.hots[1].content+'</p></div></div>';
    htmlStr += '<div class="reviews-box-last">';
    htmlStr += '<div class="reviews-header"><img src="'+getComment.hots[2].passport.img_url+'" alt=""/>'+'</div>';
    htmlStr += '<div class="reviews-right">';
    htmlStr += '<span class="reviews-name">'+getComment.hots[2].passport.nickname+'</span>';
    htmlStr += '<span class="reviews-time">6天前</span>';
    htmlStr += '<p class="reviews-content">'+getComment.hots[2].content+'</p>';
    htmlStr += '</div></div></section>';

    htmlStr += '<section class="new-reciews">';
    htmlStr += '<div class="reviews-title"><span>最新评论</span></div>';
    $.each(getComment.comments,function(idx,content){
        htmlStr += '<div class="reviews-box">';
        htmlStr += '<div class="reviews-header"><img src="'+content.passport.img_url+'" alt=""/>'+'</div>';
        htmlStr += '<div class="reviews-right">';
        htmlStr += '<span class="reviews-name">'+content.passport.nickname+'</span>';
        htmlStr += '<span class="reviews-time">6天前</span>';
        htmlStr += '<p class="reviews-content">'+content.content+'</p></div></div>';
    });
    htmlStr += '</section>';
    htmlStr += '</div>';

    //相关新闻
    if (data.recomendVideos.length > 0) {
        htmlStr += '<div class="news" data-id="2">';
        htmlStr += '<section class="list"><ul>';
        $.each(data.recomendVideos, function (index, item) {
            htmlStr += '<li class="clearfix"><a href="##" class="list-item" data-type="' + item.articleType + '" data-id="' + item.extra + '">';
            htmlStr += '<img class="fl" src="' + item.thumbnail + '"/>';
            htmlStr += '<p class="list-title">' + item.title + '</p>';

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
            htmlStr += '</a></li> ';
        });
        htmlStr += ' </ul></section></div></div>';
    }
    else{
        htmlStr += '<div class="news" data-id="1" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;display:none;background-color: #ffffff;">暂无新闻数据</div>';
    }


    //比赛视频
    //if (data.relateVideos.length > 0) {
    //    htmlStr += '<div class="video" data-id="2"> ';
    //    htmlStr += '<section class="list"> <ul> ';
    //
    //    $.each(data.relateVideos, function (index, item) {
    //        htmlStr += '<li class="clearfix"><a href="##" class="list-item" data-type="' + item.articleType + '" data-id="' + item.extra + '"><img class="fl" src="' + item.thumbnail + '"/>';
    //        htmlStr += '<p class="list-title">' + item.title + '</p> ';
    //
    //        if (item.tagColor && item.tagName) {
    //            htmlStr += '<span class="list-tag" style="color:' + item.tagColor + ';border-color:' + item.tagColor + ';">' + item.tagName + '</span>';
    //        }
    //
    //        var date = new Date();
    //        var dateStr;
    //        if (item.updateTime) {
    //            date = new Date(item.updateTime * 1000);
    //        }
    //        dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    //
    //        htmlStr += '<span class="list-time">' + dateStr + '</span>';
    //        htmlStr += '</a></li>';
    //    });
    //
    //    htmlStr += '</ul></section></div>';
    //} else {
    //    htmlStr += '<div class="video" data-id="2" style="height: 10rem;font-size: 0.9rem; text-align: center;line-height:10rem;display:none;background-color: #ffffff;">暂无视频数据</div>';
    //}

    $('#box').html(htmlStr);

}

$(function () {
     $.get('data/living.json', function (res) {
        if (res.code == 10000) {
            renderData(res.data);
        }
     });

    //观看直播
    $(document).on('click','.select',function(e){
        e.preventDefault();
        var dataUrl = $(this).data('url');
        try{
            $(this).addClass('selected');
            $(this).parent().addClass('selected');
            Jnapp.jn_related('5',dataUrl+'');
        }catch(e){

        }


    });
    // 图片查看大图
    $(document).on('click', '.live-byword-list-words-images img', function (e) {
        e.preventDefault();
        var title = $(this).attr('alt');
        title = title ? title : '';
        try {
            Jnapp.jn_image($(this).attr('src'), title, '');
        } catch (e) {

        }
    });


    $(document).on('click', '.list-item', function (e) {
        e.preventDefault();
        try {
            Jnapp.jn_related($(this).data('type'), $(this).data('id') + "");
        } catch (error) {
        }
    });

    //left 点赞支持
    $(document).on('click', '.sp-left', function (e) {
        e.preventDefault();
        var elem = $('#supporters-leftNumber');
        var number = parseInt(elem.html());
        var dataId = $(this).data('id');
        var teamId = $(this).data('team');

        if (Jn.getCookie("sp-" + dataId)) {
            return;
        }
        try {
            number++;
            elem.html(number);
            $(this).find('img').attr('src', 'images/matchdetail_ic_support_red.png');
            Jn.setCookie("sp-" + dataId, number + '', 365);
            Jnapp.jn_agree(7, dataId, teamId);
        } catch (e) {

        }
    });

    // right 点赞支持
    $(document).on('click', '.sp-right', function (e) {
        e.preventDefault();
        var elem = $('#supporters-rightNumber');
        var dataId = $(this).data('id');
        var teamId = $(this).data('team');

        var number = parseInt(elem.html());
        if (Jn.getCookie("sp-" + dataId)) {
            return;
        }
        try {
            number++;
            elem.html(number);
            $(this).find('img').attr('src', 'images/matchdetail_ic_support_blue.png');
            Jn.setCookie("sp-" + dataId, number + '', 365);
            Jnapp.jn_agree(7, dataId, teamId);
        } catch (e) {
        }
    });


    // tab切换 切换外层选项卡
    $(document).on('click', '.outer .outList', function (e) {
        e.preventDefault();
        var target = e.target;
        console.log(target.innerHTML);
        if (!$(this).hasClass('selected')) {
            var cls = $(this).data('id');
            var oContainer = $('.outContainer');
            $(this).addClass('selected').siblings().removeClass('selected');
            if(oContainer.children().eq(cls)){
                console.log(oContainer.children().eq(cls));
                oContainer.children().eq(cls).show().siblings().hide();
            }
        }
        //讨论无限加载(还是不能满足只在讨论模块无限加载)
        var page = 1;
        if(target.innerHTML == '讨论'){
            $(document).on('scroll',function(e){
                e.preventDefault();
                var $scrollTop = $(window).scrollTop(),
                    $documentHeight = $(document).height(),
                    $winHeight = $(window).height(),
                    $dis = $scrollTop + $winHeight,
                    loadReview = $('.new-reciews'),
                    htmlReview;
                //var allpage; //总页码，会从后台获取
                if( $dis>=$documentHeight) {
                    //掉客户端方法
                    var moreComment = Jnapp.jn_getMoreComment(sourceId+'',page + '','30',topicId+'');
                    page++;
                    console.log(page);
                    try {
                        $.each(moreComment.comments,function(idx,content){
                            htmlReview = '<div class="reviews-box">';
                            htmlReview += '<div class="reviews-header"><img src="'+content.passport.img_url+'" alt=""/>'+'</div>';
                            htmlReview += '<div class="reviews-right">';
                            htmlReview += '<span class="reviews-name">'+content.passport.nickname+'</span>';
                            htmlReview += '<span class="reviews-time">6天前</span>';
                            htmlReview += '<p class="reviews-content">'+content.content+'</p></div></div>';
                        });
                        console.log(htmlReview);
                        loadReview.append(htmlReview);
                    } catch (e) {

                    }
                }
            });
        }

    });
    $(document).off('click', '.outer .outList',function(e){
        e.preventDefault();
    });
    //讨论底部无限加载
    //var page = 1;
    //if(target.text() == '讨论'){
    //    $(document).on('scroll',function(e){
    //        e.preventDefault();
    //        var $scrollTop = $(window).scrollTop(),
    //            $documentHeight = $(document).height(),
    //            $winHeight = $(window).height(),
    //            $dis = $scrollTop + $winHeight,
    //            loadReview = $('.new-reciews'),
    //            htmlReview;
    //        var allpage; //总页码，会从后台获取
    //            if( $dis>=$documentHeight) {
    //                //掉客户端方法
    //                //var moreComment = jn_getMoreComment(sourceId,page + '','30');
    //                //if (typeof moreComment == 'string') {
    //                //    moreComment = $.parseJSON(moreComment);
    //                //}
    //                page++;
    //                console.log(page);
    //                try {
    //                    //$.each('',function(idx,content){
    //                    htmlReview = '<div class="r eviews-box">';
    //                    htmlReview += '<div class="reviews-header"><img src="" alt="png.."/></div>';
    //                    htmlReview += '<div class="reviews-right">';
    //                    htmlReview += '<span class="reviews-name">空谷幽兰</span>';
    //                    htmlReview += '<span class="reviews-time">6天前</span>';
    //                    htmlReview += '<p class="reviews-content">别说了啊啊啊别说了啊啊啊别说了啊啊啊别说了啊啊啊别说了啊啊啊别说了啊啊啊别说了啊啊啊别说了啊啊啊别说了啊啊啊别说了啊啊啊</p></div></div>';
    //                    //});
    //                    console.log(htmlReview);
    //                    loadReview.append(htmlReview);
    //                } catch (e) {
    //
    //                }
    //            }
    //    });
    //}

    // 直播跳转
    $(document).on('click', '.play-icon', function () {
        try {
            Jnapp.jn_related(5, $(this).data('url'));
        } catch (e) {

        }
    });
});

