'use strict';
window.Jn = {};
var cacheData = null;
var voteId;
var defaultHeight = 360;
var defaultWidth = 640;
var isVote = false;
Jn.setData = function (data) {
    if (data.key == 'videoInitDetail') {
        renderData(data.content);
    }
};


function isIOS(ua) {
    return ua.indexOf('iPhone') > 0;
}

function getDatediff(timeStamp) {
    var result;
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var now = new Date().getTime();
    var diffValue = now - timeStamp*1000;
    if (diffValue < 0) {
        return;
    }
    var dayBefore = diffValue / day;
    var hourBefore = diffValue / hour;
    var minBefore = diffValue / minute;
    if (dayBefore >= 1) {
        var date = new Date(timeStamp*1000);
        result =  (date.getMonth() + 1) + '-' + date.getDate();
    }
    else if (hourBefore >= 1) {
        result = "" + parseInt(hourBefore) + "小时前";
    }
    else if (minBefore >= 1) {
        result = "" + parseInt(minBefore) + "分钟前";
    } else {
        result = "刚刚";
    }
    return result;
}

function renderData(content) {
    var data = content;
    cacheData = data;
    voteId = data.voteId;
    var videoContent = data.content ? data.content : '';
    var screenWidth = $(window).width();
    var videoHeight = screenWidth * defaultHeight / defaultWidth;

    var ua = window.navigator.userAgent;
    var htmlStr = '';
    if (data.videoType == 1) {
        htmlStr += '<header class="header" style="height:' + videoHeight + 'px;">' + '<div class="player clearfix">' + videoContent;
        if (!isIOS(ua)) {
            htmlStr += '<button class="video-button"></button>';
        }
        htmlStr += '</div></header>';
        htmlStr += '<div class="content" style="padding-top: ' + videoHeight+ 'px">';
    } else{
        htmlStr += '<div class="content">';
    }

    Jn.verticalHeight = videoHeight;

    htmlStr += '<div class="video-header">';
    htmlStr += '<h1 class="title">' + data.title + '</h1>';
    htmlStr += '<div class="video-meta clearfix">';

    // 播放次数
    if (data.views) {
        htmlStr += '<span class="date"><em class="play-num"></em>' + data.views + '播放&ensp;</span>';
    }

    // 作者
    htmlStr += '<span class="author ml5">' + data.author + '</span>';
    htmlStr += '</div>';

    // 摘要描述
    if (data.excerpt) {
        htmlStr += '<div class="excerpt">' + data.excerpt + '</div>';
    }
    htmlStr += '</div>';
    var userData = {};
    try {
        userData = Jnapp.jn_login_info();
    } catch (ex) {
    }

    if (typeof userData == 'string') {
        userData = $.parseJSON(userData);
    }

    htmlStr += '<div class="video-question""></div>';

    if (voteId && voteId !== 'undefined') {
        $.getJSON("http://api.15w.com/client/app/jn/v1_4/vote/detail?dataId=" + voteId + "&callback=?", function (res) {
            if (res.code == '10000') {
                var dataQuestion = res.data;
                var questionOptions = dataQuestion.votes;
                var questionExcerpt = dataQuestion.excerpt;
                var result = dataQuestion.results;
                var question = $('.video-question');

                var cacheData = null;
                if (userData.userid && userData.token) {
                    try {
                        cacheData = Jnapp.jn_getData(userData.userid + '_' + voteId);
                    } catch (ex) {

                    }
                }
                var resultArr = [result.A, result.B, result.C, result.D];
                var max = Math.max.apply(null, resultArr);
                var relA = Math.max(1, resultArr[0] / max * 80);
                var relB = Math.max(1, resultArr[1] / max * 80);
                var relC = Math.max(1, resultArr[2] / max * 80);
                var relD = Math.max(1, resultArr[3] / max * 80);

                var htmlQu = '<p class="video-question-title">' + dataQuestion.title + '</p>';
                if (cacheData) {
                    isVote = true;
                    htmlQu += '<a class="video-question-option" style="border: none"  data-id="0" data-elem="A" href="##"><span>A:</span><span class="val">' + questionOptions.A + '</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar"><em class="progress color-a"  style="width:' + relA + '%"></em><em class="num">' + result.A + '</em></div></a>';
                    htmlQu += '<a class="video-question-option" style="border: none"  data-id="1" data-elem="B" href="##"><span>B:</span><span class="val">' + questionOptions.B + '</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar"><em class="progress color-b"  style="width:' + relB + '%"></em><em class="num">' + result.B + '</em></div></a>';
                    htmlQu += '<a class="video-question-option" style="border: none"  data-id="2" data-elem="C" href="##"><span>C:</span><span class="val">' + questionOptions.C + '</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar"><em class="progress color-c"  style="width:' + relC + '%"></em><em class="num">' + result.C + '</em></div></a>';
                    htmlQu += '<a class="video-question-option" style="border: none"  data-id="3" data-elem="D"  href="##"><span>D:</span><span class="val">' + questionOptions.D + '</span> <span class="selected"  style="display: none">(已选择)</span><div class="progress-bar"><em class="progress color-d"  style="width:' + relD + '%"></em><em class="num">' + result.D + '</em></div></a>';
                    htmlQu += '<p>' + questionExcerpt + '</p>';
                } else {
                    htmlQu += '<a class="video-question-option" data-id="0"  data-elem="A"  href="##"><span>A:</span><span class="val">' + questionOptions.A + '</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar" style="display: none"><em class="progress color-a"  style="width:' + relA + '%"></em><em class="num">' + result.A + '</em></div></a>';
                    htmlQu += '<a class="video-question-option" data-id="1"  data-elem="B" href="##"><span>B:</span><span class="val">' + questionOptions.B + '</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar" style="display: none"><em class="progress color-b"  style="width:' + relB + '%"></em><em class="num">' + result.B + '</em></div></a>';
                    htmlQu += '<a class="video-question-option" data-id="2"  data-elem="C"  href="##"><span>C:</span><span class="val">' + questionOptions.C + '</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar" style="display: none"><em class="progress color-c"  style="width:' + relC + '%"></em><em class="num">' + result.C + '</em></div></a>';
                    htmlQu += '<a class="video-question-option" data-id="3"  data-elem="D" href="##"><span>D:</span><span class="val">' + questionOptions.D + '</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar" style="display: none"><em class="progress color-d"  style="width:' + relD + '%"></em><em class="num">' + result.D + '</em></div></a>';
                    htmlQu += '<p>' + questionExcerpt + '</p>';
                }
                question.html(htmlQu);
            }

        });
    }

    // 分享
    //try {
    //    var shareData = Jnapp.jn_getShare();
    //    if (typeof shareData == 'string') {
    //        shareData = $.parseJSON(shareData);
    //        htmlStr += '<div class="excerpt-share"><div class="video-excerpt"><div class="video-excerpt-tip"><img src="data:image/jpeg;charset=utf-8;base64,' + shareData.baseIcon + '" alt="loading..."/><p>' + shareData.title + '</p></div></div>';
    //    }
    //} catch (ex) {
    //}
    htmlStr += '<div class="share-short-issue"><p></p><p>分享给召唤师们</p><p></p></div>'
    htmlStr += '<div class="maintext-share"><a href="#" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /></a><a href="#" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /></a><a href="#" class="maintext-share-qq-space"><img src="images/QQ_2x.png" /></a><a href="#" class="maintext-share-qq"><img src="images/qq_zone.png" /></a><a href="#" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /></a></div></div>';

    if (data.recomendVideos.length > 0) {
        htmlStr += '<section class="list"><h3>视频推荐</h3><ul> ';
        $.each(data.recomendVideos, function (index, item) {
            htmlStr += '<li class="clearFix"><a href="###" class="clearfix list-item" data-type="' + item.articleType + '" data-id="' + item.extra + '"><div class="news-left"><p class="list-title">' + item.title + '</p>';

            if (item.tagColor && item.tagName) {
                htmlStr += '<span class="list-tag" style="color:' + item.tagColor + ';border-Color:' + item.tagColor + ';">' + item.tagName + '</span>';
            }

            if(item.comments){
                htmlStr += '<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;' + item.comments + '</span>';
            }else{
                htmlStr += '<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;0</span>';
            }

            if (item.updateTime) {
                htmlStr += '<span class="list-time">' + getDatediff(item.updateTime) + '</span>';
            }
            //dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

            htmlStr += '</div><div class="news-right clearfix"><img class="fl" src="' + item.thumbnail + '"/></div></a></li>';

        });
        htmlStr += '</ul></section><section class="line"></section></div>';
    }
    $('#detail').html(htmlStr);
}

