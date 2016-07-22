'use strict';
window.Jn = {};
var cacheData = null;
var voteId;

Jn.setData = function (data) {
    if (data.key == 'videoInitDetail') {
        renderData(data.content);
    }
};



function renderData(content) {
    var data = content;
    cacheData = data;
    voteId = data.voteId;
    var videoContent = data.content ? data.content : '';
    var screenWidth = $(window).width();
    var videoHeight = screenWidth * 498 / 640;


    var htmlStr = '<header>'+'<div class="player clearfix" style="height:' + videoHeight + 'px">' + videoContent +'<button class="video-button" style="top:'+(videoHeight-40)+'px">'+'</button>'+ '</div></header>';


    //htmlStr += '<div class="player" style="height:' + videoHeight + '">' + videoContent + '</div>';
    htmlStr += '<div class="content">'+'<h1 class="title">' + data.title + '</h1>';
    htmlStr += '<div class="video-meta clearfix"><span class="date">' + data.time + '</span><span class="author color-blue ml5">';
    htmlStr += data.author + '</span>';
    htmlStr += '<span class="views">' + data.views + '</span></div>';

    htmlStr +='<div class="video-question" style="display:block;"></div>';
    htmlStr +='<div class="video-question-answer" style="display:none;"></div>';



    //var userData = Jnapp.jn_login_info();
    //console.log(voteId);
    if (voteId && voteId !== 'undefined') {
        //'data/video-question.json'
        $.get("http://api.15w.com/client/app/jn/v1_4/vote/detail?dataId="+voteId+"", function (res) {
            //console.log(res);
            if (res.code == '10000') {
                //console.log(res);
                var dataQuestion = res.data;
                var questionOptions = dataQuestion.votes;
                var questionExcerpt = dataQuestion.excerpt;
                var result = dataQuestion.results;
                var question = $('.video-question');
                var answer = $('.video-question-answer');
                var htmlQu = '<ul><li class="video-question-title">' + dataQuestion.title + '</li><li class="video-question-option" data-id="0"><span >A:</span>' + questionOptions.A + '</li><li class="video-question-option" data-id="1"><span >B:</span>' + questionOptions.B + '</li><li class="video-question-option" data-id="2"><span >C:</span>' + questionOptions.C + '</li><li class="video-question-option" data-id="3"><span>D:</span>' + questionOptions.D + '</li></ul><p>' + questionExcerpt + '</p>';
                var htmlAns = '<ul class="video-answer"><li class="video-answer-title">' + dataQuestion.title + '</li><li class="video-answer-option"><span>A:</span>' + questionOptions.A + '<em style="display: none" data-id="0">(已选择)</em></li><ul class="option-detail"><li class="color-a"></li><li class="option-num">' + result.A + '</li></ul><li class="video-answer-option" ><span>B:</span>' + questionOptions.B + '<em style="display: none" data-id="1">(已选择)</em></li><ul class="option-detail"><li class="color-b"></li><li class="option-num">' + result.B + '</li></ul><li class="video-answer-option clearfix" ><span>C:</span>' + questionOptions.C + '<em style="display: none" data-id="2">(已选择)</em></li><ul class="option-detail"><li class="color-c"></li><li class="option-num">' + result.C + '</li></ul><li class="video-answer-option" ><span>D:</span>' + questionOptions.D + '<em style="display: none" data-id="3">(已选择)</em></li><ul class="option-detail"><li class="color-d"></li><li class="option-num">' + result.D + '</li></ul></ul><p>' + questionExcerpt + '</p>';
                question.html(htmlQu);
                answer.html(htmlAns);
            }
            if(dataQuestion.islogin == '1') {  //已登录
                //console.log(res.data);
                //var userValue = jn_getData(uId + '_' + voteId);
                if (dataQuestion.isVote == '-1') {
                    question.show();
                    answer.hide();
                } else {
                    question.hide();
                    answer.show();
                }
            }else {
            question.show();
            answer.hide();
            }
        });
    }

    htmlStr += '<div class="excerpt-share"><div class="video-excerpt"><div class="video-excerpt-tip"><img src="images/提莫_2xpng.png" alt="loading..."/><p>' + data.excerpt + '</p></div></div>';

    htmlStr += '<div class="maintext-share"><a href="" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /><p class="sharename">微信</p></a><a href="" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /><p class="sharename">朋友圈</p></a><a href="" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /><p class="sharename">微博</p></a><a href="" class="maintext-share-qq-space"><img src="images/空间_2x.png" /><p class="sharename">空间</p></a><a href="" class="maintext-share-qq"><img src="images/QQ_2x.png" /><p class="sharename">QQ</p></a></div></div>';

    if (data.recomendVideos.length > 0) {
        htmlStr += '<section class="list"><h3>视频推荐</h3><ul> ';
        $.each(data.recomendVideos, function (index, item) {
            htmlStr += '<li class="clearFix"><a href="##" class="list-item"  data-type="' + item.articleType + '" data-id="' + item.extra + '"><img class="fl" src="' + item.thumbnail + '"/>';
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
        htmlStr += '</ul></section><section class="line"></section></div>';
    }
    $('#detail').html(htmlStr);
    if(data.videoType == 1){
        var iFrame = $('header .player iframe');
        iFrame.css('height', videoHeight+'px');
    }else{
        videoHeight = 'auto';
    }

    if (data.videoType == 2) {
        videoContent = '<img class="video-cover"  data-id="' + data.videoUrl + '" src="' + data.thumbnail + '" />' + '<span class="replace-button"><span>';
    }


}

$(function () {
     $.get('data/video-detail.json', function (res) {
         renderData(res.content);
     });

     //问答
    //var userData = Jnapp.jn_login_info();
    //uId = userData.uid;
    //token = userData.token;
    //if (voteId && voteId !== 'undefined') {
    //
    //    //'data/video-question.json'
    //    $.get('"http://api.15w.com/client/app/jn/v1_4/vote/detail?dataId='+voteId+'"', function (res) {
    //        //console.log(res);
    //        if (res.code == '10000') {
    //            console.log(res.code);
    //            var dataQuestion = res.data;
    //            var questionOptions = dataQuestion.votes;
    //            var questionExcerpt = dataQuestion.excerpt;
    //            var result = dataQuestion.results;
    //            var question = $('.video-question');
    //            var answer = $('.video-question-answer');
    //            var htmlQu = '<ul><li class="video-question-title">' + dataQuestion.title + '</li><li class="video-question-option" data-id="0"><span >A:</span>' + questionOptions.A + '</li><li class="video-question-option" data-id="1"><span >B:</span>' + questionOptions.B + '</li><li class="video-question-option" data-id="2"><span >C:</span>' + questionOptions.C + '</li><li class="video-question-option" data-id="3"><span>D:</span>' + questionOptions.D + '</li></ul><p>' + questionExcerpt + '</p>';
    //            var htmlAns = '<ul class="video-answer"><li class="video-answer-title">' + dataQuestion.title + '</li><li class="video-answer-option"><span>A:</span>' + questionOptions.A + '<em style="display: none" data-id="0">(已选择)</em></li><ul class="option-detail"><li class="color-a"></li><li class="option-num">' + result.A + '</li></ul><li class="video-answer-option" ><span>B:</span>' + questionOptions.B + '<em style="display: none" data-id="1">(已选择)</em></li><ul class="option-detail"><li class="color-b"></li><li class="option-num">' + result.B + '</li></ul><li class="video-answer-option clearfix" ><span>C:</span>' + questionOptions.C + '<em style="display: none" data-id="2">(已选择)</em></li><ul class="option-detail"><li class="color-c"></li><li class="option-num">' + result.C + '</li></ul><li class="video-answer-option" ><span>D:</span>' + questionOptions.D + '<em style="display: none" data-id="3">(已选择)</em></li><ul class="option-detail"><li class="color-d"></li><li class="option-num">' + result.D + '</li></ul></ul><p>' + questionExcerpt + '</p>';
    //            question.html(htmlQu);
    //            answer.html(htmlAns);
    //        }
    //        //if(userData.uid && userData.token) {  //已登录
    //            //console.log(res.data);
    //            //var userValue = jn_getData(uId + '_' + voteId);
    //            //if (userValue) {
    //            //    question.hide();
    //            //    answer.show();
    //            //} else {
    //            //    question.show();
    //            //    answer.hide();
    //            //}
    //        //}else {
    //            question.show();
    //            answer.hide();
    //        //}
    //    });
    //}

    // 相关新闻
    $(document).on('click', '.list-item', function (e) {
        e.preventDefault();
        try {
            Jnapp.jn_related($(this).data('type'), $(this).data('id') + "");
        } catch (err) {

        }
    });

    $(document).on('touchstart', '.player', function (e) {
        var img = $(this).find('.video-cover');
        if (img.length > 0){
            e.preventDefault();
            try {
                console.log(img.data('id'));
                Jnapp.jn_video(101, img.data('id'));
            } catch (err) {

            }
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

    var isHorizontal = false;
    var player = $('.player');
    var screenWidth = $(window).width();
    var height = screenWidth * 498 / 640;
    var oContent = $('.video-recommend .content');
    $(document).on('click', '.video-button', function (e) {
        e.preventDefault();
        try {
            isHorizontal = !isHorizontal;
            if (isHorizontal) {
                var iFrame = $('header .player iframe');
                iFrame.css('height', '100%');
                player.css('height', screenWidth + 'px');
                oContent.css('display','none');
                $('.video-button').css('top',(screenWidth-40)+'px');
                $('body').css({
                    'height': '100%',
                    'overflow': 'hidden'
                });
                Jnapp.jn_test(true);
            } else {  // 竖屏
                var iFrame = $('header .player iframe');
                iFrame.css('height', height + 'px');
                player.css('height', height + 'px');
                $('body').css({'height': 'auto', 'overflow': 'hidden'});
                $('.video-button').css('top',(height-40)+'px');
                Jnapp.jn_test(false);
            }
        } catch (e) {

        }
    });

    $(window).on('resize', function () {
        var videoHeight = screenWidth * 498 / 640;
        var player = $('.player');
        if (player && player.find('.video-cover').length <= 0) {
            player.css('height', videoHeight);
        }
    });

    $(document).on('click','.video-question ul li',function(e){
        e.preventDefault();
        var oQuestion = $('.video-question');
        var oAnswer = $('.video-question-answer');
        var liId = $(this).data('id');
        var oAnswerId = $('.video-answer-option').children("[data-id='"+liId+"']");
        var optionValue = $(this).text().substr(0,1);

        //验证等录
        var userData = Jnapp.jn_login_info();
        var uId = userData.uid;
        var token = userData.token;
        /*****未登录********/
        if(uId == '' &&  token == ''){
            Jnapp.jn_login();
        }else{//已登陆

            switch(optionValue){
                case 'A':
                    $.post('http://api.15w.com/client/app/jn/v1_4/vote/vote',{
                        'dataId': voteId,
                        'uid':uId,
                        'token':token,
                        'sign':'A'
                    });
                    break;
                case 'B':
                    $.post('http://api.15w.com/client/app/jn/v1_4/vote/vote',{
                        'dataId': voteId,
                        'uid':uId,
                        'token':token,
                        'sign':'B'
                    });
                    break;
                case 'C':
                    $.post('http://api.15w.com/client/app/jn/v1_4/vote/vote',{
                        'dataId': voteId,
                        'uid':uId,
                        'token':token,
                        'sign':'C'
                    });
                    break;
                case 'D':
                    $.post('http://api.15w.com/client/app/jn/v1_4/vote/vote',{
                        'dataId': voteId,
                        'uid':uId,
                        'token':token,
                        'sign':'D'
                    });
                    break;
                default :
                    'error';
            }

            //Jnapp.jn_setData(uId+'_'+voteId,optionValue);
            oQuestion.hide();
            oAnswer.show();
            oAnswerId.show();
        }
    });
});
