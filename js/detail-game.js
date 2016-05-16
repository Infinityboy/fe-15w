'use strict';

window.Jn = {};
var cacheData = null;

Jn.setData = function (data) {
    if (data.key == 'videoInitDetail') {
        renderData(data.content);
    }
};

function renderData(data) {
    cacheData = data;
    var htmlStr = '<header><section class="header-scores">';
    htmlStr += '<img class="header-scores-logo1eft" src="' + data.teamA.logo + '"/>';
    htmlStr += '<div><span class="header-scores-left"><b>' + data.teamA.score + '</b></span>';
    htmlStr += '<span class="header-scores-midele"><b>:</b></span>';
    htmlStr += '<span class="header-scores-right"><b>' + data.teamB.score + '</b></span></div> ';
    htmlStr += '<img class="header-scores-logoright" src="' + data.teamB.logo + '"/> ';
    htmlStr += '</section> <section class="header-teams"> ';
    htmlStr += '<span class="header-teams-left">' + data.teamA.name + '</span> ';
    htmlStr += '<div class="header-teams-middle"><span>' + data.gameTime + '</span></div> ';
    htmlStr += '<span class="header-teams-right">' + data.teamB.name + '</span> </section> <section class="ProgressBar clearFix"> ';
    htmlStr += '<div class="ProgressBar-leftbox"><div class="ProgressBar-left"></div></div> <div class="ProgressBar-tag">';
    htmlStr += '<img src="images/matchdetail_image_redbule.png"/></div>';
    htmlStr += '<div class="ProgressBar-rightbox"><div class="ProgressBar-right"></div></div> </section>';
    htmlStr += '<section class="supporters"> <img class="supporters-leftlogo" ';
    htmlStr += 'src="images/matchdetail_ic_support.png"/> ';
    htmlStr += '<p class="supporters-leftNumber supp"id="supporters-leftNumber">' + data.teamA.support_numbber + '</p>';
    htmlStr += '<p class="supporters-gameintro">' + data.title + '</p> ';
    htmlStr += '<p class="supporters-rightNumber supp"id="supporters-rightNumber">' + data.teamB.support_numbber + '</p> ';
    htmlStr += '<img class="supporters-rightlogo" src="images/matchdetail_ic_support.png"/> </section> ';
    htmlStr += '<section class="header-bottomline"></section> </header>';


    //图文直播
    if (data.relateArticle.length > 0) {
        htmlStr += '<section class="live-byword"> <h2>图文直播</h2> ';
        htmlStr += '<section class="live-byword-listbox"> <ul>';
        $.each(data.relateArticle, function (index, item) {
            htmlStr += '<li> <div class="innerbox"><div class="live-byword-list .clearFix"> ';
            htmlStr += '<a href="" class="live-byword-listimg"><img src="' + item.avatar + '"/> </a>';
            htmlStr += '<div class="fl live-byword-list-games" > ';
            htmlStr += '<p class="live-byword-list-name">' + item.author + '</p> ';
            htmlStr += '<p class="live-byword-list-time">' + item.round + '<span>' + '&nbsp;' + '' + item.time + '</span></p></div></div> ';
            htmlStr += '<div class="live-byword-list-words"> ';
            htmlStr += '<p>' + item.content + '</p>';

            var itemImgs = data.relateArticle[index];
            if (itemImgs.images.length > 0) {
                htmlStr += '<div class="clearFix live-byword-list-words-images">';
                $.each(itemImgs.images, function (index, item) {
                    htmlStr += '<img class="fl" src="' + item + '"/>';
                });
                htmlStr += '</div> ';
            }
            htmlStr += '</div></div></li>';
        });
        htmlStr += '</ul> </section>';
        htmlStr += '</section> <section class="header-bottomline2"></section>';
    }

    //比赛视频
    if (data.relateVideos.length > 0) {
        htmlStr += '<section class="gamelist"><h2>比赛视频</h2> <ul> ';

        $.each(data.relateVideos, function (index, item) {
            htmlStr += '<li class="clearFix video-recommend" data-type="'+item.articleType+'" data-id="'+item.extra+'"> <img class="fl" src="' + item.thumbnail + '"/>';
            htmlStr += ' <div class="fl gamelist-into"> <p class="gamelist-into-title">' + item.title + '</p> ';
            htmlStr += '<p class="gamelist-into-text">' + item.excerpt + '</p></div> ';
            htmlStr += '<span>' + item.comments + '</span><a>' + item.tagName + '</a></li>';
        });

        htmlStr += '</ul> </section><section class="header-bottomline2"></section> <section class="gamevedio"> ';
        htmlStr += '<h2>比赛视频</h2> <img src="images/gamevedio.png">';
        htmlStr += ' <p>LOL春季赛常规赛RNG VS Snake 第三场直播</p></section> ';
        htmlStr += '<section class="header-bottomline2"></section>';
    }

    //相关新闻
    if (data.recomendVideos.length > 0) {
        htmlStr += '<section class="gamenews"> <h2>相关新闻</h2><ul>';
        $.each(data.recomendVideos, function (index, item) {
            htmlStr += '<li class="clearFix related-news" data-type="'+item.articleType+'" data-id="'+item.extra+'"><div class="relanews">';
            htmlStr += '<img class="fl" src="' + item.thumbnail + '"/>';
            htmlStr += '<P class="gamenews-into-title">' + item.title + '</P>';
            htmlStr += '<p class="gamenews-into-text">' + item.excerpt + '</p>';
            htmlStr += '</div> <span>' + item.comments + '</span></div> </li> ';
        });
        htmlStr += ' </ul></section>';
    }

    //比赛数据
    if (data.gameContent.length > 0) {
        htmlStr += '<section class="header-bottomline2"></section><section class="game-data clearFix">';
        htmlStr += '<h2>数据</h2>';
        htmlStr += '<div  class="clearFix" id="roundlist">';

        var len = data.gameContent.length;
        var screen = document.documentElement.clientWidth;
        var itemWidth = screen / len;

        $.each(data.gameContent, function (index, item) {
            htmlStr += '<div class="roundspan3" style="width:' + itemWidth + 'px" >' + item.title + '</div>';

        });

        htmlStr += '</div>';
        //$('#roundlist span').css('background','red');

        $.each(data.gameContent, function (index, item) {
            htmlStr += '<div class="data-details" style="display:none;"> ' +
                '<section class="gamedata-teams"> <img class="gamedata-teams-logo1eft" ' +
                'src="images/game-logo1.png"/> ' +
                '<p class="gamedata-teams-duration">' + data.gameContent[index].time + '</p> ' +
                '<img class="gamedata-teams-logoright" src="images/game-logo2.png"/></section> ' +
                '<section class="gamedata-select clearFix"> <div class="fl clearFix">';

            var gamecontentindex = data.gameContent[index].dataList.list;
            $.each(gamecontentindex[0].fieldData[0], function (index, item) {
                htmlStr += '<img class="gamedata-select-logo1eft" src="' + item + '"/>';
            });

            htmlStr += '</div> <p class="gamedata-select-word">' + gamecontentindex[0].fieldName + '</p> <div class="fr clearFix">';
            $.each(gamecontentindex[0].fieldData[1], function (index, item) {
                htmlStr += '<img class="gamedata-select-logoright" src="' + item + '"/>';
            });
            htmlStr += ' </div></section> ';
            htmlStr += '<section class="conpares clearFix">' +
                ' <div class="compares-bardetails clearFix"><div class="earnmoney">经济</div>' +
                ' <div class="compares-barleft"> ' +
                '<span class="compares-bardetails-leftnum">' + gamecontentindex[1].fieldData[0] + 'k</span> </div> ' +
                '<div class="compares-barmiddle"> ' +
                '<img src="images/matchdetail_image_redbule.png"/> </div> ' +
                '<div class="compares-barright"> ' +
                '<span class="compares-bardetails-rightnum">' + gamecontentindex[1].fieldData[1] + 'k</span> </div> </div></section>';
            htmlStr += '</div>';

        });
        htmlStr += '</section>';
    }
    htmlStr += '<section class="header-bottomline2"></section> ';

    $('#box').html(htmlStr);

    //点赞
    $('.supporters').on('click', 'img', function (e) {
        if (getCookie('num')) {
            return;
        }
        var thisindex = parseInt($(this).index());
        if (thisindex == 0) {
            $(this).attr('src', 'images/matchdetail_ic_support_red.png');
            var oldValue = parseInt($('#supporters-leftNumber').html());
            oldValue++;
            $('#supporters-leftNumber').html(oldValue);
            try {
                Jnapp.agree(7,cacheData.dataId,cacheData.teamA.teamId);
            } catch (e){

            }
            setCookie('num', '1', 1);
        } else {
            $(this).attr('src', 'images/matchdetail_ic_support_blue.png');
            var oldValue = parseInt($('#supporters-rightNumber').html());
            oldValue++;
            $('#supporters-rightNumber').html(oldValue);
            setCookie('num', '1', 1);

            try {
                Jnapp.agree(7,cacheData.dataId,cacheData.teamB.teamId);
            } catch (e){

            }
        }

        e.preventDefault();

    });


    //header得分比例

    var iScoreA = $(".header-scores-left b").text();
    var iScoreB = $(".header-scores-right b").text();
    var iScoretot = parseInt(iScoreA) + parseInt(iScoreB) * 3;
    var iScaleA = iScoreA / iScoretot;
    var iScaleB = iScoreB / iScoretot;
    var oBarlength = parseInt($(".ProgressBar").width()) - parseInt($(".ProgressBar-tag").css("width"));
    var oProgressBarleft = $(".ProgressBar-left");
    var oProgressBarright = $(".ProgressBar-right");

    oProgressBarleft.css("width", iScaleA * oBarlength);
    oProgressBarright.css("width", iScaleB * oBarlength);

    //比赛数据比例  设置页面加载默认值

    var iMoneyA = $(".compares-bardetails-leftnum").eq(0).text();
    var iMoneyB = $(".compares-bardetails-rightnum").eq(0).text();
    var iMoneytot = parseFloat(iMoneyA) + parseFloat(iMoneyB);

    var iMoneyscaleA = parseFloat(iMoneyA) / iMoneytot;
    var iMoneyscaleB = parseFloat(iMoneyB) / iMoneytot;
    var oMoneylength = parseInt($('.compares-bardetails').css('width'));
    var oMoneyleft = $(".compares-barleft").eq(0);
    var oRightright = $(".compares-barright").eq(0);

    oMoneyleft.css("width", iMoneyscaleA * oMoneylength);
    oRightright.css("width", iMoneyscaleB * oMoneylength);

    $('.roundspan3').eq(0).addClass('on');
    $('.data-details').eq(0).show();

    //图文直播
    $('.live-byword-listbox ul').on('click', 'li', function (e) {
        console.log($(this).index());
        e.preventDefault();

    });
    //推荐视频
    $('.gamelist ul').on('click', 'li', function (e) {
        console.log($(this).index());
        e.preventDefault();

    });
    //比赛视频
    $('document').on('click', '.gamevedio', function (e) {
        console.log(110);
        e.preventDefault();

    });
    //相关新闻
    $('.gamenews ul').on('click', 'li', function (e) {
        console.log($(this).index());
        e.preventDefault();
    });
}
window.onload = window.onresize = function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';

    $(function () {
        $.get('data/game-detail.json', function (res) {
            if (res.code == 10000) {
                renderData(res.data);
            }
        });
    });

    $('body').on('click', '#roundlist div', function (e) {
        $('#roundlist div').removeClass('on');
        $(this).addClass('on');
        $('.data-details').hide();
        $('.data-details').eq($(this).index()).show();

        var iMoneyA = $(".compares-bardetails-leftnum").eq($(this).index()).text();
        var iMoneyB = $(".compares-bardetails-rightnum").eq($(this).index()).text();
        var iMoneytot = parseFloat(iMoneyA) + parseFloat(iMoneyB);

        var iMoneyscaleA = parseFloat(iMoneyA) / iMoneytot;
        var iMoneyscaleB = parseFloat(iMoneyB) / iMoneytot;
        var oMoneylength = parseInt($('.compares-bardetails').css('width'));
        var oMoneyleft = $(".compares-barleft").eq($(this).index());
        var oRightright = $(".compares-barright").eq($(this).index());

        oMoneyleft.css("width", iMoneyscaleA * oMoneylength * 0.27);
        oRightright.css("width", iMoneyscaleB * oMoneylength * 0.27);


        e.preventDefault();
    });


    $(document).on('click','.video-recommend', function(e){
        e.preventDefault();
        try{
            Jnapp.jn_related($(this).data('type'), $(this).data('id'));
        }catch(e){

        }
        console.log($(this).data('type'));
        console.log($(this).data('id'));

    });

    $(document).on('click','.related-news', function(e){
        e.preventDefault();
        try{
            Jnapp.jn_related($(this).data('type'), $(this).data('id'));
        }catch(e){

        }
        console.log($(this).data('type'));
        console.log($(this).data('id'));

    });


}