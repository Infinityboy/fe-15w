"use strict";function renderData(a){cacheData=a;var e=a.title?a.title:"",t=a.time?a.time:"",n=a.content?a.content:"",i='<header><h1 class="title">'+e+"</h1>";i+='<div class="video-meta"><span class="date">'+t+'</span><span class="author color-blue ml5">',i+=a.author+"</span></div></header>",i+='<div class="indent flat-content">'+n+"</div>",i+='<div class="maintext-share"><a href="" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /><p class="sharename">微信</p></a><a href="" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /><p class="sharename">微博</p></a><a href="" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /><p class="sharename">朋友圈</p></a></div></section>';var s=a.relate_news;s.length>0&&(i+='<div class="list"><h3>相关新闻</h3><ul id="news_list">',$.each(s,function(a,e){i+='<li class="clearFix"><a href="###" class="clearfix list-item" data-type="'+e.articleType+'" data-id="'+e.extra+'"><img class="fl" src="'+e.thumbnail+'"/><p class="list-title">'+e.title+"</p>",e.tagColor&&e.tagName&&(i+='<span class="list-tag" style="color:'+e.tagColor+";border-Color:"+e.tagColor+';">'+e.tagName+"</span>");var t,n=new Date;e.updateTime&&(n=new Date(1e3*e.updateTime)),t=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate(),i+='<span class="list-time">'+t+"</span>",i+="</a></li>"}),i+="</ul></div>"),$("#newsDetail").html(i)}window.Jn={};var cacheData=null;Jn.setData=function(a){"newsInitDetail"==a.key&&renderData(a.content)},$(function(){function a(a){try{var e=cacheData.thumbnail,t=cacheData.title,n=cacheData.excerpt,i=cacheData.shareUrl;Jnapp.jn_share(a,e,t,n,i)}catch(s){}}$(document).on("click",".list-item",function(a){a.preventDefault();try{Jnapp.jn_related($(this).data("type"),$(this).data("id")+"")}catch(a){}}),$(document).on("click",".maintext-share-weibo",function(e){e.preventDefault(),a(0)}),$(document).on("click",".maintext-share-weixin",function(e){e.preventDefault(),a(1)}),$(document).on("click",".maintext-share-frident",function(e){e.preventDefault(),a(2)})});