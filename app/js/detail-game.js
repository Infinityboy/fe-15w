'use strict';

var cacheData = null,
	//sourceId,
	//sourceTitle,
	//topicId,
	//allpage,
	pageTitle,
	//isLoading = false,
    dateStr;

window.Jn = {
	setCookie: function (name, value, iDay) {
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + iDay);
		document.cookie = name + '=' + value + ';expires=' + oDate;
	},
	getCookie: function (name) {
		var arr = document.cookie.split('; ');
		for (var i = 0; i < arr.length; i++) {
			var arr2 = arr[i].split('=');
			if (arr2[0] == name) {
				return arr2[1];
			}
		}
		return '';
	},

    setData : function (data) {
        if (data.key == 'gameInitDetail') {
            renderData(data.content);
        }
    },

    //addComment : function (reviewsData) {
    //    isLoading = false;
    //    if (reviewsData.code == '10000') {
    //        renderReviews(reviewsData.data, reviewsData.type);
    //    }
    //},
    //refreshComment : function () {
    //    Jnapp.jn_getComment(sourceId, sourceTitle);
    //},

    showGameTab : function (tabNum) {
        $('.box').data('id', tabNum + '');
        $('.outer').children().eq(tabNum).addClass('selected').siblings().removeClass('selected');
        $('.outContainer').children().eq(tabNum).show().siblings().hide();

        var dataStatus = $('.guess').data('staus');
        if (dataStatus !== 2) {
            $('.guess-option a').addClass('selectedGray');
        }
    }
};

function getDatediff(timeStamp) {
	var result;
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var now = new Date().getTime();
	var diffValue = now - timeStamp*1000;
	if (diffValue < 0) {
		return;
	}
	var dayBefore = diffValue / day;
	var hourBefore = diffValue / hour;
	var minBefore = diffValue / minute;
	if (dayBefore >= 1) {
		var date = new Date(timeStamp*1000);
		result =  (date.getMonth() + 1) + '-' + date.getDate();
	}
	else if (hourBefore >= 1) {
		result = "" + parseInt(hourBefore) + "小时前";
	}
	else if (minBefore >= 1) {
		result = "" + parseInt(minBefore) + "分钟前";
	} else {
		result = "刚刚";
	}
	return result;
}

