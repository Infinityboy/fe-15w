'use strict';

var cacheData = null;
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

    //选项卡
    htmlStr += '</div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><div class="border"><a href="##">直播</a></div></li><li class="outList " data-id="1"><div class="border"><a href="##">新闻</a></div></li><li class="outList " data-id="2"><div class="border"><a href="##">视频</div></a></li></ul><div class="outContainer ">';

    //比赛数据

    if (data.gameContent.length > 0) {
        htmlStr += '<div class="live" data-id="0">';
        htmlStr += '<section class="game-data clearFix">';
        htmlStr += '<div  class="clearFix" id="roundlist">';
        var len = data.gameContent.length;
        var screen = document.documentElement.clientWidth;
        var itemWidth = screen / len;

        $.each(data.gameContent, function (index, item) {
            if (index === 0) {
                htmlStr += '<a href="##" class="roundspan3 on" data-id="' + index + '" style="width:' + itemWidth + 'px" >' + item.title + '</a>';
            } else {
                htmlStr += '<a href="##" class="roundspan3" data-id="' + index + '" style="width:' + itemWidth + 'px" >' + item.title + '</a>';
            }
        });

        htmlStr += '</div>';
        htmlStr += '<div class="data-details">';

        $.each(data.gameContent, function (index, item) {
            if (index === 0) {
                htmlStr += '<div class="data-content-item">';
            } else {
                htmlStr += '<div class="data-content-item" style="display: none">';
            }
            var itemList = item.dataList.list;

            $.each(itemList, function (index, subItem) {
                if (subItem.listType === 0) {
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

                } else if (subItem.listType === 1) {
                    // 计算单元长度
                    var leftBarLength = parseInt(subItem.fieldData[0]);
                    var rightBarLength = parseInt(subItem.fieldData[1]);

                    var leftBarWidth, rightBarWidth;
                    if (leftBarLength + rightBarLength > 100) {
                        leftBarWidth = leftBarLength * 100 / (leftBarLength + rightBarLength);
                        rightBarWidth = rightBarLength * 100 / (leftBarLength + rightBarLength);
                    } else {
                        leftBarWidth = leftBarLength;
                        rightBarWidth = rightBarLength;
                    }
                }
            });

            htmlStr += '</div>';

        });
        htmlStr += '</div></section>';
    }else{
        htmlStr += '<div class="live" data-id="0" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;display:block;background-color: #ffffff;">';
    }

    //图文直播
    if (data.relateArticle.length > 0) {
        htmlStr += '<section class="live-byword-listbox selected"> <ul>';
        $.each(data.relateArticle, function (index, item) {
            htmlStr += '<li> <div class="innerbox"><div class="live-byword-list clearfix"> ';
            htmlStr += '<a href="##" class="live-byword-listimg"><img src="' + item.avatar + '"/> </a>';
            htmlStr += '<div class="fl live-byword-list-games"> ';
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
        htmlStr += '</section></div>';
    }else{
        if(data.gameContent.length > 0){
            htmlStr += '<section class="live-byword-listbox selected"><p style="text-align: center">当前比赛场次还没有图文直播哦!</p></section></div>';
        }else{
            htmlStr += '<section class="live-byword-listbox selected"><p style="text-align: center;">当前比赛场次还没有图文直播哦!</p></section></div>';
        }
    }

    //相关新闻
    if (data.recomendVideos.length > 0) {
        htmlStr += '<div class="news" data-id="1">';
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
        htmlStr += ' </ul></section></div>';
    }
    else{
        htmlStr += '<div class="news" data-id="1" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;display:none;background-color: #ffffff;">暂无新闻数据</div>';
    }


    //比赛视频
    if (data.originSrc && data.cover) {
        if (data.relateVideos.length > 0) {
            htmlStr += '<div class="video" data-id="2"> ';
            htmlStr += '<section class="list"> <ul> ';

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
        }
        //htmlStr += '<section class="gamevedio" data-id="2"> ';
        //htmlStr += '<h2>比赛视频</h2>';
        //htmlStr += '<div class="game-video-play"><div class="play-icon" data-url="' + data.originSrc + '"><img src="images/play_icon.png" alt=""><span>直播中</span></div><img src="' + data.cover + '"><p>' + data.title + '</p></section> ';
        //htmlStr += '</section></div></div></div>';
    }else{
        htmlStr += '<div class="video" data-id="2" style="height: 10rem;font-size: 0.9rem; text-align: center;line-height:10rem;display:none;background-color: #ffffff;">暂无视频数据</div>';
    }

    $('#box').html(htmlStr);
}

$(function () {
    // $.get('data/game-detail.json', function (res) {
    //    if (res.code == 10000) {
    //        renderData(res.data);
    //    }
    // });

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
            Jn.setCookie("sp-" + dataId, number, 365);
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
            Jn.setCookie("sp-" + dataId, number, 365);
            Jnapp.jn_agree(7, dataId, teamId);
        } catch (e) {
        }
    });


    // tab切换 切换外层选项卡
    $(document).on('click', '.outer .outList', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('selected')) {
            var cls = $(this).data('id');
            var oContainer = $('.outContainer');
            $(this).addClass('selected').siblings().removeClass('selected');
            if(oContainer.children().eq(cls)){
                oContainer.children().eq(cls).show().siblings().hide();
            }
            //else{
            //    oContainer.html('<div class="empty" style="height: 200rem;text-align: center;" data-id="2">暂无数据</div>');
            //    $('#box').html(htmlStr);
            //    console.log($('.empty').data('id'));
            //    oContainer.children().eq(cls).show().siblings().hide();
            //}
        }
    });
    //tab切换 切换内层选项卡

    $(document).on('click', 'a.roundspan3', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('on')) {
            var index = $(this).data('id');
            $(this).addClass('on').siblings('a').removeClass('on');
            $('.data-details > .data-content-item').eq(index).show().siblings().hide();
        }
    });

    // 直播跳转
    $(document).on('click', '.play-icon', function () {
        try {
            Jnapp.jn_related(5, $(this).data('url'));
        } catch (e) {

        }
    });
});