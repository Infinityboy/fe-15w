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
        htmlStr = '<header>' + '<div class="player clearfix" style="height:' + videoHeight + 'px;">' + videoContent;
        if (!isIOS(ua)) {
            htmlStr += '<button class="video-button" style="top: ' + (videoHeight - 40) + 'px"></button>';
        }
        htmlStr += '</div></header>';
    }

    htmlStr += '<div class="content">';
    htmlStr += '<div class="video-header">';
    htmlStr += '<h1 class="title">' + data.title + '</h1>';
    htmlStr += '<div class="video-meta clearfix">';

    // 播放次数
    if (data.views) {
        htmlStr += '<span class="date"><em class="play-num"></em>播放: ' + data.views + '</span>';
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
                    htmlQu += '<a class="video-question-option" style="border: none" data-id="0" href="##"><span>A:</span>' + questionOptions.A + '<div class="progress-bar"><em class="progress color-a"  style="width:' + relA + '%"></em><em class="num">' + result.A + '</em></div></a>';
                    htmlQu += '<a class="video-question-option" style="border: none"  data-id="1" href="##"><span>B:</span>' + questionOptions.B + '<div class="progress-bar"><em class="progress color-b"  style="width:' + relB + '%"></em><em class="num">' + result.B + '</em></div></a>';
                    htmlQu += '<a class="video-question-option" style="border: none"  data-id="2" href="##"><span>C:</span>' + questionOptions.C + '<div class="progress-bar"><em class="progress color-c"  style="width:' + relC + '%"></em><em class="num">' + result.C + '</em></div></a>';
                    htmlQu += '<a class="video-question-option" style="border: none"  data-id="3" href="##"><span>D:</span>' + questionOptions.D + '<div class="progress-bar"><em class="progress color-d"  style="width:' + relD + '%"></em><em class="num">' + result.D + '</em></div></a>';
                    htmlQu += '<p>' + questionExcerpt + '</p>';
                } else {
                    htmlQu += '<a class="video-question-option" data-id="0" href="##"><span>A:</span>' + questionOptions.A + '<div class="progress-bar" style="display: none"><em class="progress color-a"  style="width:' + relA + '%"></em><em class="num">' + result.A + '</em></div></a>';
                    htmlQu += '<a class="video-question-option" data-id="1" href="##"><span>B:</span>' + questionOptions.B + '<div class="progress-bar" style="display: none"><em class="progress color-b"  style="width:' + relB + '%"></em><em class="num">' + result.B + '</em></div></a>';
                    htmlQu += '<a class="video-question-option" data-id="2" href="##"><span>C:</span>' + questionOptions.C + '<div class="progress-bar" style="display: none"><em class="progress color-c"  style="width:' + relC + '%"></em><em class="num">' + result.C + '</em></div></a>';
                    htmlQu += '<a class="video-question-option" data-id="3" href="##"><span>D:</span>' + questionOptions.D + '<div class="progress-bar" style="display: none"><em class="progress color-d"  style="width:' + relD + '%"></em><em class="num">' + result.D + '</em></div></a>';
                    htmlQu += '<p>' + questionExcerpt + '</p>';
                    htmlQu += '<p>' + questionExcerpt + '</p>';
                }
                question.html(htmlQu);
            }

        });
    }

    // 分享
    try {
        var shareData = Jnapp.jn_getShare();
        if (typeof shareData == 'string') {
            shareData = $.parseJSON(shareData);
            htmlStr += '<div class="excerpt-share"><div class="video-excerpt"><div class="video-excerpt-tip"><img src="data:image/png;charset=utf-8;base64,' + shareData.baseIcon + '" alt="loading..."/><p>' + shareData.title + '</p></div></div>';
        }
    } catch (ex) {
        htmlStr += '<div class="excerpt-share"><div class="video-excerpt"><div class="video-excerpt-tip"><img src="../images/timo_2xpng" alt="loading..."/><p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p></div></div>';
    }

    htmlStr += '<div class="maintext-share"><a href="" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /><p class="sharename">微信</p></a><a href="" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /><p class="sharename">朋友圈</p></a><a href="" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /><p class="sharename">微博</p></a><a href="" class="maintext-share-qq"><img src="images/空间_2x.png" /><p class="sharename">空间</p></a><a href="" class="maintext-share-qq-space"><img src="images/QQ_2x.png" /><p class="sharename">QQ</p></a></div></div>';

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
    if (data.videoType == 1) {
        $('iframe').css({
            height: videoHeight + 'px'
        });
    }

    try {
        // Android 强制竖屏
        Jnapp.jn_setHorizontal(false);
    } catch (ex) {

    }
}

$(function () {
    // $.get('data/video-detail.json', function (res) {
    //     renderData(res.content);
    // });

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
    var screenWidth = $(window).width();
    var height = screenWidth * defaultHeight / defaultWidth;
    var oContent = $('.video-recommend .content');
    $(document).on('click', '.video-button', function (e) {
        e.preventDefault();
        try {
            isHorizontal = !isHorizontal;
            var iframe = $('.player iframe');
            if (isHorizontal) {
                iframe.css('height', '100%');
                player.css('height', screenWidth + 'px');
                oContent.css('display', 'none');
                $('.video-button').css('top', (screenWidth - 40) + 'px');
                $('body').css({
                    'height': '100%',
                    'overflow': 'hidden'
                });
                Jnapp.jn_setHorizontal(true);
            } else {  // 竖屏
                iframe = $('header .player iframe');
                iframe.css('height', height + 'px');
                player.css('height', height + 'px');
                $('body').css({'height': 'auto', 'overflow': 'hidden'});
                $('.video-button').css('top', (height - 40) + 'px');
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
        var selectVal = $(this).text();
        var oQuestion = $('.video-question');
        var liId = $(this).data('id');
        var oAnswerId = $('.video-answer-option').children("[data-id='" + liId + "']");
        var optionValue = parseInt($(this).find('.num').text());

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
                    'sign': optionValue
                };
                $.post('http://api.15w.com/client/app/jn/v1_4/vote/vote', data);

                $(this).find('.num').text(optionValue + 1);
                repaintProgress();
                oQuestion.find('.progress-bar').show();
                isVote = true;
                try {
                    Jnapp.jn_setData(uId + '_' + voteId, optionValue);
                    // 设置本地缓存
                    oQuestion.find('.progress-bar').show();
                    oAnswerId.show();
                    Jnapp.jn_comment(cacheData.content.changyanSid, '我选 ' + selectVal + ', 求中奖');
                } catch (ex) {

                }
            }
        } catch (ex) {
            window.alert('请下载电竞头条客户端经行投票!');
        }

    });
});
