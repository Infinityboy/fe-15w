"use strict";function renderData(a){var s='<header><section class="header-scores">';s+='<img class="header-scores-logo1eft" src="'+a.teamA.logo+'"/>',s+='<div><span class="header-scores-left"><b>'+a.teamA.score+"</b></span>",s+='<span class="header-scores-midele"><b>:</b></span>',s+='<span class="header-scores-right"><b>'+a.teamB.score+"</b></span></div> ",s+='<img class="header-scores-logoright" src="'+a.teamB.logo+'"/> ',s+='</section> <section class="header-teams"> ',s+='<span class="header-teams-left">'+a.teamA.name+"</span> ",s+='<div class="header-teams-middle"><span>'+a.gameTime+a.gameType+"</span></div> ",s+='<span class="header-teams-right">'+a.teamB.name+'</span> </section> <section class="ProgressBar clearFix"> ';var e=50*a.teamA.score,t=Math.max(50*a.teamB.score,5);if(s+='<div class="ProgressBar-leftbox"><div class="ProgressBar-left" style="width:'+e+'px"></div></div>',s+='<div class="ProgressBar-rightbox"><div class="ProgressBar-right" style="width:'+t+'px"></div></div> </section>',s+='<section class="supporters"><a href="##" class="sp sp-left" data-id="'+a.dataId+'" data-team="'+a.teamA.teamId+'"><img class="supporters-leftlogo" src="images/matchdetail_ic_support.png"/>',s+='<span class="supporters-leftNumber supp" id="supporters-leftNumber"> '+a.teamA.support_numbber+"</span></a>",s+='<span class="supporters-gameintro">'+a.title+"</span>",s+='<a href="##" class="sp sp-right" data-id="'+a.dataId+'" data-team="'+a.teamB.teamId+'"><span class="supporters-rightNumber supp"id="supporters-rightNumber">'+a.teamB.support_numbber+"</span> ",s+='<img class="supporters-rightlogo" src="images/matchdetail_ic_support.png"/></a></section> ',s+='<section class="line"></section></header>',a.relateArticle.length>0&&(s+='<section class="live-byword"> <h2>图文直播</h2> ',s+='<section class="live-byword-listbox"> <ul>',$.each(a.relateArticle,function(e,t){s+='<li> <div class="innerbox"><div class="live-byword-list clearfix"> ',s+='<a href="##" class="live-byword-listimg"><img src="'+t.avatar+'"/> </a>',s+='<div class="fl live-byword-list-games" > ',s+='<p class="live-byword-list-name">'+t.author+"</p> ",s+='<p class="live-byword-list-time">'+t.round+"<span>&nbsp;"+t.time+"</span></p></div></div> ",s+='<div class="live-byword-list-words"> ',s+="<p>"+t.content+"</p>";var i=a.relateArticle[e];i.images.length>0&&(s+='<div class="clearFix live-byword-list-words-images">',$.each(i.images,function(a,e){s+='<img class="fl" src="'+e+'"/>'}),s+="</div> "),s+="</div></div></li>"}),s+="</ul> </section>",s+='</section><section class="line"></section>'),a.relateVideos.length>0&&(s+='<section class="list"><h3>比赛视频</h3> <ul> ',$.each(a.relateVideos,function(a,e){s+='<li class="clearfix"><a href="##" class="list-item" data-type="'+e.articleType+'" data-id="'+e.extra+'"><img class="fl" src="'+e.thumbnail+'"/>',s+='<p class="list-title">'+e.title+"</p> ",s+='<span class="list-tag" style="color:'+e.tagColor+";border-color:"+e.tagColor+';">'+e.tagName+"</span>";var t,i=new Date;e.updateTime&&(i=new Date(1e3*e.updateTime)),t=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),s+='<span class="list-time">'+t+"</span>",s+="</a></li>"}),s+='</ul></section><section class="line"></section>'),a.originSrc&&a.cover&&(s+='<section class="gamevedio"> ',s+="<h2>比赛视频</h2>",s+='<div class="game-video-play"><div class="play-icon" data-url="'+a.originSrc+'"><img src="images/play_icon.png" alt=""><span>直播中</span></div><img src="'+a.cover+'"><p>'+a.title+"</p></section> ",s+='</section><section class="line"></section></div>'),a.recomendVideos.length>0&&(s+='<section class="list"> <h3>相关新闻</h3><ul>',$.each(a.recomendVideos,function(a,e){s+='<li class="clearfix"><a href="##" class="list-item" data-type="'+e.articleType+'" data-id="'+e.extra+'">',s+='<img class="fl" src="'+e.thumbnail+'"/>',s+='<p class="list-title">'+e.title+"</p>",s+='<span class="list-tag" style="color:'+e.tagColor+";border-color:"+e.tagColor+';">'+e.tagName+"</span>";var t,i=new Date;e.updateTime&&(i=new Date(1e3*e.updateTime)),t=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),s+='<span class="list-time">'+t+"</span>",s+="</a></li> "}),s+=" </ul></section>"),a.gameContent.length>0){s+='<section class="line"></section><section class="game-data clearFix">',s+="<h2>数据</h2>",s+='<div  class="clearFix" id="roundlist">';var i=a.gameContent.length,l=document.documentElement.clientWidth,c=l/i;$.each(a.gameContent,function(a,e){s+=0==a?'<a href="##" class="roundspan3 on" data-id="'+a+'" style="width:'+c+'px" >'+e.title+"</a>":'<a href="##" class="roundspan3" data-id="'+a+'" style="width:'+c+'px" >'+e.title+"</a>"}),s+="</div>",s+='<div class="data-details">',$.each(a.gameContent,function(e,t){s+=0==e?'<div class="data-content-item">':'<div class="data-content-item" style="display: none">',s+='<section class="gamedata-teams"><img class="gamedata-teams-logo1eft" src="'+a.teamA.logo+'"/> <p class="gamedata-teams-duration">'+a.gameContent[e].time+'</p> <img class="gamedata-teams-logoright" src="'+a.teamB.logo+'"/></section> ';var i=t.dataList.list;$.each(i,function(a,e){if(0==e.listType){s+='<section class="game-data-select">',s+='<div class="img-left">';var t=e.fieldData[0];$.each(t,function(a,e){s+='<img class="game-data-select-logo1eft" src="'+e+'"/>'}),s+="</div>",s+='<p class="game-data-select-word">'+i[0].fieldName+"</p>";var l=e.fieldData[1];s+='<div class="img-right">',$.each(l,function(a,e){s+='<img class="game-data-select-logo1eft" src="'+e+'"/>'}),s+="</div>",s+=" </section>"}else if(1==e.listType){var c,n,r=parseInt(e.fieldData[0]),o=parseInt(e.fieldData[1]);r+o>100?(c=100*r/(r+o),n=100*o/(r+o)):(c=r,n=o),s+='<section class="conpares clearfix">',s+="<span>"+e.fieldName+"</span>",s+='<div class="bar-inner">',s+='<div class="left-bar">'+e.fieldData[0]+'<span class="bar" style="width:'+c+'px"></span></div>',s+='<div class="right-bar"><span class="bar" style="width:'+n+'px"></span>'+e.fieldData[1]+"</div>",s+="</div>",s+="</section>"}}),s+="</div>"}),s+="</div></section>"}s+='<section class="line"></section> ',$("#box").html(s)}window.Jn={};var cacheData=null;Jn.setData=function(a){"gameInitDetail"==a.key&&renderData(a.content)},$(function(){$(document).on("click",".list-item",function(a){a.preventDefault();try{Jnapp.jn_related($(this).data("type"),$(this).data("id")+"")}catch(a){}}),$(document).on("click",".sp-left",function(){var a=$("#supporters-leftNumber"),s=parseInt(a.html()),e=$(this).data("id"),t=$(this).data("team");if(!getCookie("sp-"+e))try{s++,a.html(s),setCookie("sp-"+e,s,365),Jnapp.jn_agree(7,e,t)}catch(i){}}),$(document).on("click",".sp-right",function(){var a=$("#supporters-rightNumber"),s=$(this).data("id"),e=$(this).data("team"),t=parseInt(a.html());if(!getCookie("sp-"+s))try{t++,a.html(t),setCookie("sp-"+s,t,365),Jnapp.jn_agree(7,s,e)}catch(i){}}),$(document).on("click","a.roundspan3",function(a){if(a.preventDefault(),!$(this).hasClass("on")){var s=$(this).data("id");$(this).addClass("on").siblings("a").removeClass("on"),$(".data-details > .data-content-item").eq(s).show().siblings().hide()}}),$(document).on("click",".play-icon",function(){try{Jnapp.jn_related(5,$(this).data("url"))}catch(a){}})});