$(function () {

     $.get('data/video-detail.json', function (res) {
        renderData(res.content);
     });

    // 相关新闻
    $(document).on('click', '.list-item', function (e) {
        e.preventDefault();
        try {
            Jnapp.jn_related($(this).data('type'), $(this).data('id') + "");
        } catch (err) {

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
    var oContent = $('.video-recommend .content');
    $(document).on('click', '.video-button', function (e) {
        e.preventDefault();
        try {
            isHorizontal = !isHorizontal;
            var header = $('.header');
            if (isHorizontal) {
                header.css({'height': $(window).width() + 'px'});
                oContent.css('display', 'none');
                $('body').css({
                    'height': '100%',
                    'overflow': 'hidden'
                });
                Jnapp.jn_setHorizontal(true);
            } else {  // 竖屏
                header.css('height', Jn.verticalHeight + 'px');
                $('body').css({'height': 'auto', 'overflow': 'auto'});
                Jnapp.jn_setHorizontal(false);
            }
        } catch (e) {

        }
    });


    function repaintProgress() {
        var resultArr = [];
        $.each($('.num'), function (index, elem) {
            resultArr.push(parseInt($(elem).text()));
        });
        var max = Math.max.apply(null, resultArr);
        var percent = [];
        percent.push(Math.max(1, resultArr[0] / max * 80));
        percent.push(Math.max(1, resultArr[1] / max * 80));
        percent.push(Math.max(1, resultArr[2] / max * 80));
        percent.push(Math.max(1, resultArr[3] / max * 80));

        var progress = $('.progress');
        $.each(progress, function (index, item) {
            $(item).css('width', percent[index] + '%');
        });
    }


    $(document).on('click', '.video-question-option', function (e) {
        e.preventDefault();

        if (isVote) {
            return;
        }
        var oQuestion = $('.video-question');
        var liId = $(this).data('id');
        var optionValue = parseInt($(this).find('.num').text());
        var key = $(this).data('elem');
        var val = $(this).find('span.val').text();

        //验证等录
        try {
            var userData = Jnapp.jn_login_info();
            if (typeof userData == 'string') {
                userData = $.parseJSON(userData);
            }
            var uId = userData.userid;
            var token = userData.token;

            if (!uId || !token) {
                Jnapp.jn_login();
            } else {
                var data = {
                    'dataId': voteId,
                    'uid': uId,
                    'token': token,
                    'sign': key
                };

                $(this).find('.num').text(optionValue + 1);
                repaintProgress();

                oQuestion.find('.video-question-option').css('border-color','transparent');
                oQuestion.find('.progress-bar').show();
                $(this).find('.selected').show();
                isVote = true;
                var param = 'dataId=' + voteId + '&uid=' + uId + '&token=' + token + '&sign=' + key + '&t=' + new Date().getTime() + '&callback=?';
                $.getJSON('http://api.15w.com/client/app/jn/v1_4/vote/vote?' + param,function (res) {
                    if (res.code == '10000') {
                        try {
                            Jnapp.jn_setData(uId + '_' + voteId, optionValue + '');
                            Jnapp.jn_comment(cacheData.changyanSid, '我选 ' + key + ' : ' + val + ', 求中奖');
                        } catch (ex) {
                        }
                    } else{
                    }
                });
            }
        } catch (ex) {
            window.alert('请下载电竞头条客户端进行投票!');
        }

    });
});