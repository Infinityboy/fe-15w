"use strict";function renderData(e){function a(e){var a=6e4,s=60*a,t=24*s,i=(new Date).getTime(),d=1e3*e-i,r=d/t,l=d/s,c=d/a;return dateStr=r>=1?"剩余"+parseInt(r)+"天":l>=1?"剩余"+parseInt(l)+"小时":c>=1?"剩余"+parseInt(c)+"分钟":"剩余1分钟"}var s='<header id="header-h"><section class="header-scores">';s+='<div><img class="header-scores-logo1eft" src="'+e.teamA.logo+'"/></div>',s+='<div class="game-score"><span><b>'+e.teamA.score+"</b> </span><span><b>:</b></span>",s+=" <span><b>"+e.teamB.score+"</b></span></div> ",s+='<div><img class="header-scores-logoright" src="'+e.teamB.logo+'"/></div>',s+="</section>",s+='<section class="header-teams">',s+='<div class="header-teams-left"><p>'+e.teamA.name+"</p></div> ",s+='<div class="header-teams-middle"><span>'+e.gameTime+" "+e.gameType+"</span></div> ",s+='<div class="header-teams-right"><p>'+e.teamB.name+'</p></div> </section> <section class="ProgressBar clearFix"> ';var t=Math.max(e.teamA.support_numbber,e.teamB.support_numbber),i=Math.max(e.teamA.support_numbber/t*80,5),d=Math.max(e.teamB.support_numbber/t*80,5);s+='<div class="ProgressBar-leftbox"><div class="ProgressBar-left" style="width:'+i+'%"></div></div>',s+='<div class="ProgressBar-rightbox"><div class="ProgressBar-right" style="width:'+d+'%"></div></div> </section>',s+='<section class="supporters"><a href="##" class="sp sp-left" data-id="'+e.dataId+'" data-team="'+e.teamA.teamId+'"><img class="supporters-leftlogo" src="images/zan_2x.png"/>',s+='<span class="supporters-leftNumber supp" id="supporters-leftNumber"> '+e.teamA.support_numbber+"</span></a>",s+='<div class="space-holder"></div>',s+='<a href="##" class="sp sp-right" data-id="'+e.dataId+'" data-team="'+e.teamB.teamId+'">',s+='<span class="supporters-rightNumber supp" id="supporters-rightNumber">'+e.teamB.support_numbber+'</span><img class="supporters-rightlogo" src="images/zan_2x.png"/></a></section> ',s+="</header>","1"==e.state?(s+="undefined"!==e.bet&&e.bet?'<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">直播</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">讨论</div></a></li><li class="outList " data-id="2"><a href="##"><div class="border">新闻</div></a></li><li class="outList " data-id="3"><a href="##"><div class="border">竞猜</div></a></li></ul><div class="outContainer ">':'<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">直播</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">讨论</div></a></li><li class="outList " data-id="2"><a href="##"><div class="border">新闻</div></a></li></ul><div class="outContainer ">',s+='<div class="live" data-id="0">',s+='<p class="live-tip">请选择直播平台</p>',s+='<section class="live-list clearfix">',s+='<div class="live-wrap">',$.each(e.originSrc,function(e,a){s+='<div class="deck select"><a href="###" data-url="'+a.link+'"><div class="deck-item">',s+='<div class="deck-img"><img src="'+a.logo+'" alt=""/></div>',s+='<span class="live-button">观看直播</span></div></a></div>'}),s+="</div></section></div>"):"3"==e.state?(s+="undefined"!==e.bet&&e.bet?'<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">直播</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">讨论</div></a></li><li class="outList " data-id="2"><a href="##"><div class="border">新闻</div></a></li><li class="outList " data-id="3"><a href="##"><div class="border">竞猜</div></a></li></ul><div class="outContainer ">':'<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">直播</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">讨论</div></a></li><li class="outList " data-id="2"><a href="##"><div class="border">新闻</div></a></li></ul><div class="outContainer ">',s+='<div class="live" data-id="0">',s+='<p class="live-tip">请选择直播平台</p>',s+='<section class="live-list clearfix">',s+='<div class="live-wrap">',$.each(e.originSrc,function(e,a){s+='<div class="deck no-select">',s+='<a href="###">',s+='<div class="deck-img"><img src="'+a.logo+'" alt=""/></div>',s+='<span class="live-button">即将开始</span>',s+="</a></div>"}),s+="</div></section></div>"):"2"==e.state?(s+="undefined"!==e.bet&&e.bet?'<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">视频</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">讨论</div></a></li><li class="outList " data-id="2"><a href="##"><div class="border">新闻</div></a></li><li class="outList " data-id="3"><a href="##"><div class="border">竞猜</div></a></li></ul><div class="outContainer ">':'<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">视频</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">讨论</div></a></li><li class="outList " data-id="2"><a href="##"><div class="border">新闻</div></a></li></ul><div class="outContainer ">',e.relateVideos.length>0?(s+='<div class="live" data-id="0">',s+='<section class="list"><ul> ',$.each(e.relateVideos,function(e,a){s+='<li class="clearfix"><a href="##" class="list-item" data-type="'+a.articleType+'" data-id="'+a.extra+'"><img class="fl" src="'+a.thumbnail+'"/>',s+='<p class="list-title">'+a.title+"</p> ",a.tagColor&&a.tagName&&(s+='<span class="list-tag" style="color:'+a.tagColor+";border-color:"+a.tagColor+';">'+a.tagName+"</span>");var t,i=new Date;a.updateTime&&(i=new Date(1e3*a.updateTime)),t=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),s+='<span class="list-time">'+t+"</span>",s+="</a></li>"}),s+="</ul></section></div>"):s+='<div class="live" data-id="0" style="height: 10rem;font-size: 0.9rem; text-align: center;line-height:10rem;background-color: #ffffff;">暂无视频数据</div>'):s+='<div class="live" data-id="0" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;display:block;background-color: #ffffff;">',sourceId=e.changyanSid,sourceTitle=e.title;try{Jnapp.jn_getComment(sourceId,sourceTitle)}catch(r){}s+='<div class="reviews" data-id="1">',s+="</div>",e.recomendVideos.length>0?(s+='<div class="news" data-id="2">',s+='<section class="list"><ul>',$.each(e.recomendVideos,function(e,a){s+='<li class="clearfix"><a href="##" class="list-item" data-type="'+a.articleType+'" data-id="'+a.extra+'">',s+='<img class="fl" src="'+a.thumbnail+'"/>',s+='<p class="list-title">'+a.title+"</p>",a.tagColor&&a.tagName&&(s+='<span class="list-tag" style="color:'+a.tagColor+";border-color:"+a.tagColor+';">'+a.tagName+"</span>");var t,i=new Date;a.updateTime&&(i=new Date(1e3*a.updateTime)),t=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),s+='<span class="list-time">'+t+"</span>",s+="</a></li> "}),s+=" </ul></section></div>"):s+='<div class="news" data-id="2" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;background-color: #ffffff;">暂无新闻数据</div>';var l;if("undefined"!==e.bet&&e.bet){if(l=1==e.bet.status.type||3==e.bet.status.type||5==e.bet.status.type||6==e.bet.status.type?e.bet.status.message:a(e.bet.etimes),s+='<div class="guess" data-id="3" data-staus="'+e.bet.status.type+'" >',s+='<section class="live-byword-listbox">',s+='<div class="guess-nums"><p>'+e.bet.joinNum+"参与</p></div>",s+='<div class="guess-container">',s+='<div class="guess-game">',s+='<div class="teams-show">',s+=5==e.bet.status.type&&e.bet.teamA.score-e.bet.teamB.score>0?'<div class="game-head-icon"><img class="team-icon" src="'+e.bet.teamA.logo+'" alt=""/><img class="win-icon-left" src="images/win_2x.png" alt=""/></div>':'<div class="game-head-icon"><img class="team-icon" src="'+e.bet.teamA.logo+'" alt=""/></div>',s+='<div class="team-name">'+e.bet.teamA.name+"</div>",s+='<div class="guess-game-time">'+l+"</div>",s+='<div class="team-name">'+e.bet.teamB.name+"</div>",s+=5==e.bet.status.type&&e.bet.teamA.score-e.bet.teamB.score<0?'<div class="game-head-icon"><img class="team-icon" src="'+e.bet.teamB.logo+'" alt=""/><img class="win-icon-right" src="images/win_2x.png" alt=""/></div>':'<div class="game-head-icon"><img class="team-icon" src="'+e.bet.teamB.logo+'" alt=""/></div>',s+="</div>",s+='<div class="guess-option">',s+='<a href="" class="team-win-left" data-id="'+e.bet.gameId+'"  data-team="1" data-teamname="'+e.bet.teamA.name+'" data-odd="'+e.bet.teamA.odds+'"><p><span>'+e.bet.teamA.name+"胜</span><span>"+new Number(e.bet.teamA.odds).toFixed(2)+"</span></p></a>",s+='<div class="team-state"><span>赔&nbsp率</span></div>',s+='<a href="" class="team-win-right" data-id="'+e.bet.gameId+'"  data-team="2" data-teamname="'+e.bet.teamB.name+'" data-odd="'+e.bet.teamB.odds+'"><p><span>'+e.teamB.name+"胜</span><span>"+new Number(e.bet.teamB.odds).toFixed(2)+"</span></p></div></div></a>",s+='<div class="guess-tip"><p>实际结算赔率以竞猜结束的赔率为准 <a href="##"><em class="more-guess-rule">更多规则&gt;&gt;</em></a></p></div>',s+="</section>",5==e.bet.status.type){if(s+='<section class="richers" >',s+='<div class="richers-title clearfix"><p>收入榜</p><a href="##">如何上榜？</a></div>',e.bet.ranking.win.length>0){var c;$.each(e.bet.ranking.win,function(e,a){c=0==e?'<img src="images/first_2x.png" alt=""/>':1==e?'<img src="images/Second_2x.png" alt=""/>':2==e?'<img src="images/Third_2x.png" alt=""/>':"<span>"+(e+1)+"</span>",s+='<a href="###" class="richers-skip" data-id="'+a.dataId+'" data-type="'+a.articleType+'">',s+='<div class="richers-list">',s+='<div class="richers-rank" >'+c+"</div>",s+='<div class="richers-rank-head"><img src="'+a.avtar+'" alt=""/></div>',s+='<div class="richers-list-pact"><span>'+a.uname+"</span></div>",s+='<div class="richers-grades"><span>获得'+a.money+"竞币</span></div></div></a>"})}else s+='<div class="non-richer"><p>暂无收入信息</p><div>';s+="</section>"}else{if(s+='<section class="richers" >',s+='<div class="richers-title clearfix"><p>土豪榜</p><a href="##">如何上榜？</a></div>',e.bet.ranking.money.length>0){var n;$.each(e.bet.ranking.money,function(e,a){n=0==e?'<img src="images/first_2x.png" alt=""/>':1==e?'<img src="images/Second_2x.png" alt=""/>':2==e?'<img src="images/Third_2x.png" alt=""/>':"<span>"+(e+1)+"</span>",s+='<a href="###" class="richers-skip" data-id="'+a.dataId+'" data-type="'+a.articleType+'">',s+='<div class="richers-list">',s+='<div class="richers-rank" >'+n+"</div>",s+='<div class="richers-rank-head"><img src="'+a.avtar+'" alt=""/></div>',s+='<div class="richers-list-pact"><span>'+a.uname+"</span></div>",s+='<div class="richers-grades"><span>投注'+a.money+"竞币</span></div></div></a>"})}else s+='<div class="non-richer"><p>暂无土豪上榜</p><div>';s+="</section>"}s+="</div></div></div>"}$("#box").html(s);try{var o=$("#header-h").height();Jnapp.jn_sendHeaderHeight(o+"")}catch(r){}}function renderReviews(e,a){function s(e){var a=6e4,s=60*a,t=24*s,d=(new Date).getTime(),r=d-e;if(!(0>r)){var l=r/t,c=r/s,n=r/a;return i=l>=1?""+parseInt(l)+"天前":c>=1?""+parseInt(c)+"小时前":n>=1?""+parseInt(n)+"分钟前":"刚刚"}}var t,i,d=$(".new-reciews");if(topicId=e.topic_id,allpage=Math.ceil(e.cmt_sum/30),0===parseInt(a)&&(e.hots&&e.hots.length>0||e.comments&&e.comments.length>0?(t="<div>",e.hots&&e.hots.length>0&&(t+='<section class="hot-reviews">',t+='<div class="reviews-title"><span>热门讨论</span></div>',$.each(e.hots,function(e,a){t+='<div class="reviews-box">',t+='<div class="reviews-header"><img src="'+a.passport.img_url+'" alt=""/></div>',t+='<div class="reviews-right">',t+='<span class="reviews-name">'+a.passport.nickname+"</span>",t+='<span class="reviews-time">'+s(a.create_time)+"</span>",t+='<p class="reviews-content">'+a.content+"</p></div></div>"}),t+="</section>"),t+='<section class="new-reciews">',t+='<div class="reviews-title"><span>最新讨论</span></div>',$.each(e.comments,function(e,a){t+='<div class="reviews-box">',t+='<div class="reviews-header"><img src="'+a.passport.img_url+'" alt=""/></div>',t+='<div class="reviews-right">',t+='<span class="reviews-name">'+a.passport.nickname+"</span>",t+='<span class="reviews-time">'+s(a.create_time)+"</span>",t+='<p class="reviews-content">'+a.content+"</p></div></div>"}),t+="</section>",t+="</div>",$(".reviews").html(t)):$(".reviews").html('<div style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;background-color: #ffffff;">暂无讨论数据</div>')),1===parseInt(a)){var r="<div>";$.each(e.comments,function(e,a){r+='<div class="reviews-box">',r+='<div class="reviews-header"><img src="'+a.passport.img_url+'" alt=""/></div>',r+='<div class="reviews-right">',r+='<span class="reviews-name">'+a.passport.nickname+"</span>",r+='<span class="reviews-time">'+s(a.create_time)+"</span>",r+='<p class="reviews-content">'+a.content+"</p></div></div>"}),r+="</div>",d.append(r)}}var cacheData=null,sourceId,sourceTitle,topicId,allpage,pageTitle,isLoading=!1,dateStr;window.Jn={setCookie:function(e,a,s){var t=new Date;t.setDate(t.getDate()+s),document.cookie=e+"="+a+";expires="+t},getCookie:function(e){for(var a=document.cookie.split("; "),s=0;s<a.length;s++){var t=a[s].split("=");if(t[0]==e)return t[1]}return""},setData:function(e){"gameInitDetail"==e.key&&renderData(e.content)},addComment:function(e){isLoading=!1,"10000"==e.code&&renderReviews(e.data,e.type)},refreshComment:function(){Jnapp.jn_getComment(sourceId,sourceTitle)},showGameTab:function(e){$(".box").data("id",e+""),$(".outer").children().eq(e).addClass("selected").siblings().removeClass("selected"),$(".outContainer").children().eq(e).show().siblings().hide();var a=$(".guess").data("staus");2!==a&&$(".guess-option a").addClass("selectedGray")}},$(function(){$(document).on("click",".deck>a",function(e){e.preventDefault();var a=$(this).data("url");try{$(this).addClass("selected"),$(this).parent().addClass("selected").siblings(".deck").removeClass("selected"),Jnapp.jn_related(5,a+"")}catch(e){}}),$(document).on("click",".live-byword-list-words-images img",function(e){e.preventDefault();var a=$(this).attr("alt");a=a?a:"";try{Jnapp.jn_image($(this).attr("src"),a,"")}catch(e){}}),$(document).on("click",".list-item",function(e){e.preventDefault();try{Jnapp.jn_related($(this).data("type"),$(this).data("id")+"")}catch(a){}}),$(document).on("click",".sp-left",function(e){e.preventDefault();var a=$("#supporters-leftNumber"),s=a.text(),t=$(this).data("id"),i=$(this).data("team");try{if(Jnapp.jn_getData("sp-"+t))return void window.alert("你已经支持过啦!");s++,a.html(s),$(this).find("img").attr("src","images/click-zan_2x.png"),$(".supporters-leftNumber").css("color","#efd200"),Jnapp.jn_setData("sp-"+t,s+""),Jnapp.jn_agree(7,t+"",i+"")}catch(e){}}),$(document).on("click",".sp-right",function(e){e.preventDefault();var a=$("#supporters-rightNumber"),s=$(this).data("id"),t=$(this).data("team"),i=a.text();try{if(Jnapp.jn_getData("sp-"+s))return void window.alert("你已经支持过啦!");i++,a.html(i),$(this).find("img").attr("src","images/click-zan_2x.png"),$(".supporters-rightNumber").css("color","#efd200"),Jnapp.jn_setData("sp-"+s,i+""),Jnapp.jn_agree(7,s+"",t+"")}catch(e){}}),$(document).on("click",".outList a",function(e){e.preventDefault();var a=1;if(pageTitle=$(this).text(),!$(this).hasClass("selected")){var s=$(this).parent().data("id"),t=$(".outContainer");$(this).parent().addClass("selected").siblings().removeClass("selected"),t.children().eq(s)&&t.children().eq(s).show().siblings().hide()}"讨论"==pageTitle&&(isLoading=!0),$(document).on("scroll",function(e){e.preventDefault();var s=$(window).scrollTop(),t=$(document).height(),i=$(window).height(),d=s+i;if(d>=t&&(a++,allpage>=a))try{"讨论"==pageTitle&&isLoading&&(Jnapp.jn_getMoreComment(sourceId+"",a+"","30",topicId+""),isLoading=!1)}catch(e){}})}),$(document).on("click",".play-icon",function(e){e.preventDefault();try{Jnapp.jn_related(5,$(this).data("url"))}catch(e){}}),$(document).on("click",".guess-option a",function(e){e.preventDefault();var a=$(this).data("id"),s=$(this).data("team"),t=$(this).data("teamname"),i=$(this).data("odd");if(2==$(".guess").data("staus"))try{$(this).addClass("click-style"),setTimeout(function(){$(".guess-option a").removeClass("click-style")},300),Jnapp.jn_betting(a+"",1*s,t+"",i+"")}catch(e){}}),$(document).on("click",".guess-tip a",function(e){e.preventDefault();try{Jnapp.jn_showPage(200)}catch(e){}}),$(document).on("click",".richers-title a",function(e){e.preventDefault();try{Jnapp.jn_showPage(201)}catch(e){}})});