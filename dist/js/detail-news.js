"use strict";function getDatediff(e){var t,a=6e4,n=60*a,s=24*n,i=(new Date).getTime(),c=i-1e3*e;if(!(0>c)){var r=c/s,l=c/n,o=c/a;if(r>=1){var m=new Date(1e3*e);t=m.getMonth()+1+"-"+m.getDate()}else t=l>=1?""+parseInt(l)+"小时前":o>=1?""+parseInt(o)+"分钟前":"刚刚";return t}}function renderData(e){cacheData=e;var t=e.title?e.title:"",a=e.time?e.time:"",n=e.content?e.content:"",s='<header><h1 class="title">'+t+"</h1>";s+='<div class="meta"><span class="date">'+a+'</span><span class="author color-blue ml5">',s+=e.author+"</span></div></header>",s+='<div class="indent flat-content">'+n+"</div>",s+='<div class="share-short-issue"><p></p><p>分享给召唤师们</p><p></p></div>',s+='<div class="maintext-share"><a href="" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /></a><a href="" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /></a><a href="" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /></a><a href="" class="maintext-share-qq-space"><img src="images/qq_zone.png" /></a><a href="" class="maintext-share-qq"><img src="images/QQ_2x.png" /></a></div></div>';var i=e.relate_news;i.length>0&&(s+='<div class="list"><h3>相关新闻</h3><ul id="news_list">',$.each(i,function(e,t){s+='<li class="clearFix"><a href="###" class="clearfix list-item" data-type="'+t.articleType+'" data-id="'+t.extra+'"><div class="news-left"><p class="list-title">'+t.title+"</p>",t.tagColor&&t.tagName&&(s+='<span class="list-tag" style="color:'+t.tagColor+";border-Color:"+t.tagColor+';">'+t.tagName+"</span>"),s+=t.comments?'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;'+t.comments+"</span>":'<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp; 0</span>',t.updateTime&&(s+='<span class="list-time">'+getDatediff(t.updateTime)+"</span>"),s+='</div><div class="news-right"><img class="fl" src="'+t.thumbnail+'"/></div></a></li>'}),s+='</ul></div><section class="line"></section>'),$("#newsDetail").html(s),$(".indent p strong").parent().css("margin","1.5rem 0 1.25rem 0"),$(".indent p img").parent().css({padding:"0",margin:"1.5rem 0"})}window.Jn={};var cacheData=null;Jn.setData=function(e){"newsInitDetail"==e.key&&renderData(e.content)},$(function(){function e(e){try{var t=cacheData.thumbnail,a=cacheData.title,n=cacheData.excerpt,s=cacheData.shareUrl;Jnapp.jn_share(e,t,a,n,s)}catch(i){}}$(document).on("click",".list-item",function(e){e.preventDefault();try{Jnapp.jn_related($(this).data("type"),$(this).data("id")+"")}catch(e){}}),$(document).on("click",".flat-content img",function(e){e.preventDefault();var t=$(this).attr("alt");t=t?t:"";try{Jnapp.jn_image($(this).attr("src"),t,"")}catch(e){}}),$(document).on("click",".maintext-share-weibo",function(t){t.preventDefault(),e(0)}),$(document).on("click",".maintext-share-weixin",function(t){t.preventDefault(),e(1)}),$(document).on("click",".maintext-share-frident",function(t){t.preventDefault(),e(2)}),$(document).on("click",".maintext-share-qq-space",function(t){t.preventDefault(),e(3)}),$(document).on("click",".maintext-share-qq",function(t){t.preventDefault(),e(4)})});