"use strict";function renderData(a){cacheData=a;var t=a.title?a.title:"",e=a.content?a.content:"",i=a.banner,s=a.avatar,n='<div class="allcontain detailWrap" style=""><div class="banner" style="background: url('+i+') no-repeat center top; background-size: auto 100%;"></div>';n+='<div class="container"><div class="wrap"><div class="left"><div class="details"><h1>'+t+'</h1><div class="detailsTit">',n+='<div class="pic"><img src="'+s+'"></div>',n+='<div class="ti">作者：'+a.author+"</div><p>",a.time&&(n+='<span class="art-time"><i></i>'+time+"</span>"),n+='<span>来源 <a href="#" target="_blank" class="f-blue">'+a.source+"</a></span></p></div>",n+=e,n+="</div></div></div></div>";try{var c=Jnapp.jn_getShare();"string"==typeof c&&(c=$.parseJSON(c),n+='<div class="excerpt-share"><div class="video-excerpt"><div class="video-excerpt-tip"><img src="data:image/png;charset=utf-8;base64,'+c.baseIcon+'" alt="loading..."/><p>'+c.title+"</p></div></div>")}catch(r){}n+='<div class="maintext-share"><a href="" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /><p class="sharename">微信</p></a><a href="" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /><p class="sharename">朋友圈</p></a><a href="" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /><p class="sharename">微博</p></a><a href="" class="maintext-share-qq-space"><img src="images/qq_zone.png" /><p class="sharename">空间</p></a><a href="" class="maintext-share-qq"><img src="images/QQ_2x.png" /><p class="sharename">QQ</p></a></div></div>',a.pastlist.length>0&&(n+='<div class="list"><h3>往期回顾</h3><ul id="news_list">',$.each(a.pastlist,function(a,t){n+='<li class="clearFix"><a href="###" class="clearfix list-item" data-type="'+t.articleType+'" data-id="'+t.extra+'"><img class="fl" src="'+t.thumbnail+'"/><p class="list-title">'+t.title+"</p>",t.tagColor&&t.tagName&&(n+='<span class="list-tag" style="color:'+t.tagColor+";border-Color:"+t.tagColor+';">'+t.tagName+"</span>");var e,i=new Date;t.updateTime&&(i=new Date(1e3*t.updateTime)),e=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),n+='<span class="list-time">'+e+"</span>",n+="</a></li>"}),n+="</ul></div>"),$("#content").html(n)}window.Jn={};var cacheData=null;Jn.setData=function(a){"topicInitDetail"==a.key&&renderData(a.content)},$(function(){function a(a){try{var t=cacheData.thumbnail,e=cacheData.title,i=cacheData.excerpt,s=cacheData.shareUrl;Jnapp.jn_share(a,t,e,i,s)}catch(n){}}$.ajax({url:"data/detail-topic.json",type:"GET",dataType:"json",success:function(a){renderData(a.data)},error:function(a){alert("失败:"+a)}}),$(document).on("click",".detailsCon img",function(a){a.preventDefault();var t=$(this).attr("alt");t=t?t:"";try{Jnapp.jn_image($(this).attr("src"),t,"")}catch(a){}}),$(document).on("click",".maintext-share-weibo",function(t){t.preventDefault(),a(0)}),$(document).on("click",".maintext-share-weixin",function(t){t.preventDefault(),a(1)}),$(document).on("click",".maintext-share-frident",function(t){t.preventDefault(),a(2)}),$(document).on("click",".maintext-share-qq-space",function(t){t.preventDefault(),a(3)}),$(document).on("click",".maintext-share-qq",function(t){t.preventDefault(),a(4)}),$(document).on("click",".list-item",function(a){a.preventDefault();try{Jnapp.jn_related($(this).data("type"),$(this).data("id")+"")}catch(a){}})});