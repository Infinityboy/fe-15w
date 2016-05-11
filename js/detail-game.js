
'use strict';
window.onload = window.onresize =function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';


    $(function () {
        $.get('data/game-detail.json', function (res) {
            if (res.code == 10000) {
                var data = res.data;
                var htmlStr = '<header><section class="header-scores">';
                htmlStr += '<img class="header-scores-logo1eft" src="' + data.teamA.logo + '"/>';
                htmlStr += '<div><span class="header-scores-left"><b>' + data.teamA.score + '</b></span>';
                htmlStr += '<span class="header-scores-midele"><b>:</b></span>';
                htmlStr += '<span class="header-scores-right"><b>' + data.teamB.score + '</b></span></div> ';
                htmlStr += '<img class="header-scores-logoright" src="' + data.teamB.logo + '"/> ';
                htmlStr += '</section> <section class="header-teams"> ';
                htmlStr += '<span class="header-teams-left">' + data.teamA.name + '</span> ';
                htmlStr += '<div class="header-teams-middle"><span>' + data.gameTime + '</span></div> ';
                htmlStr += '<span class="header-teams-right">' + data.teamB.name + '</span> </section> <section class="ProgressBar"> ';
                htmlStr += '<div class="ProgressBar-left"></div> <div class="ProgressBar-tag">';
                htmlStr += '<img src="images/matchdetail_image_redbule.png"/></div>';
                htmlStr += '<div class="ProgressBar-right"></div> </section>';
                htmlStr += '<section class="supporters"> <img class="supporters-leftlogo" ';
                htmlStr += 'src="images/matchdetail_ic_support_red.png"/> ';
                htmlStr += '<p class="supporters-leftNumber">' + data.teamA.support_numbber + '</p>';
                htmlStr += '<p class="supporters-gameintro">' + data.title + '</p> ';
                htmlStr += '<p class="supporters-rightNumber">' + data.teamB.support_numbber + '</p> ';
                htmlStr += '<img class="supporters-rightlogo" src="images/matchdetail_ic_support_blue.png"/> </section> ';
                htmlStr += '<section class="header-bottomline"></section> </header>';

                //图文直播
                if (data.relateArticle.length > 0) {
                    htmlStr += '<section class="live-byword"> <h2>图文直播</h2> ';
                    htmlStr += '<section class="live-byword-listbox"> <ul>';
                    $.each(data.relateArticle, function (index, item) {
                        htmlStr += '<li> <div class="live-byword-list .clearFix"> ';
                        htmlStr += '<img class="fl" src="' + item.avatar + '"/> ';
                        htmlStr += '<div class="fl live-byword-list-games" > ';
                        htmlStr += '<p class="live-byword-list-name">' + item.author + '</p> ';
                        htmlStr += '<p class="live-byword-list-time">' + item.round + '<span>' + item.time + '</span></p></div></div> ';
                        htmlStr += '<div class="live-byword-list-words"> ';
                        htmlStr += '<p>' + item.content + '</p>';

                        var itemImgs = data.relateArticle[index];
                        if (itemImgs.images.length > 0) {
                            htmlStr += '<div class="clearFix">';
                            $.each(itemImgs.images, function (index, item) {
                                htmlStr += '<img class="fl" src="' + item + '"/>';
                            });
                            htmlStr += '</div> ';
                        }
                        htmlStr += '</div></li>';
                    });
                    htmlStr += '</ul> </section><section class="live-byword-listbarbox">';
                    htmlStr += '<div class="live-byword-listbar"></div> </section> ';
                    htmlStr += '</section> <section class="header-bottomline2"></section>';
                }

                //比赛视频
                if (data.relateVideos.length > 0) {
                    htmlStr += '<section class="gamelist"><h2>比赛视频</h2> <ul> ';
                    //console.log();
                    $.each(data.relateVideos, function (index, item) {//alert(1);
                        htmlStr += '<li class="clearFix"> <img class="fl" src="' + item.thumbnail + '"/>';
                        htmlStr += ' <div class="fl gamelist-into"> <P class="gamelist-into-title">' + item.title + '</P> ';
                        htmlStr += '<p class="gamelist-into-text">' + item.excerpt + '</p></div> ';
                        htmlStr += '<span>' + item.comments + '</span><a>' + item.tagName + '</a></li>';
                    });
                    htmlStr += '</ul> </section><section class="header-bottomline2"></section> <section class="gamevedio"> ';
                    htmlStr += '<a id="gamelive" href=""><h2>比赛视频</h2> <img src="images/gamevedio.png">';
                    htmlStr += ' <p>LOL春季赛常规赛RNG VS Snake 第三场直播</p> </a></section> ';
                    htmlStr += '<section class="header-bottomline2"></section>';
                }

                //相关新闻
                if (data.recomendVideos.length > 0) {
                    htmlStr += '<section class="gamenews"> <h2>相关新闻</h2><ul>';
                    $.each(data.recomendVideos, function (index, item) {
                        htmlStr += '<li class="clearFix">';
                        htmlStr += '<img class="fl" src="' + item.thumbnail + '"/>';
                        htmlStr += '<P class="gamenews-into-title">' + item.title + '</P>';
                        htmlStr += '<p class="gamenews-into-text">' + item.excerpt + '</p>';
                        htmlStr += '</div> <span>' + item.comments + '</span> </li> ';
                    });
                    htmlStr += ' </ul></section>';
                }

                //比赛数据
                if (data.gameContent.length > 0) {
                    htmlStr += '<section class="header-bottomline2"></section><section class="game-data clearFix">';
                    htmlStr += '<h2>数据</h2>';

                    $.each(data.gameContent, function (index, item) {
                        htmlStr += '<button>第一场</button>';
                        htmlStr += '<div class="data-details" style="display:block;"> ' +
                            '<section class="gamedata-teams"> <img class="gamedata-teams-logo1eft" ' +
                            'src="images/game-logo1.png"/> <p class="gamedata-teams-duration">32分05秒</p> ' +
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
                            ' <div class="compares-bardetails clearFix">' +
                            ' <div class="compares-barleft"> ' +
                            '<span class="compares-bardetails-leftnum">' + gamecontentindex[1].fieldData[0] + 'k</span> </div> ' +
                            '<div class="compares-barmiddle"> ' +
                            '<img src="images/matchdetail_image_redbule.png"/> </div> ' +
                            '<div class="compares-barright"> ' +
                            '<span class="compares-bardetails-rightnum">' + gamecontentindex[1].fieldData[1] + 'k</span> </div> </div></section>';
                        htmlStr += '</div>';
                        htmlStr += '</section>';
                    });
                }
                htmlStr += '<section class="header-bottomline3"></section> ';
                console.log(htmlStr);
                $('#box').html(htmlStr);
            }
        });
    });

}