"use strict";function renderData(e){var a='<header><section class="header-scores">';a+='<div><img class="header-scores-logo1eft" src="'+e.teamA.logo+'"/></div>',a+='<div class="game-score"><span><b>'+e.teamA.score+"</b> </span><span><b>:</b></span>",a+=" <span><b>"+e.teamB.score+"</b></span></div> ",a+='<div><img class="header-scores-logoright" src="'+e.teamB.logo+'"/></div>',a+="</section>",a+='<section class="header-teams">',a+='<div class="header-teams-left">'+e.teamA.name+"</div> ",a+='<div class="header-teams-middle"><span>'+e.gameTime+" "+e.gameType+"</span></div> ",a+='<div class="header-teams-right">'+e.teamB.name+'</div> </section> <section class="ProgressBar clearFix"> ';var s=Math.max(50*e.teamA.score,5),t=Math.max(50*e.teamB.score,5);a+='<div class="ProgressBar-leftbox"><div class="ProgressBar-left" style="width:'+s+'px"></div></div>',a+='<div class="ProgressBar-rightbox"><div class="ProgressBar-right" style="width:'+t+'px"></div></div> </section>',a+='<section class="supporters"><a href="##" class="sp sp-left" data-id="'+e.dataId+'" data-team="'+e.teamA.teamId+'"><img class="supporters-leftlogo" src="images/matchdetail_ic_support.png"/>',a+='<span class="supporters-leftNumber supp" id="supporters-leftNumber"> '+e.teamA.support_numbber+"</span></a>",a+='<div class="space-holder"></div>',a+='<a href="##" class="sp sp-right" data-id="'+e.dataId+'" data-team="'+e.teamB.teamId+'">',a+='<img class="supporters-rightlogo" src="images/matchdetail_ic_support.png"/><span class="supporters-rightNumber supp"id="supporters-rightNumber">'+e.teamB.support_numbber+"</span></a></section> ",a+="</header>","1"==e.state?(a+='</div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><div class="border"><a href="##">直播</a></div></li><li class="outList " data-id="1"><div class="border"><a href="##">讨论</a></div></li><li class="outList " data-id="2"><div class="border"><a href="##">新闻</div></a></li></ul><div class="outContainer ">',a+='<div class="live" data-id="0">',a+='<p class="live-tip">请选择直播平台</p>',a+='<section class="live-list clearfix">',a+='<div class="live-wrap">',$.each(e.originSrc,function(e,s){a+='<div class="deck select"><a href="###" data-url="'+s.link+'"><div class="deck-item">',a+='<div class="deck-img"><img src="'+s.logo+'" alt=""/></div>',a+='<span class="live-button">观看直播</span></div></a></div>'}),a+="</div></section></div>"):"3"==e.state?(a+='</div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><div class="border"><a href="##">直播</a></div></li><li class="outList " data-id="1"><div class="border"><a href="##">讨论</a></div></li><li class="outList " data-id="2"><div class="border"><a href="##">新闻</div></a></li></ul><div class="outContainer ">',a+='<div class="live" data-id="0">',a+='<p class="live-tip">请选择直播平台</p>',a+='<section class="live-list clearfix">',a+='<div class="live-wrap">',$.each(e.originSrc,function(e,s){a+='<div class="deck no-select">',a+='<a href="###">',a+='<div class="deck-img"><img src="'+s.logo+'" alt=""/></div>',a+='<span class="live-button">即将开始</span>',a+="</a></div>"}),a+="</div></section></div>"):"2"==e.state?(a+='</div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><div class="border"><a href="##">视频</a></div></li><li class="outList " data-id="1"><div class="border"><a href="##">讨论</a></div></li><li class="outList " data-id="2"><div class="border"><a href="##">新闻</div></a></li></ul><div class="outContainer ">',e.relateVideos.length>0?(a+='<div class="live" data-id="0">',a+='<section class="list"><ul> ',$.each(e.relateVideos,function(e,s){a+='<li class="clearfix"><a href="##" class="list-item" data-type="'+s.articleType+'" data-id="'+s.extra+'"><img class="fl" src="'+s.thumbnail+'"/>',a+='<p class="list-title">'+s.title+"</p> ",s.tagColor&&s.tagName&&(a+='<span class="list-tag" style="color:'+s.tagColor+";border-color:"+s.tagColor+';">'+s.tagName+"</span>");var t,i=new Date;s.updateTime&&(i=new Date(1e3*s.updateTime)),t=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),a+='<span class="list-time">'+t+"</span>",a+="</a></li>"}),a+="</ul></section></div>"):a+='<div class="live" data-id="0" style="height: 10rem;font-size: 0.9rem; text-align: center;line-height:10rem;display:none;background-color: #ffffff;">暂无视频数据</div>'):a+='<div class="live" data-id="0" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;display:block;background-color: #ffffff;">',sourceId=e.changyanSid,sourceTitle=e.title;try{Jnapp.jn_getComment(sourceId,sourceTitle)}catch(i){}a+='<div class="reviews" data-id="1">',a+="</div>",e.recomendVideos.length>0?(a+='<div class="news" data-id="2">',a+='<section class="list"><ul>',$.each(e.recomendVideos,function(e,s){a+='<li class="clearfix"><a href="##" class="list-item" data-type="'+s.articleType+'" data-id="'+s.extra+'">',a+='<img class="fl" src="'+s.thumbnail+'"/>',a+='<p class="list-title">'+s.title+"</p>",s.tagColor&&s.tagName&&(a+='<span class="list-tag" style="color:'+s.tagColor+";border-color:"+s.tagColor+';">'+s.tagName+"</span>");var t,i=new Date;s.updateTime&&(i=new Date(1e3*s.updateTime)),t=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),a+='<span class="list-time">'+t+"</span>",a+="</a></li> "}),a+=" </ul></section></div></div>"):a+='<div class="news" data-id="1" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;display:none;background-color: #ffffff;">暂无新闻数据</div>',$("#box").html(a)}function renderReviews(e,a){function s(e){var a=6e4,s=60*a,t=24*s,l=(new Date).getTime(),r=l-e;if(!(0>r)){var c=r/t,d=r/s,n=r/a;return i=c>=1?""+parseInt(c)+"天前":d>=1?""+parseInt(d)+"小时前":n>=1?""+parseInt(n)+"分钟前":"刚刚"}}var t,i,l=$(".new-reciews");if(topicId=e.topic_id,allpage=e.cmt_sum/30,0===parseInt(a)&&(t="<div>",e.hots&&e.hots.length>0&&(t+='<section class="hot-reviews">',s(e.hots.create_time),t+='<div class="reviews-title"><span>热门评论</span></div>',$.each(e.hots,function(e,a){t+='<div class="reviews-box">',t+='<div class="reviews-header"><img src="'+a.passport.img_url+'" alt=""/></div>',t+='<div class="reviews-right">',t+='<span class="reviews-name">'+a.passport.nickname+"</span>",t+='<span class="reviews-time">'+i+"</span>",t+='<p class="reviews-content">'+a.content+"</p></div></div>"}),t+="</section>"),s(e.comments.create_time),t+='<section class="new-reciews">',t+='<div class="reviews-title"><span>最新评论</span></div>',$.each(e.comments,function(e,a){t+='<div class="reviews-box">',t+='<div class="reviews-header"><img src="'+a.passport.img_url+'" alt=""/></div>',t+='<div class="reviews-right">',t+='<span class="reviews-name">'+a.passport.nickname+"</span>",t+='<span class="reviews-time">'+i+"</span>",t+='<p class="reviews-content">'+a.content+"</p></div></div>"}),t+="</section>",t+="</div>",$(".reviews").html(t)),1===parseInt(a)){var r="<div>";s(e.comments.create_time),$.each(e.comments,function(e,a){r+='<div class="reviews-box">',r+='<div class="reviews-header"><img src="'+a.passport.img_url+'" alt=""/></div>',r+='<div class="reviews-right">',r+='<span class="reviews-name">'+a.passport.nickname+"</span>",r+='<span class="reviews-time">'+i+"</span>",r+='<p class="reviews-content">'+a.content+"</p></div></div>"}),r+="</div>",l.append(r)}}var cacheData=null,sourceId,sourceTitle,topicId,allpage,load=!1,pageTitle,isLoading=!1;window.Jn={setCookie:function(e,a,s){var t=new Date;t.setDate(t.getDate()+s),document.cookie=e+"="+a+";expires="+t},getCookie:function(e){for(var a=document.cookie.split("; "),s=0;s<a.length;s++){var t=a[s].split("=");if(t[0]==e)return t[1]}return""}},Jn.setData=function(e){"gameInitDetail"==e.key&&renderData(e.content)},Jn.addComment=function(e){isLoading=!1,"10000"==e.code&&renderReviews(e.data,e.type)},Jn.refreshComment=function(){load&&"讨论"==pageTitle&&!isLoading&&(isLoading=!0,Jnapp.jn_getComment(sourceId,sourceTitle))},$(function(){$.get("data/living.json",function(e){1e4==e.code&&renderData(e.data)}),$(document).on("click",".deck>a",function(e){e.preventDefault();var a=$(this).data("url");try{$(this).addClass("selected"),$(this).parent().addClass("selected").siblings(".deck").removeClass("selected"),Jnapp.jn_related(5,a+"")}catch(e){}}),$(document).on("click",".live-byword-list-words-images img",function(e){e.preventDefault();var a=$(this).attr("alt");a=a?a:"";try{Jnapp.jn_image($(this).attr("src"),a,"")}catch(e){}}),$(document).on("click",".list-item",function(e){e.preventDefault();try{Jnapp.jn_related($(this).data("type"),$(this).data("id")+"")}catch(a){}}),$(document).on("click",".sp-left",function(e){e.preventDefault();var a=$("#supporters-leftNumber"),s=parseInt(a.html()),t=$(this).data("id"),i=$(this).data("team");try{if(Jnapp.jn_getData("sp-"+t))return;s++,a.html(s),$(this).find("img").attr("src","images/matchdetail_ic_support_red.png"),Jnapp.jn_setData(7,t+"",i)}catch(e){}}),$(document).on("click",".sp-right",function(e){e.preventDefault();var a=$("#supporters-rightNumber"),s=$(this).data("id"),t=$(this).data("team"),i=parseInt(a.html());try{if(Jnapp.jn_getData("sp-"+s))return;i++,a.html(i),$(this).find("img").attr("src","images/matchdetail_ic_support_blue.png"),Jnapp.jn_setData(7,s+"",t)}catch(e){}}),$(document).on("click",".outer .outList",function(e){e.preventDefault();var a=1;if(pageTitle=$(this).text(),!$(this).hasClass("selected")){var s=$(this).data("id"),t=$(".outContainer");$(this).addClass("selected").siblings().removeClass("selected"),t.children().eq(s)&&t.children().eq(s).show().siblings().hide()}"讨论"==pageTitle&&(load=!0),$(document).on("scroll",function(e){e.preventDefault();var s=$(window).scrollTop(),t=$(document).height(),i=$(window).height(),l=s+i;if(l>=t&&(a++,allpage>=a))try{load&&"讨论"==pageTitle&&!isLoading&&(isLoading=!0,Jnapp.jn_getMoreComment(sourceId+"",a+"","30",topicId+""))}catch(e){}})}),$(document).on("click",".play-icon",function(){try{Jnapp.jn_related(5,$(this).data("url"))}catch(e){}})});