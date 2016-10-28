"use strict";function getDatediff(a){var e,s=6e4,t=60*s,i=24*t,d=(new Date).getTime(),l=d-1e3*a;if(!(0>l)){var r=l/i,c=l/t,n=l/s;if(r>=1){var o=new Date(1e3*a);e=o.getMonth()+1+"-"+o.getDate()}else e=c>=1?""+parseInt(c)+"小时前":n>=1?""+parseInt(n)+"分钟前":"刚刚";return e}}function renderData(a){function e(a){var e=6e4,s=60*e,t=24*s,i=(new Date).getTime(),d=1e3*a-i,l=d/t,r=d/s,c=d/e;return dateStr=l>=1?"剩余"+parseInt(l)+"天":r>=1?"剩余"+parseInt(r)+"小时":c>=1?"剩余"+parseInt(c)+"分钟":"剩余1分钟"}var s='<header id="header-h"><section class="header-scores">';s+='<div><img class="header-scores-logo1eft" src="'+a.teamA.logo+'"/></div>',s+='<div class="game-score"><span><b>'+a.teamA.score+"</b> </span><span><b>:</b></span>",s+=" <span><b>"+a.teamB.score+"</b></span></div> ",s+='<div><img class="header-scores-logoright" src="'+a.teamB.logo+'"/></div>',s+="</section>",s+='<section class="header-teams">',s+='<div class="header-teams-left"><p>'+a.teamA.name+"</p></div> ",s+='<div class="header-teams-middle"><span>'+a.gameTime+" "+a.gameType+"</span></div> ",s+='<div class="header-teams-right"><p>'+a.teamB.name+'</p></div> </section> <section class="ProgressBar clearFix"> ';var t=Math.max(a.teamA.support_numbber,a.teamB.support_numbber),i=Math.max(a.teamA.support_numbber/t*80,5),d=Math.max(a.teamB.support_numbber/t*80,5);s+='<div class="ProgressBar-leftbox"><div class="ProgressBar-left" style="width:'+i+'%"></div></div>',s+='<div class="ProgressBar-rightbox"><div class="ProgressBar-right" style="width:'+d+'%"></div></div> </section>',s+='<section class="supporters"><a href="##" class="sp sp-left" data-id="'+a.dataId+'" data-team="'+a.teamA.teamId+'"><img class="supporters-leftlogo" src="images/zan_2x.png"/>',s+='<span class="supporters-leftNumber supp" id="supporters-leftNumber"> '+a.teamA.support_numbber+"</span></a>",s+='<div class="space-holder"></div>',s+='<a href="##" class="sp sp-right" data-id="'+a.dataId+'" data-team="'+a.teamB.teamId+'">',s+='<span class="supporters-rightNumber supp" id="supporters-rightNumber">'+a.teamB.support_numbber+'</span><img class="supporters-rightlogo" src="images/zan_2x.png"/></a></section> ',s+="</header>","1"==a.state?(s+="undefined"!==a.bet&&a.bet?'<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">直播</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">新闻</div></a></li><li class="outList " data-id="2"><a href="##"><div class="border">竞猜</div></a></li></ul><div class="outContainer ">':'<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">直播</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">新闻</div></a></li></ul><div class="outContainer ">',s+='<div class="live" data-id="0">',s+='<p class="live-tip">请选择直播平台</p>',s+='<section class="live-list clearfix">',s+='<div class="live-wrap">',$.each(a.originSrc,function(a,e){s+='<div class="deck select"><a href="###" data-url="'+e.link+'"><div class="deck-item">',s+='<div class="deck-img"><img src="'+e.logo+'" alt=""/></div>',s+='<span class="live-button">观看直播</span></div></a></div>'}),s+="</div></section></div>"):"3"==a.state?(s+="undefined"!==a.bet&&a.bet?'<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">直播</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">新闻</div></a></li><li class="outList " data-id="2"><a href="##"><div class="border">竞猜</div></a></li></ul><div class="outContainer ">':'<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">直播</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">新闻</div></a></li></ul><div class="outContainer ">',s+='<div class="live" data-id="0">',s+='<p class="live-tip">请选择直播平台</p>',s+='<section class="live-list clearfix">',s+='<div class="live-wrap">',$.each(a.originSrc,function(a,e){s+='<div class="deck no-select">',s+='<a href="###">',s+='<div class="deck-img"><img src="'+e.logo+'" alt=""/></div>',s+='<span class="live-button">即将开始</span>',s+="</a></div>"}),s+="</div></section></div>"):"2"==a.state?(s+="undefined"!==a.bet&&a.bet?'<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">直播</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">新闻</div></a></li><li class="outList " data-id="2"><a href="##"><div class="border">竞猜</div></a></li></ul><div class="outContainer ">':'<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">直播</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">新闻</div></a></li></ul><div class="outContainer ">',a.relateVideos.length>0?(s+='<div class="live" data-id="0">',s+='<section class="list"><ul> ',$.each(a.relateVideos,function(a,e){s+='<li class="clearFix"><a href="###" class="clearfix list-item" data-type="'+e.articleType+'" data-id="'+e.extra+'"><div class="news-left"><p class="list-title">'+e.title+"</p>",s+=e.comments?'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;'+e.comments+"</span>":'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;0</span>',e.tagColor&&e.tagName&&(s+='<span class="list-tag" style="color:'+e.tagColor+";border-Color:"+e.tagColor+';">'+e.tagName+"</span>"),e.updateTime&&(s+='<span class="list-time">'+getDatediff(e.updateTime)+"</span>"),s+='</div><div class="news-right"><img class="fl" src="'+e.thumbnail+'"/></div></a></li>'}),s+="</ul></section></div>"):s+='<div class="live" data-id="0" style="height: 10rem;font-size: 0.9rem; text-align: center;line-height:10rem;background-color: #ffffff;">暂无视频数据</div>'):s+='<div class="live" data-id="0" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;display:block;background-color: #ffffff;">',a.recomendVideos.length>0?(s+='<div class="news" data-id="1">',s+='<section class="list"><ul>',$.each(a.recomendVideos,function(a,e){s+='<li class="clearFix"><a href="###" class="clearfix list-item" data-type="'+e.articleType+'" data-id="'+e.extra+'"><div class="news-left"><p class="list-title">'+e.title+"</p>",e.tagColor&&e.tagName&&(s+='<span class="list-tag" style="color:'+e.tagColor+";border-Color:"+e.tagColor+';">'+e.tagName+"</span>"),s+=e.comments?'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;'+e.comments+"</span>":'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;0</span>',e.updateTime&&(s+='<span class="list-time">'+getDatediff(e.updateTime)+"</span>"),s+='</div><div class="news-right"><img class="fl" src="'+e.thumbnail+'"/></div></a></li>'}),s+=" </ul></section></div>"):s+='<div class="news" data-id="1" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;background-color: #ffffff;">暂无新闻数据</div>';var l;if("undefined"!==a.bet&&a.bet){if(l=1==a.bet.status.type||3==a.bet.status.type||5==a.bet.status.type||6==a.bet.status.type?a.bet.status.message:e(a.bet.etimes),s+='<div class="guess" data-id="2" data-staus="'+a.bet.status.type+'" >',s+='<section class="live-byword-listbox">',s+='<div class="guess-nums"><p>'+a.bet.joinNum+"参与</p></div>",s+='<div class="guess-container">',s+='<div class="guess-game">',s+='<div class="teams-show">',s+=5==a.bet.status.type&&a.bet.teamA.score-a.bet.teamB.score>0?'<div class="game-head-icon"><img class="team-icon" src="'+a.bet.teamA.logo+'" alt=""/><img class="win-icon-left" src="images/win_2x.png" alt=""/></div>':'<div class="game-head-icon"><img class="team-icon" src="'+a.bet.teamA.logo+'" alt=""/></div>',s+='<div class="team-name">'+a.bet.teamA.name+"</div>",s+='<div class="guess-game-time">'+l+"</div>",s+='<div class="team-name">'+a.bet.teamB.name+"</div>",s+=5==a.bet.status.type&&a.bet.teamA.score-a.bet.teamB.score<0?'<div class="game-head-icon"><img class="team-icon" src="'+a.bet.teamB.logo+'" alt=""/><img class="win-icon-right" src="images/win_2x.png" alt=""/></div>':'<div class="game-head-icon"><img class="team-icon" src="'+a.bet.teamB.logo+'" alt=""/></div>',s+="</div>",s+='<div class="guess-option">',s+='<a href="" class="team-win-left" data-id="'+a.bet.gameId+'"  data-team="1" data-teamname="'+a.bet.teamA.name+'" data-odd="'+a.bet.teamA.odds+'"><p><span>'+a.bet.teamA.name+"胜</span><span>"+new Number(a.bet.teamA.odds).toFixed(2)+"</span></p></a>",s+='<div class="team-state"><span>赔&nbsp率</span></div>',s+='<a href="" class="team-win-right" data-id="'+a.bet.gameId+'"  data-team="2" data-teamname="'+a.bet.teamB.name+'" data-odd="'+a.bet.teamB.odds+'"><p><span>'+a.teamB.name+"胜</span><span>"+new Number(a.bet.teamB.odds).toFixed(2)+"</span></p></div></div></a>",s+='<div class="guess-tip"><p>实际结算赔率以竞猜结束的赔率为准 <a href="##"><em class="more-guess-rule">更多规则&gt;&gt;</em></a></p></div>',s+="</section>",5==a.bet.status.type){if(s+='<section class="richers" >',s+='<div class="richers-title"><p>收入榜</p><a href="##">如何上榜？</a></div>',a.bet.ranking.win.length>0){var r;$.each(a.bet.ranking.win,function(a,e){r=0==a?'<img src="images/first_2x.png" alt=""/>':1==a?'<img src="images/Second_2x.png" alt=""/>':2==a?'<img src="images/Third_2x.png" alt=""/>':"<span>"+(a+1)+"</span>",s+='<a href="###" class="richers-skip" data-id="'+e.dataId+'" data-type="'+e.articleType+'">',s+='<div class="richers-list">',s+='<div class="richers-rank" >'+r+"</div>",s+='<div class="richers-rank-head"><img src="'+e.avtar+'" alt=""/></div>',s+='<div class="richers-list-pact"><span>'+e.uname+"</span></div>",s+='<div class="richers-grades"><span>获得'+e.money+"竞币</span></div></div></a>"})}else s+='<div class="non-richer"><p>暂无收入信息</p><div>';s+="</section>"}else{if(s+='<section class="richers" >',s+='<div class="richers-title"><p>土豪榜</p><a href="##">如何上榜？</a></div>',a.bet.ranking.money.length>0){var c;$.each(a.bet.ranking.money,function(a,e){c=0==a?'<img src="images/first_2x.png" alt=""/>':1==a?'<img src="images/Second_2x.png" alt=""/>':2==a?'<img src="images/Third_2x.png" alt=""/>':"<span>"+(a+1)+"</span>",s+='<a href="###" class="richers-skip" data-id="'+e.dataId+'" data-type="'+e.articleType+'">',s+='<div class="richers-list">',s+='<div class="richers-rank" >'+c+"</div>",s+='<div class="richers-rank-head"><img src="'+e.avtar+'" alt=""/></div>',s+='<div class="richers-list-pact"><span>'+e.uname+"</span></div>",s+='<div class="richers-grades"><span>投注'+e.money+"竞币</span></div></div></a>"})}else s+='<div class="non-richer"><p>暂无土豪上榜</p><div>';s+="</section>"}s+="</div></div></div>"}$("#box").html(s);try{var n=$("#header-h").height();Jnapp.jn_sendHeaderHeight(n+"")}catch(o){}}var cacheData=null,pageTitle,dateStr;window.Jn={setCookie:function(a,e,s){var t=new Date;t.setDate(t.getDate()+s),document.cookie=a+"="+e+";expires="+t},getCookie:function(a){for(var e=document.cookie.split("; "),s=0;s<e.length;s++){var t=e[s].split("=");if(t[0]==a)return t[1]}return""},setData:function(a){"gameInitDetail"==a.key&&renderData(a.content)},showGameTab:function(a){$(".box").data("id",a+""),$(".outer").children().eq(a).addClass("selected").siblings().removeClass("selected"),$(".outContainer").children().eq(a).show().siblings().hide();var e=$(".guess").data("staus");2!==e&&$(".guess-option a").addClass("selectedGray")}},$(function(){$(document).on("click",".deck>a",function(a){a.preventDefault();var e=$(this).data("url");try{$(this).addClass("selected"),$(this).parent().addClass("selected").siblings(".deck").removeClass("selected"),Jnapp.jn_related(5,e+"")}catch(a){}}),$(document).on("click",".live-byword-list-words-images img",function(a){a.preventDefault();var e=$(this).attr("alt");e=e?e:"";try{Jnapp.jn_image($(this).attr("src"),e,"")}catch(a){}}),$(document).on("click",".list-item",function(a){a.preventDefault();try{Jnapp.jn_related($(this).data("type"),$(this).data("id")+"")}catch(e){}}),$(document).on("click",".sp-left",function(a){a.preventDefault();var e=$("#supporters-leftNumber"),s=e.text(),t=$(this).data("id"),i=$(this).data("team");try{if(Jnapp.jn_getData("sp-"+t))return void window.alert("你已经支持过啦!");s++,e.html(s),$(this).find("img").attr("src","images/click-zan_2x.png"),$(".supporters-leftNumber").css("color","#efd200"),Jnapp.jn_setData("sp-"+t,s+""),Jnapp.jn_agree(7,t+"",i+"")}catch(a){}}),$(document).on("click",".sp-right",function(a){a.preventDefault();var e=$("#supporters-rightNumber"),s=$(this).data("id"),t=$(this).data("team"),i=e.text();try{if(Jnapp.jn_getData("sp-"+s))return void window.alert("你已经支持过啦!");i++,e.html(i),$(this).find("img").attr("src","images/click-zan_2x.png"),$(".supporters-rightNumber").css("color","#efd200"),Jnapp.jn_setData("sp-"+s,i+""),Jnapp.jn_agree(7,s+"",t+"")}catch(a){}}),$(document).on("click",".outList a",function(a){if(a.preventDefault(),pageTitle=$(this).text(),!$(this).hasClass("selected")){var e=$(this).parent().data("id"),s=$(".outContainer");$(this).parent().addClass("selected").siblings().removeClass("selected"),s.children().eq(e)&&s.children().eq(e).show().siblings().hide()}}),$(document).on("click",".play-icon",function(a){a.preventDefault();try{Jnapp.jn_related(5,$(this).data("url"))}catch(a){}}),$(document).on("click",".guess-option a",function(a){a.preventDefault();var e=$(this).data("id"),s=$(this).data("team"),t=$(this).data("teamname"),i=$(this).data("odd");if(2==$(".guess").data("staus"))try{$(this).addClass("click-style"),setTimeout(function(){$(".guess-option a").removeClass("click-style"),Jnapp.jn_betting(e+"",1*s,t+"",i+"")},150)}catch(a){}}),$(document).on("click",".guess-tip a",function(a){a.preventDefault();try{Jnapp.jn_showPage(200)}catch(a){}}),$(document).on("click",".richers-title a",function(a){a.preventDefault();try{Jnapp.jn_showPage(201)}catch(a){}})});