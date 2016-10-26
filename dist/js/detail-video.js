"use strict";function isIOS(e){return e.indexOf("iPhone")>0}function getDatediff(e){var a,s=6e4,t=60*s,n=24*t,i=(new Date).getTime(),l=i-1e3*e;if(!(0>l)){var o=l/n,c=l/t,d=l/s;if(o>=1){var r=new Date(1e3*e);a=r.getMonth()+1+"-"+r.getDate()}else a=c>=1?""+parseInt(c)+"小时前":d>=1?""+parseInt(d)+"分钟前":"刚刚";return a}}function renderData(e){var a=e;cacheData=a,voteId=a.voteId;var s=a.content?a.content:"",t=$(window).width(),n=t*defaultHeight/defaultWidth,i=window.navigator.userAgent,l="";1==a.videoType?(l+='<header class="header" style="height:'+n+'px;"><div class="player clearfix">'+s,isIOS(i)||(l+='<button class="video-button"></button>'),l+="</div></header>",l+='<div class="content" style="padding-top: '+n+'px">'):l+='<div class="content">',Jn.verticalHeight=n,l+='<div class="video-header">',l+='<h1 class="title">'+a.title+"</h1>",l+='<div class="video-meta clearfix">',a.views&&(l+='<span class="date"><em class="play-num"></em>'+a.views+"播放&ensp;</span>"),l+='<span class="author ml5">'+a.author+"</span>",l+="</div>",a.excerpt&&(l+='<div class="excerpt">'+a.excerpt+"</div>"),l+="</div>";var o={};try{o=Jnapp.jn_login_info()}catch(c){}"string"==typeof o&&(o=$.parseJSON(o)),l+='<div class="video-question""></div>',voteId&&"undefined"!==voteId&&$.getJSON("http://api.15w.com/client/app/jn/v1_4/vote/detail?dataId="+voteId+"&callback=?",function(e){if("10000"==e.code){var a=e.data,s=a.votes,t=a.excerpt,n=a.results,i=$(".video-question"),l=null;if(o.userid&&o.token)try{l=Jnapp.jn_getData(o.userid+"_"+voteId)}catch(c){}var d=[n.A,n.B,n.C,n.D],r=Math.max.apply(null,d),p=Math.max(1,d[0]/r*80),m=Math.max(1,d[1]/r*80),h=Math.max(1,d[2]/r*80),v=Math.max(1,d[3]/r*80),u='<p class="video-question-title">'+a.title+"</p>";l?(isVote=!0,u+='<a class="video-question-option" style="border: none"  data-id="0" data-elem="A" href="##"><span>A:</span><span class="val">'+s.A+'</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar"><em class="progress color-a"  style="width:'+p+'%"></em><em class="num">'+n.A+"</em></div></a>",u+='<a class="video-question-option" style="border: none"  data-id="1" data-elem="B" href="##"><span>B:</span><span class="val">'+s.B+'</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar"><em class="progress color-b"  style="width:'+m+'%"></em><em class="num">'+n.B+"</em></div></a>",u+='<a class="video-question-option" style="border: none"  data-id="2" data-elem="C" href="##"><span>C:</span><span class="val">'+s.C+'</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar"><em class="progress color-c"  style="width:'+h+'%"></em><em class="num">'+n.C+"</em></div></a>",u+='<a class="video-question-option" style="border: none"  data-id="3" data-elem="D"  href="##"><span>D:</span><span class="val">'+s.D+'</span> <span class="selected"  style="display: none">(已选择)</span><div class="progress-bar"><em class="progress color-d"  style="width:'+v+'%"></em><em class="num">'+n.D+"</em></div></a>",u+="<p>"+t+"</p>"):(u+='<a class="video-question-option" data-id="0"  data-elem="A"  href="##"><span>A:</span><span class="val">'+s.A+'</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar" style="display: none"><em class="progress color-a"  style="width:'+p+'%"></em><em class="num">'+n.A+"</em></div></a>",u+='<a class="video-question-option" data-id="1"  data-elem="B" href="##"><span>B:</span><span class="val">'+s.B+'</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar" style="display: none"><em class="progress color-b"  style="width:'+m+'%"></em><em class="num">'+n.B+"</em></div></a>",u+='<a class="video-question-option" data-id="2"  data-elem="C"  href="##"><span>C:</span><span class="val">'+s.C+'</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar" style="display: none"><em class="progress color-c"  style="width:'+h+'%"></em><em class="num">'+n.C+"</em></div></a>",u+='<a class="video-question-option" data-id="3"  data-elem="D" href="##"><span>D:</span><span class="val">'+s.D+'</span> <span class="selected" style="display: none">(已选择)</span><div class="progress-bar" style="display: none"><em class="progress color-d"  style="width:'+v+'%"></em><em class="num">'+n.D+"</em></div></a>",u+="<p>"+t+"</p>"),i.html(u)}}),l+='<div class="share-short-issue"><p></p><p>分享给召唤师们</p><p></p></div>',l+='<div class="maintext-share"><a href="#" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /></a><a href="#" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /></a><a href="#" class="maintext-share-qq-space"><img src="images/QQ_2x.png" /></a><a href="#" class="maintext-share-qq"><img src="images/qq_zone.png" /></a><a href="#" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /></a></div></div>',a.recomendVideos.length>0&&(l+='<section class="list"><h3>视频推荐</h3><ul> ',$.each(a.recomendVideos,function(e,a){l+='<li class="clearFix"><a href="###" class="clearfix list-item" data-type="'+a.articleType+'" data-id="'+a.extra+'"><div class="news-left"><p class="list-title">'+a.title+"</p>",a.tagColor&&a.tagName&&(l+='<span class="list-tag" style="color:'+a.tagColor+";border-Color:"+a.tagColor+';">'+a.tagName+"</span>"),l+=a.comments?'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;'+a.comments+"</span>":'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;0</span>',a.updateTime&&(l+='<span class="list-time">'+getDatediff(a.updateTime)+"</span>"),l+='</div><div class="news-right clearfix"><img class="fl" src="'+a.thumbnail+'"/></div></a></li>'}),l+='</ul></section><section class="line"></section></div>'),$("#detail").html(l)}window.Jn={};var cacheData=null,voteId,defaultHeight=360,defaultWidth=640,isVote=!1;Jn.setData=function(e){"videoInitDetail"==e.key&&renderData(e.content)},$(function(){function e(e){try{var a=cacheData.thumbnail,s=cacheData.title,t=cacheData.excerpt,n=cacheData.shareUrl;Jnapp.jn_share(e,a,s,t,n)}catch(i){}}function a(){var e=[];$.each($(".num"),function(a,s){e.push(parseInt($(s).text()))});var a=Math.max.apply(null,e),s=[];s.push(Math.max(1,e[0]/a*80)),s.push(Math.max(1,e[1]/a*80)),s.push(Math.max(1,e[2]/a*80)),s.push(Math.max(1,e[3]/a*80));var t=$(".progress");$.each(t,function(e,a){$(a).css("width",s[e]+"%")})}$.get("data/video-detail.json",function(e){renderData(e.content)}),$(document).on("click",".list-item",function(e){e.preventDefault();try{Jnapp.jn_related($(this).data("type"),$(this).data("id")+"")}catch(a){}}),$(document).on("click",".maintext-share-weibo",function(a){a.preventDefault(),e(0)}),$(document).on("click",".maintext-share-weixin",function(a){a.preventDefault(),e(1)}),$(document).on("click",".maintext-share-frident",function(a){a.preventDefault(),e(2)}),$(document).on("click",".maintext-share-qq-space",function(a){a.preventDefault(),e(3)}),$(document).on("click",".maintext-share-qq",function(a){a.preventDefault(),e(4)});var s=!1,t=($(".player"),$(".video-recommend .content"));$(document).on("click",".video-button",function(e){e.preventDefault();try{s=!s;var a=$(".header");s?(a.css({height:$(window).width()+"px"}),t.css("display","none"),$("body").css({height:"100%",overflow:"hidden"}),Jnapp.jn_setHorizontal(!0)):(a.css("height",Jn.verticalHeight+"px"),$("body").css({height:"auto",overflow:"auto"}),Jnapp.jn_setHorizontal(!1))}catch(e){}}),$(document).on("click",".video-question-option",function(e){if(e.preventDefault(),!isVote){var s=$(".video-question"),t=($(this).data("id"),parseInt($(this).find(".num").text())),n=$(this).data("elem"),i=$(this).find("span.val").text();try{var l=Jnapp.jn_login_info();"string"==typeof l&&(l=$.parseJSON(l));var o=l.userid,c=l.token;if(o&&c){$(this).find(".num").text(t+1),a(),s.find(".video-question-option").css("border-color","transparent"),s.find(".progress-bar").show(),$(this).find(".selected").show(),isVote=!0;var d="dataId="+voteId+"&uid="+o+"&token="+c+"&sign="+n+"&t="+(new Date).getTime()+"&callback=?";$.getJSON("http://api.15w.com/client/app/jn/v1_4/vote/vote?"+d,function(e){if("10000"==e.code)try{Jnapp.jn_setData(o+"_"+voteId,t+""),Jnapp.jn_comment(cacheData.changyanSid,"我选 "+n+" : "+i+", 求中奖")}catch(a){}})}else Jnapp.jn_login()}catch(r){window.alert("请下载电竞头条客户端进行投票!")}}})});