function renderData(data) {
	var htmlStr = '<header id="header-h"><section class="header-scores">';
	htmlStr += '<div><img class="header-scores-logo1eft" src="' + data.teamA.logo + '"/></div>';
	htmlStr += '<div class="game-score"><span><b>' + data.teamA.score + '</b> </span><span><b>:</b></span>';
	htmlStr += ' <span><b>' + data.teamB.score + '</b></span></div> ';
	htmlStr += '<div><img class="header-scores-logoright" src="' + data.teamB.logo + '"/></div>';
	htmlStr += '</section>';

	htmlStr += '<section class="header-teams">';
	htmlStr += '<div class="header-teams-left"><p>' + data.teamA.name +  '</p></div> ';

	htmlStr += '<div class="header-teams-middle"><span>' + data.gameTime + ' ' + data.gameType + '</span></div> ';
	htmlStr += '<div class="header-teams-right"><p>' + data.teamB.name +  '</p></div> </section> <section class="ProgressBar clearFix"> ';

	// 单元长度为15px
	var max = Math.max(data.teamA.support_numbber, data.teamB.support_numbber);
	var leftItemLength = Math.max(data.teamA.support_numbber / max * 80, 5);
	var rightItemLength = Math.max(data.teamB.support_numbber / max * 80, 5);

	htmlStr += '<div class="ProgressBar-leftbox"><div class="ProgressBar-left" style="width:' + leftItemLength + '%"></div></div>';
	htmlStr += '<div class="ProgressBar-rightbox"><div class="ProgressBar-right" style="width:' + rightItemLength + '%"></div></div> </section>';
	htmlStr += '<section class="supporters"><a href="##" class="sp sp-left" data-id="' + data.dataId + '" data-team="' + data.teamA.teamId + '"><img class="supporters-leftlogo" src="images/zan_2x.png"/>';
	htmlStr += '<span class="supporters-leftNumber supp" id="supporters-leftNumber"> ' + data.teamA.support_numbber + '</span></a>';
	htmlStr += '<div class="space-holder"></div>';
	htmlStr += '<a href="##" class="sp sp-right" data-id="' + data.dataId + '" data-team="' + data.teamB.teamId + '">';
	htmlStr += '<span class="supporters-rightNumber supp" id="supporters-rightNumber">' + data.teamB.support_numbber + '</span><img class="supporters-rightlogo" src="images/zan_2x.png"/></a></section> ';
	htmlStr += '</header>';

	//比赛数据替换为直播平台
	if (data.state == '1') {
		//正在直播
		if (data.bet !== 'undefined' && data.bet) {
			htmlStr += '<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">直播</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">新闻</div></a></li><li class="outList " data-id="2"><a href="##"><div class="border">竞猜</div></a></li></ul><div class="outContainer ">';
		} else {
			htmlStr += '<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">直播</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">新闻</div></a></li></ul><div class="outContainer ">';
		}
		htmlStr += '<div class="live" data-id="0">';
		htmlStr += '<p class="live-tip">请选择直播平台</p>';
		htmlStr += '<section class="live-list clearfix">';
		htmlStr += '<div class="live-wrap">';
		$.each(data.originSrc, function (i, liveList) {
			htmlStr += '<div class="deck select"><a href="###" data-url="' + liveList.link + '"><div class="deck-item">';
			htmlStr += '<div class="deck-img"><img src="' + liveList.logo + '" alt=""/>' + '</div>';
			htmlStr += '<span class="live-button">观看直播</span></div></a></div>';
		});
		htmlStr += '</div></section></div>';

	} else if (data.state == '3') {
		//未直播将要直播
		if (data.bet !== 'undefined' && data.bet) {
			htmlStr += '<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">直播</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">新闻</div></a></li><li class="outList " data-id="2"><a href="##"><div class="border">竞猜</div></a></li></ul><div class="outContainer ">';
		} else {
			htmlStr += '<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">直播</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">新闻</div></a></li></ul><div class="outContainer ">';
		}
		htmlStr += '<div class="live" data-id="0">';
		htmlStr += '<p class="live-tip">请选择直播平台</p>';
		htmlStr += '<section class="live-list clearfix">';
		htmlStr += '<div class="live-wrap">';
		$.each(data.originSrc, function (index, liveList) {
			htmlStr += '<div class="deck no-select">';
			htmlStr += '<a href="###">';
			htmlStr += '<div class="deck-img"><img src="' + liveList.logo + '" alt=""/>' + '</div>';
			htmlStr += '<span class="live-button">即将开始</span>';
			htmlStr += '</a></div>';
		});
		htmlStr += '</div></section></div>';
	} else if (data.state == '2') {
		//直播结束回放视频列表
		if (data.bet !== 'undefined' && data.bet) {
			htmlStr += '<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">视频</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">新闻</div></a></li><li class="outList " data-id="2"><a href="##"><div class="border">竞猜</div></a></li></ul><div class="outContainer ">';
		} else {
			htmlStr += '<div id="wrap"><ul class="outer"><li class="outList selected" data-id="0"><a href="##"><div class="border">视频</div></a></li><li class="outList " data-id="1"><a href="##"><div class="border">新闻</div></a></li></ul><div class="outContainer ">';
		}

		if (data.relateVideos.length > 0) {
			htmlStr += '<div class="live" data-id="0">';
			htmlStr += '<section class="list"><ul> ';

			$.each(data.relateVideos, function (index, item) {
				htmlStr += '<li class="clearFix"><a href="###" class="clearfix list-item" data-type="' + item.articleType + '" data-id="' + item.extra + '"><div class="news-left"><p class="list-title">' + item.title + '</p>';


				if(item.comments){
					htmlStr += '<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;' + item.comments + '</span>';
				}
				//else{
				//	htmlStr += '<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;0</span>';
				//}

				if (item.tagColor && item.tagName) {
					htmlStr += '<span class="list-tag" style="color:' + item.tagColor + ';border-Color:' + item.tagColor + ';">' + item.tagName + '</span>';
				}

				if (item.updateTime) {
					htmlStr += '<span class="list-time">' + getDatediff(item.updateTime) + '</span>';
				}
				//dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

				htmlStr += '</div><div class="news-right"><img class="fl" src="' + item.thumbnail + '"/></div></a></li>';
			});

			htmlStr += '</ul></section></div>';
		} else {
			htmlStr += '<div class="live" data-id="0" style="height: 10rem;font-size: 0.9rem; text-align: center;line-height:10rem;background-color: #ffffff;">暂无视频数据</div>';
		}
	} else {
		htmlStr += '<div class="live" data-id="0" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;display:block;background-color: #ffffff;">';
	}

	//sourceId = data.changyanSid;
	//sourceTitle = data.title;
	//try {
	//	Jnapp.jn_getComment(sourceId, sourceTitle);
	//} catch (e) {
    //
	//}
    //
	//htmlStr += '<div class="reviews" data-id="1">';
	//htmlStr += '</div>';

	//相关新闻
	if (data.recomendVideos.length > 0) {
		htmlStr += '<div class="news" data-id="1">';
		htmlStr += '<section class="list"><ul>';
		$.each(data.recomendVideos, function (index, item) {
			htmlStr += '<li class="clearFix"><a href="###" class="clearfix list-item" data-type="' + item.articleType + '" data-id="' + item.extra + '"><div class="news-left"><p class="list-title">' + item.title + '</p>';

			if(item.comments){
				htmlStr += '<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;' + item.comments + '</span>';
			}
			//else{
			//	htmlStr += '<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;0</span>';
			//}

			if (item.tagColor && item.tagName) {
				htmlStr += '<span class="list-tag" style="color:' + item.tagColor + ';border-Color:' + item.tagColor + ';">' + item.tagName + '</span>';
			}

			if (item.updateTime) {
				htmlStr += '<span class="list-time">' + getDatediff(item.updateTime) + '</span>';
			}
			//dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

			htmlStr += '</div><div class="news-right"><img class="fl" src="' + item.thumbnail + '"/></div></a></li>';
		});
		htmlStr += ' </ul></section></div>';
	}
	else {
		htmlStr += '<div class="news" data-id="1" style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;background-color: #ffffff;">暂无新闻数据</div>';
	}


	//竞猜
	var statusType;

	//function formatDate(createTime) {
	//	var changeTime = new Date(createTime * 1000);
	//	var hourOld = changeTime.getHours();
	//	var hourNew = hourOld < 10 ? '0' + hourOld : hourOld;
	//	var minuteOld = changeTime.getMinutes();
	//	var minuteNew = minuteOld < 10 ? '0' + minuteOld : minuteOld;
	//	return dateStr = hourNew + ":" + minuteNew;
	//}

	function formatDate(createTime) {
		var minute = 1000 * 60;
		var hour = minute * 60;
		var day = hour * 24;
		var now = new Date().getTime();
		var diffValue = createTime*1000 - now;
		var dayBefore = diffValue / day;
		var hourBefore = diffValue / hour;
		var minBefore = diffValue / minute;
		if (dayBefore >= 1) {
			dateStr = "剩余" + parseInt(dayBefore) + "天";
		}
		else if (hourBefore >= 1) {
			dateStr = "剩余" + parseInt(hourBefore) + "小时";
		}
		else if (minBefore >= 1) {
			dateStr = "剩余" + parseInt(minBefore) + "分钟";
		} else {
			dateStr = "剩余1分钟";
		}
		return dateStr;
	}


	if (data.bet !== 'undefined' && data.bet) {
		if (data.bet.status.type == 1||data.bet.status.type == 3||data.bet.status.type == 5||data.bet.status.type == 6) {
			statusType = data.bet.status.message;
		} else {
			statusType = formatDate(data.bet.etimes);
		}


		htmlStr += '<div class="guess" data-id="2" data-staus="' + data.bet.status.type + '" >';
		htmlStr += '<section class="live-byword-listbox">';
		htmlStr += '<div class="guess-nums"><p>' + data.bet.joinNum + '参与</p></div>';
		htmlStr += '<div class="guess-container">';
		htmlStr += '<div class="guess-game">';
		htmlStr += '<div class="teams-show">';
		if (data.bet.status.type == 5) {
			if (data.bet.teamA.score - data.bet.teamB.score > 0) {
				htmlStr += '<div class="game-head-icon"><img class="team-icon" src="' + data.bet.teamA.logo + '" alt=""/><img class="win-icon-left" src="images/win_2x.png" alt=""/>' + '</div>';
			} else {
				htmlStr += '<div class="game-head-icon"><img class="team-icon" src="' + data.bet.teamA.logo + '" alt=""/>' + '</div>';
			}
		} else {
			htmlStr += '<div class="game-head-icon"><img class="team-icon" src="' + data.bet.teamA.logo + '" alt=""/>' + '</div>';
		}
		htmlStr += '<div class="team-name">' + data.bet.teamA.name + '</div>';
		htmlStr += '<div class="guess-game-time">' + statusType + '</div>';
		htmlStr += '<div class="team-name">' + data.bet.teamB.name + '</div>';
		if (data.bet.status.type == 5) {
			if (data.bet.teamA.score - data.bet.teamB.score < 0) {
				htmlStr += '<div class="game-head-icon"><img class="team-icon" src="' + data.bet.teamB.logo + '" alt=""/><img class="win-icon-right" src="images/win_2x.png" alt=""/>' + '</div>';
			} else {
				htmlStr += '<div class="game-head-icon"><img class="team-icon" src="' + data.bet.teamB.logo + '" alt=""/>' + '</div>';
			}
		} else {
			htmlStr += '<div class="game-head-icon"><img class="team-icon" src="' + data.bet.teamB.logo + '" alt=""/>' + '</div>';
		}
		htmlStr += '</div>';
		htmlStr += '<div class="guess-option">';
		htmlStr += '<a href="" class="team-win-left" data-id="' + data.bet.gameId + '"  data-team="1" data-teamname="' + data.bet.teamA.name + '" data-odd="' + data.bet.teamA.odds + '"><p><span>' + data.bet.teamA.name + '胜' + '</span><span>' + new Number(data.bet.teamA.odds).toFixed(2) + '</span></p></a>';
		htmlStr += '<div class="team-state"><span>赔&nbsp率</span></div>';
		htmlStr += '<a href="" class="team-win-right" data-id="' + data.bet.gameId + '"  data-team="2" data-teamname="' + data.bet.teamB.name + '" data-odd="' + data.bet.teamB.odds + '"><p><span>' + data.teamB.name + '胜' + '</span><span>' + new Number(data.bet.teamB.odds).toFixed(2) + '</span></p></div></div></a>';
		htmlStr += '<div class="guess-tip"><p>实际结算赔率以竞猜结束的赔率为准 <a href="##"><em class="more-guess-rule">更多规则&gt;&gt;</em></a></p></div>';
		htmlStr += '</section>';
	if(data.bet.status.type == 5){
		htmlStr+= '<section class="richers" >';
		htmlStr+= '<div class="richers-title"><p>收入榜</p><a href="##">如何上榜？</a></div>';
		if(data.bet.ranking.win.length>0){
			var rankHeadImg;
			$.each(data.bet.ranking.win,function(richIdx,item){

				if(richIdx == 0){
					rankHeadImg = '<img src="images/first_2x.png" alt=""/>';
				}else if(richIdx == 1){
					rankHeadImg = '<img src="images/Second_2x.png" alt=""/>';
				}else if(richIdx == 2){
					rankHeadImg = '<img src="images/Third_2x.png" alt=""/>';
				}else{
					rankHeadImg = '<span>'+(richIdx+1)+'</span>';
				}
				htmlStr+= '<a href="###" class="richers-skip" data-id="'+item.dataId+'" data-type="'+item.articleType+'">';
				htmlStr+= '<div class="richers-list">';
				htmlStr+= '<div class="richers-rank" >'+rankHeadImg+'</div>';
				htmlStr+= '<div class="richers-rank-head"><img src="'+item.avtar+'" alt=""/></div>';
				htmlStr+= '<div class="richers-list-pact"><span>'+item.uname+'</span></div>';
				htmlStr+= '<div class="richers-grades"><span>获得'+item.money+'竞币</span></div></div></a>';

			});
		}else{
            htmlStr+= '<div class="non-richer"><p>暂无收入信息</p><div>'
        }
		htmlStr+= '</section>';
	}else{
		htmlStr+= '<section class="richers" >';
		htmlStr+= '<div class="richers-title"><p>土豪榜</p><a href="##">如何上榜？</a></div>';
		if(data.bet.ranking.money.length>0){
			var rankHeadImgs;
			$.each(data.bet.ranking.money,function(richIdx,item){

				if(richIdx == 0){
					rankHeadImgs = '<img src="images/first_2x.png" alt=""/>';
				}else if(richIdx == 1){
					rankHeadImgs = '<img src="images/Second_2x.png" alt=""/>';
				}else if(richIdx == 2){
					rankHeadImgs = '<img src="images/Third_2x.png" alt=""/>';
				}else{
					rankHeadImgs = '<span>'+(richIdx+1)+'</span>';
				}
				htmlStr+= '<a href="###" class="richers-skip" data-id="'+item.dataId+'" data-type="'+item.articleType+'">';
				htmlStr+= '<div class="richers-list">';
				htmlStr+= '<div class="richers-rank" >'+rankHeadImgs+'</div>';
				htmlStr+= '<div class="richers-rank-head"><img src="'+item.avtar+'" alt=""/></div>';
				htmlStr+= '<div class="richers-list-pact"><span>'+item.uname+'</span></div>';
				htmlStr+= '<div class="richers-grades"><span>投注'+item.money+'竞币</span></div></div></a>';
			});
		}else{
            htmlStr+= '<div class="non-richer"><p>暂无土豪上榜</p><div>'
        }
		htmlStr+= '</section>';
	}

		htmlStr += '</div></div></div>';
	}
	$('#box').html(htmlStr);

	try{
		var headerHeight = $('#header-h').height();
		Jnapp.jn_sendHeaderHeight(headerHeight+'');
	}catch (e){

	}
}
//function renderReviews(reviewsData, type) {
//	var newReview = $('.new-reciews');
//	var htmlReview;
//	var result;
//	topicId = reviewsData.topic_id;
//	allpage = Math.ceil(reviewsData.cmt_sum / 30);
//	//评论时间戳转换
//	function getDatediff(timeStamp) {
//		var minute = 1000 * 60;
//		var hour = minute * 60;
//		var day = hour * 24;
//		var now = new Date().getTime();
//		var diffValue = now - timeStamp;
//		if (diffValue < 0) {
//			return;
//		}
//		var dayBefore = diffValue / day;
//		var hourBefore = diffValue / hour;
//		var minBefore = diffValue / minute;
//		if (dayBefore >= 1) {
//			result = "" + parseInt(dayBefore) + "天前";
//		}
//		else if (hourBefore >= 1) {
//			result = "" + parseInt(hourBefore) + "小时前";
//		}
//		else if (minBefore >= 1) {
//			result = "" + parseInt(minBefore) + "分钟前";
//		} else {
//			result = "刚刚";
//		}
//		return result;
//	}
//
//	// 首屏数据
//	if (parseInt(type) === 0) {
//		if ((reviewsData.hots && reviewsData.hots.length > 0) || (reviewsData.comments && reviewsData.comments.length > 0)) {
//			htmlReview = '<div>';
//			if (reviewsData.hots && reviewsData.hots.length > 0) {
//				htmlReview += '<section class="hot-reviews">';
//				htmlReview += '<div class="reviews-title"><span>热门讨论</span></div>';
//				$.each(reviewsData.hots, function (hotIdx, hotContent) {
//					htmlReview += '<div class="reviews-box">';
//					htmlReview += '<div class="reviews-header"><img src="' + hotContent.passport.img_url + '" alt=""/>' + '</div>';
//					htmlReview += '<div class="reviews-right">';
//					htmlReview += '<span class="reviews-name">' + hotContent.passport.nickname + '</span>';
//					htmlReview += '<span class="reviews-time">' + getDatediff(hotContent.create_time) + '</span>';
//					htmlReview += '<p class="reviews-content">' + hotContent.content + '</p></div></div>';
//				});
//				htmlReview += '</section>';
//			}
//
//			htmlReview += '<section class="new-reciews">';
//			htmlReview += '<div class="reviews-title"><span>最新讨论</span></div>';
//			$.each(reviewsData.comments, function (idx, content) {
//				htmlReview += '<div class="reviews-box">';
//				htmlReview += '<div class="reviews-header"><img src="' + content.passport.img_url + '" alt=""/>' + '</div>';
//				htmlReview += '<div class="reviews-right">';
//				htmlReview += '<span class="reviews-name">' + content.passport.nickname + '</span>';
//				htmlReview += '<span class="reviews-time">' + getDatediff(content.create_time) + '</span>';
//				htmlReview += '<p class="reviews-content">' + content.content + '</p></div></div>';
//			});
//			htmlReview += '</section>';
//			htmlReview += '</div>';
//			$('.reviews').html(htmlReview);
//		} else {
//			$('.reviews').html('<div style="height: 10rem;font-size: 0.9rem;line-height:10rem; text-align: center;background-color: #ffffff;">暂无讨论数据</div>');
//		}
//
//	}
//
//	if (parseInt(type) === 1) {
//		var htmlMorereview = '<div>';
//		$.each(reviewsData.comments, function (index, moreContent) {
//			htmlMorereview += '<div class="reviews-box">';
//			htmlMorereview += '<div class="reviews-header"><img src="' + moreContent.passport.img_url + '" alt=""/>' + '</div>';
//			htmlMorereview += '<div class="reviews-right">';
//			htmlMorereview += '<span class="reviews-name">' + moreContent.passport.nickname + '</span>';
//			htmlMorereview += '<span class="reviews-time">' + getDatediff(moreContent.create_time) + '</span>';
//			htmlMorereview += '<p class="reviews-content">' + moreContent.content + '</p></div></div>';
//		});
//		htmlMorereview += '</div>';
//		newReview.append(htmlMorereview);
//	}
//}


