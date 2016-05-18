'use strict';

window.Jn = {};
var cacheData = null;

Jn.setData = function (data) {
    if (data.key == 'gameInitDetail') {
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

    var time = '';
    if (data.gameTime) {
        var date = new Date(data.gameTime);
        time = date.getHours() + ' : ' + date.getMinutes();
    }
    htmlStr += '<div class="header-teams-middle"><span>' + time + '</span></div> ';
    htmlStr += '<span class="header-teams-right">' + data.teamB.name + '</span> </section> <section class="ProgressBar clearFix"> ';

    // 单元长度为15px
    var leftItemLength = data.teamA.score * 50;
    var rightItemLength = Math.max(data.teamB.score * 50, 5);

    htmlStr += '<div class="ProgressBar-leftbox"><div class="ProgressBar-left" style="width:' + leftItemLength + 'px"></div></div>';
    htmlStr += '<div class="ProgressBar-rightbox"><div class="ProgressBar-right" style="width:' + rightItemLength + 'px"></div></div> </section>';
    htmlStr += '<section class="supporters"><div class="sp" data-id="'+data.dataId+'" data-team="'+data.teamA.teamId+'"><img class="supporters-leftlogo" src="images/matchdetail_ic_support.png"/>';

    htmlStr += '<span class="supporters-leftNumber supp" id="supporters-leftNumber"> ' + data.teamA.support_numbber + '</span></div>';
    htmlStr += '<span class="supporters-gameintro">' + data.title + '</span>';
    htmlStr += '<div class="sp" data-id="'+data.dataId+'" data-team="'+data.teamB.teamId+'"><span class="supporters-rightNumber supp"id="supporters-rightNumber">' + data.teamB.support_numbber + '</span> ';
    htmlStr += '<img class="supporters-rightlogo" src="images/matchdetail_ic_support.png"/></div></section> ';
    htmlStr += '<section class="line"></section></header>';


    //图文直播
    if (data.relateArticle.length > 0) {
        htmlStr += '<section class="live-byword"> <h2>图文直播</h2> ';
        htmlStr += '<section class="live-byword-listbox"> <ul>';
        $.each(data.relateArticle, function (index, item) {
            htmlStr += '<li> <div class="innerbox"><div class="live-byword-list clearfix"> ';
            htmlStr += '<a href="##" class="live-byword-listimg"><img src="' + item.avatar + '"/> </a>';
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
        htmlStr += '</section><section class="line"></section>';
    }

    //相关视频
    if (data.relateVideos.length > 0) {
        htmlStr += '<section class="list"><h3>比赛视频</h3> <ul> ';

        $.each(data.relateVideos, function (index, item) {
            htmlStr += '<li class="clearfix"><a href="##" class="list-item" data-type="' + item.articleType + '" data-id="' + item.extra + '"><img class="fl" src="' + item.thumbnail + '"/>';
            htmlStr += '<p class="list-title">' + item.title + '</p> ';
            htmlStr += '<span class="list-tag" style="color:' + item.tagColor + ';border-color:' + item.tagColor + ';">' + item.tagName + '</span>';

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

    if (data.originSrc && data.cover) {
        htmlStr += '<section class="gamevedio"> ';
        htmlStr += '<h2>比赛视频</h2>';
        htmlStr += '<div class="game-video-play"><div class="play-icon" data-url="'+data.originSrc+'"><img src="images/play_icon.png" alt=""><span>直播中</span></div><img src="'+ data.cover +'"><p>' + data.title +'</p></section> ';
        htmlStr += '</section><section class="line"></section></div>';
    }

    //推荐视频
    if (data.recomendVideos.length > 0) {
        htmlStr += '<section class="list"> <h3>相关新闻</h3><ul>';
        $.each(data.recomendVideos, function (index, item) {
            htmlStr += '<li class="clearfix"><a href="##" class="list-item" data-type="' + item.articleType + '" data-id="' + item.extra + '">';
            htmlStr += '<img class="fl" src="' + item.thumbnail + '"/>';
            htmlStr += '<p class="list-title">' + item.title + '</p>';
            htmlStr += '<span class="list-tag" style="color:' + item.tagColor + ';border-color:' + item.tagColor + ';">' + item.tagName + '</span>';

            var date = new Date();
            var dateStr;
            if (item.updateTime) {
                date = new Date(item.updateTime);
            }
            dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()

            htmlStr += '<span class="list-time">' + dateStr + '</span>';
            htmlStr += '</a></li> ';
        });
        htmlStr += ' </ul></section>';
    }

    //比赛数据
    if (data.gameContent.length > 0) {
        htmlStr += '<section class="line"></section><section class="game-data clearFix">';
        htmlStr += '<h2>数据</h2>';
        htmlStr += '<div  class="clearFix" id="roundlist">';

        var len = data.gameContent.length;
        var screen = document.documentElement.clientWidth;
        var itemWidth = screen / len;

        $.each(data.gameContent, function (index, item) {
            if (index == 0) {
                htmlStr += '<a href="##" class="roundspan3 on" data-id="' + index + '" style="width:' + itemWidth + 'px" >' + item.title + '</a>';
            } else {
                htmlStr += '<a href="##" class="roundspan3" data-id="' + index + '" style="width:' + itemWidth + 'px" >' + item.title + '</a>';
            }
        });

        htmlStr += '</div>';

        htmlStr += '<div class="data-details">';

        $.each(data.gameContent, function (index, item) {
            if (index == 0) {
                htmlStr += '<div class="data-content-item">';
            } else {
                htmlStr += '<div class="data-content-item" style="display: none">';
            }
            htmlStr += '<section class="gamedata-teams"><img class="gamedata-teams-logo1eft" ' + 'src="' + data.teamA.logo + '"/> ' +
                '<p class="gamedata-teams-duration">' + data.gameContent[index].time + '</p> ' +
                '<img class="gamedata-teams-logoright" src="' + data.teamB.logo + '"/></section> ';

            var itemList = item.dataList.list;

            $.each(itemList, function (index, subItem) {
                if (subItem.listType == 0) {
                    htmlStr += '<section class="game-data-select">';

                    htmlStr += '<div class="img-left">';
                    var leftArr = subItem.fieldData[0];
                    $.each(leftArr, function (index, imgItem) {
                        htmlStr += '<img class="game-data-select-logo1eft" src="' + imgItem + '"/>';
                    });
                    htmlStr += '</div>';

                    htmlStr += '<p class="game-data-select-word">' + itemList[0].fieldName + '</p>';

                    var rightArr = subItem.fieldData[1];
                    htmlStr += '<div class="img-right">';
                    $.each(rightArr, function (index, imgItem) {
                        htmlStr += '<img class="game-data-select-logo1eft" src="' + imgItem + '"/>';
                    });
                    htmlStr += '</div>';
                    htmlStr += ' </section>';

                } else if (subItem.listType == 1) {
                    // 计算单元长度
                    var leftBarLength = parseInt(subItem.fieldData[0]);
                    var rightBarLength = parseInt(subItem.fieldData[1]);

                    var leftBarWidth, rightBarWidth;
                    if (leftBarLength + rightBarLength > 100) {
                        leftBarWidth = leftBarLength * 100 / (leftBarLength + rightBarLength);
                        rightBarWidth = rightBarLength * 100 / (leftBarLength + rightBarLength)
                    } else {
                        leftBarWidth = leftBarLength;
                        rightBarWidth = rightBarLength
                    }

                    htmlStr += '<section class="conpares clearfix">';
                    htmlStr += '<span>'+subItem.fieldName+'</span>';
                    htmlStr += '<div class="bar-inner">';
                    htmlStr += '<div class="left-bar">'+subItem.fieldData[0]+'<span class="bar" style="width:' + leftBarWidth + 'px"></span></div>';
                    htmlStr += '<div class="right-bar"><span class="bar" style="width:' + rightBarWidth + 'px"></span>' + subItem.fieldData[1] + '</div>';
                    htmlStr += '</div>';
                    htmlStr += '</section>';
                }
            });

            htmlStr += '</div>';

        });
        htmlStr += '</div></section>';
    }
    htmlStr += '<section class="line"></section> ';
    $('#box').html(htmlStr);

}

$(function () {
    //$.get('data/game-detail.json', function (res) {
    //    if (res.code == 10000) {
    //        renderData(res.data);
    //    }
    //});

    $(document).on('click', '.list-item', function (e) {
        e.preventDefault();
        try {
            Jnapp.jn_related($(this).data('type'), $(this).data('id') + "");
        } catch (e) {

        }
    });

    //left 点赞支持
    $(document).on('click', '.supporters-leftlogo, .supporters-leftNumber', function () {
        var elem = $('#supporters-leftNumber');
        var number = parseInt(elem.html());
        var parent = $(this).closest('.sp');
        var dataId = parent.data('id');
        var teamId = parent.data('team');
        //if (getCookie("sp-" + cacheData.dataId)) {
        //    return;
        //}
        try {
            number++;
            elem.html(number);
            //setCookie("sp-" + cacheData.dataId, number, 365);
            Jnapp.jn_agree(7, dataId + "", teamId + "");
        } catch (e) {

        }
    });

    // right 点赞支持
    $(document).on('click', '.supporters-rightlogo, .supporters-rightNumber', function () {
        var elem = $('#supporters-rightNumber');
        var parent = $(this).closest('.sp');
        var dataId = parent.data('id');
        var teamId = parent.data('team');

        var number = parseInt(elem.html());
        //if (getCookie("sp-" + cacheData.dataId)) {
        //    return;
        //}
        try {
            number++;
            elem.html(number);
            //setCookie("sp-" + cacheData.dataId, number, 365);
            Jnapp.jn_agree(7, dataId + "", teamId + "");
        } catch (e) {
        }
    });


    $(document).on('click', 'a.roundspan3', function (e) {
        e.preventDefault();

        if (!$(this).hasClass('on')) {
            var index = $(this).data('id');
            $(this).addClass('on').siblings('a').removeClass('on');
            $('.data-details > .data-content-item').eq(index).show().siblings().hide();
        }
    });

    // 直播跳转
    $(document).on('click', '.play-icon', function(){
       try{
           Jnapp.jn_related(5, $(this).data('url'));
       } catch(e){

       }
    });
});