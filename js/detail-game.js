'use strict';
window.onload = window.onresize =function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';
    //document.documentElement.toLocaleString();
    $.ajax({
        url:'http://localhost:63342/work/fe-15w-app/data/game.js',
        type:"GET",
        dataType:'json',
        success:function(str) {
            var oSupportersgameintro = str.data.title;
            var oGametime= str.data.gameTime;
            var oTeamAlogo=str.data.teamA.logo;
            var oTeamBlogo=str.data.teamB.logo;
            var oTeamAname=str.data.teamA.name;
            var oTeamBname=str.data.teamB.name;
            var oTeamAscores=str.data.teamA.score;
            var oTeamBscores=str.data.teamB.score;
            var oSupporterAnumber=str.data.teamA.support_numbber;
            var oSupporterBnumber=str.data.teamB.support_numbber;
            var oAvatar=str.data.relateArticle[0].avatar;
            var oAuthor=str.data.relateArticle[0].author;
            var oContent=str.data.relateArticle[0].content;
            var oRound=str.data.relateArticle[0].round;
            var oDuration=str.data.relateArticle[0].time;
            var oTextImg=str.data.relateArticle[0].images[0];
            var oGamelistImg=str.data.recomendVideos[0].thumbnail;
            var oGamelistTitle=str.data.relateVideos[0].title;
            var oGamelistExcerpt=str.data.relateVideos[0].excerpt;
            var oGamelistTagname=str.data.relateVideos[0].tagName;
            var oGamenewsImg=str.data.recomendVideos[0].thumbnail;
            var oGamenewsTitle=str.data.recomendVideos[0].title;
            var oGamenewsExcerpt=str.data.recomendVideos[0].excerpt;
            var oRoundOne=str.data.gameContent[0].title;
            var oRoundOnetime=str.data.gameContent[0].time;
            var oRoundOneselectleft=str.data.gameContent[0].dataList.list[0].fieldData[0][0];
            var oComparesmoney=str.data.gameContent[0].dataList.list[1].fieldName;
            var oComparesbardetailsleftnum=str.data.gameContent[0].dataList.list[1].fieldData[0];
            var oComparesbardetailsrightnum=str.data.gameContent[0].dataList.list[1].fieldData[1];

           //console.log(str);

            $("#supporters-gameintro").html(oSupportersgameintro);
            $("#header-teams-middle").html(oGametime);
            $("#header-scores-logo1eft").attr("src",oTeamAlogo);
            $("#header-scores-logoright").attr("src",oTeamBlogo);
            $("#header-teams-left").html(oTeamAname);
            $("#header-teams-right").html(oTeamBname);
            $("#teamAscores").html(oTeamAscores);
            $("#teamBscores").html(oTeamBscores);
            $("#supporters-leftNumber").html(oSupporterAnumber);
            $("#supporters-rightNumber").html(oSupporterBnumber);
            $("#live-byword-list-img1").attr("src",oAvatar);
            $("#live-byword-list-name1").html(oAuthor);
            $("#live-byword-list-words-excerp").html(oContent);
            $("#live-byword-list-count1").html(oRound);
            $("#live-byword-list-time1").html(oDuration);
            $("#live-byword-list-words-img1").attr("src",oTextImg);
            $("#gamelist-img1").attr("src",oGamelistImg);
            $("#gamelist-into-title1").html(oGamelistTitle);
            $("#gamelist-into-text1").html(oGamelistExcerpt);
            $("#tagname1").html(oGamelistTagname);
            $("#gamenewsimg1").attr("src",oGamenewsImg);
            $("#gamenews-into-title1").html(oGamenewsTitle);
            $("#gamenews-into-text1").html(oGamenewsExcerpt);
            $("#round-one").html(oRoundOne);
            $("#gamedata-teams-duration").html(oRoundOnetime);
            $("#gamedata-teams-logo1eft").attr("src",oTeamAlogo);
            $("#gamedata-teams-logoright").attr("src",oTeamBlogo);
            $(".gamedata-select-logo1eft").attr("src",oRoundOneselectleft);
            $("#compares-money").html(oComparesmoney);
            $("#compares-bardetails-leftnum").html(oComparesbardetailsleftnum);
            $("#compares-bardetails-rightnum").html(oComparesbardetailsrightnum);
        },
        error:function(err){
            alert('失败:'+err);
        }
    });

    var oSupportersLeftlogo="images/matchdetail_ic_support.png";
    $("#supporters-leftlogo").tap(function(){
        $(this).attr("src",oSupportersLeftlogo);
    });

    var iScoreA=parseInt($("#teamAscores").text());
    var iScoreB=parseInt($("#teamBscores").text());

    var iScaleA=iScoreA/(iScoreA+iScoreB);
    var iScaleB=iScoreB/(iScoreA+iScoreB);
    var oBarlength=parseInt($(".ProgressBar").css("width"))-parseInt($(".ProgressBar-tag").css("width"));

    var oProgressBarleft=$(".ProgressBar-left");
    var oProgressBarright=$(".ProgressBar-right");
    var oProgressBartag=$(".ProgressBar-tag");



    oProgressBarleft.css("width",iScaleA*oBarlength);
    oProgressBarright.css("width",iScaleB*oBarlength);
    oProgressBartag.css("left",iScaleA*oBarlength);

};