$(function () {

	 //$.get('data/living.json', function (res) {
	 //   if (res.code == 10000) {
	 //       renderData(res.data);
	 //   }
	 //});

	//观看直播
	$(document).on('click', '.deck>a', function (e) {
		e.preventDefault();
		var dataUrl = $(this).data('url');

		try {
			$(this).addClass('selected');
			$(this).parent().addClass('selected').siblings('.deck').removeClass('selected');
			Jnapp.jn_related(5, dataUrl + '');
		} catch (e) {

		}

	});

	// 图片查看大图
	$(document).on('click', '.live-byword-list-words-images img', function (e) {
		e.preventDefault();
		var title = $(this).attr('alt');
		title = title ? title : '';
		try {
			Jnapp.jn_image($(this).attr('src'), title, '');
		} catch (e) {

		}
	});


	$(document).on('click', '.list-item', function (e) {
		e.preventDefault();
		try {
			Jnapp.jn_related($(this).data('type'), $(this).data('id') + "");
		} catch (error) {
		}
	});

	//left 点赞支持
	$(document).on('click', '.sp-left', function (e) {
		e.preventDefault();
		var elem = $('#supporters-leftNumber');
		var number = elem.text();
		var dataId = $(this).data('id');
		var teamId = $(this).data('team');
		try {
			if (Jnapp.jn_getData("sp-" + dataId)) {
				window.alert('你已经支持过啦!');
				return;
			}
			number++;
			elem.html(number);

			$(this).find('img').attr('src', 'images/click-zan_2x.png');
			$('.supporters-leftNumber').css('color', '#efd200');
			Jnapp.jn_setData("sp-" + dataId, number + '');
			Jnapp.jn_agree(7, dataId + '', teamId + "");
		} catch (e) {

		}
	});

	// right 点赞支持
	$(document).on('click', '.sp-right', function (e) {
		e.preventDefault();
		var elem = $('#supporters-rightNumber');
		var dataId = $(this).data('id');
		var teamId = $(this).data('team');
		var number = elem.text();
		try {
			if (Jnapp.jn_getData("sp-" + dataId)) {
				window.alert('你已经支持过啦!');
				return;
			}

			number++;
			elem.html(number);
			$(this).find('img').attr('src', 'images/click-zan_2x.png');
			$('.supporters-rightNumber').css('color', '#efd200');
			Jnapp.jn_setData("sp-" + dataId, number + '');
			Jnapp.jn_agree(7, dataId + "", teamId + '');
		} catch (e) {
		}
	});


	// tab切换 切换外层选项卡
	$(document).on('click', '.outList a', function (e) {
		e.preventDefault();
		//var page = 1;
		pageTitle = $(this).text();

		if (!$(this).hasClass('selected')) {
			var cls = $(this).parent().data('id');
			var oContainer = $('.outContainer');
			$(this).parent().addClass('selected').siblings().removeClass('selected');
			if (oContainer.children().eq(cls)) {
				oContainer.children().eq(cls).show().siblings().hide();
			}
		}

		//讨论无限加载
	//	if (pageTitle == '讨论') {
	//		isLoading = true;
	//	}
	//	$(document).on('scroll', function (e) {
	//		e.preventDefault();
	//		var $scrollTop = $(window).scrollTop(),
	//			$documentHeight = $(document).height(),
	//			$winHeight = $(window).height(),
	//			$dis = $scrollTop + $winHeight;
	//		if ($dis >= $documentHeight) {
	//			page++;
	//			if (page <= allpage) {
	//				try {
	//					if ( pageTitle == '讨论' && isLoading) {
	//						Jnapp.jn_getMoreComment(sourceId + '', page + '', '30', topicId + '');
	//						isLoading = false;
	//					}
	//				} catch (e) {
    //
	//				}
	//			}
	//		}
	//	});
    //


	});

	// 直播跳转
	$(document).on('click', '.play-icon', function (e) {
		e.preventDefault();
		try {
			Jnapp.jn_related(5, $(this).data('url'));
		} catch (e) {

		}
	});


	//竞猜下注
	$(document).on('click', '.guess-option a', function (e) {
		e.preventDefault();
		var dataId = $(this).data('id');
		var teamId = $(this).data('team');
		var teamName = $(this).data('teamname');
		var dataOdd = $(this).data('odd');
		if ($('.guess').data('staus') == 2) {
			try {
				$(this).addClass('click-style');
				setTimeout(function(){
					$('.guess-option a').removeClass('click-style');
					Jnapp.jn_betting(dataId + '', teamId * 1, teamName + '', dataOdd + '');
				},150);
			} catch (e) {

			}
		}

	});
	//更多规则跳转
	$(document).on('click', '.guess-tip a', function (e) {
		e.preventDefault();
		try {
			Jnapp.jn_showPage(200);
		} catch (e) {

		}
	});
	//如何上榜跳转
	$(document).on('click', '.richers-title a', function (e) {
		e.preventDefault();
		try {
			Jnapp.jn_showPage(201);
		} catch (e) {

		}
	});


});


