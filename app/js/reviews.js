//'use strict'
//window.Jn = {};
//var result;
//
//Jn.addComment = function(reviewsData){
//    isLoading = false;
//    if (reviewsData.code == '10000') {
//        renderData(reviewsData.data);
//    }
//};



    function getDatediff(timeStamp) {
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var now = new Date().getTime();
        var diffValue = now - timeStamp;
        if (diffValue < 0) {
            return;
        }
        var dayBefore = diffValue / day;
        var hourBefore = diffValue / hour;
        var minBefore = diffValue / minute;
        if (dayBefore >= 1) {
            var date = new Date(timeStamp);
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

    function moreReview(comments){
        var htmlRev = '';
        if(comments.length>0){
            $.each(comments,function(childIndex,childContent){
                if(comments.length > 1 && comments.length < 4){
                    htmlRev += '<div class="reviews-children"><p class="child-title clearfix">' + (childIndex+1) +'.&ensp;'+ childContent.passport.nickname +  '<a href="#" class="nickname-right"><img src="images/review-zan_2x.png" alt=""></a></p><p class="child-content">' + childContent.content + '</p></div>';
                }else{
                    if(childIndex == 0){
                        htmlRev += '<div class="reviews-children" ><p class="child-title">1.&ensp;'+ childContent.passport.nickname +  '<a href="#" class="nickname-right"><img src="images/review-zan_2x.png" alt=""></a></p><p class="child-content">' + childContent.content + '</p></div>';
                    }else if(childIndex > 0 && childIndex < comments.length-2){
                        htmlRev += '<div><div class="reviews-children center-more" style="display: none" ><p class="child-title clearfix">' + (childIndex+1) +'.&nbsp;'+ childContent.passport.nickname +  '</p><p class="child-content">' + childContent.content + '</p></div><a href="#" class="show-all-reviews"><p>显示全部评论</p></a></div>';
                    } else if(childIndex == comments.length-2){
                        htmlRev += '<div class="reviews-children" ><p class="child-title clearfix">' + (comments.length-1) +'.&ensp;'+ childContent.passport.nickname + '<a href="#" class="nickname-right"><img src="images/review-zan_2x.png" alt=""></a></p><p class="child-content">' + childContent.content + '</p></div>';
                    }else if(childIndex == comments.length-1){
                        htmlRev += '<div class="reviews-children" ><p class="child-title clearfix">' + comments.length +'.&ensp;'+ childContent.passport.nickname +  '<a href="#" class="nickname-right"><img src="images/review-zan_2x.png" alt=""></a></p><p class="child-content">' + childContent.content + '</p></div>';
                    }

                }
            });
        }
    }

        function renderData(reviewsData){
            if (reviewsData) {
                htmlRev += '<div class="list"><h3>竞猜评论</h3><ul id="news_list">';
                htmlRev += '<section class="hot-reviews">';
                if(reviewsData.hots.length >= 5){
                    $.each(reviewsData.hots, function (hotIdx, hotContent) {
                        if(hotIdx<5){
                            htmlRev += '<div class="reviews-box">';
                            htmlRev += '<div class="reviews-header"><img src="' + hotContent.passport.img_url + '" alt=""/>' + '</div>';
                            htmlRev += '<div class="reviews-right">';
                            htmlRev += '<p class="clearfix"><span class="reviews-name">' + hotContent.passport.nickname + '</span><span class="nickname-right"><a href="#" class="reviews-zan"><img src="images/review-zan_2x.png" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>';
                            htmlRev += '<span class="reviews-time">' + getDatediff(hotContent.create_time*1000) + '</span>';
                            moreReview(hotContent.comments);
                            htmlRev += '<p class="reviews-content">' + hotContent.content + '</p></div></div>';
                        }
                    });
                }else{
                    if(reviewsData.hots.length == 0){
                        $.each(reviewsData.comments, function (idx, content) {
                                htmlRev += '<div class="reviews-box">';
                                htmlRev += '<div class="reviews-header"><img src="' + content.passport.img_url + '" alt=""/>' + '</div>';
                                htmlRev += '<div class="reviews-right">';
                            htmlRev += '<p class="clearfix"><span class="reviews-name">' + hotContent.passport.nickname + '</span><span class="nickname-right"><a href="#" class="reviews-zan"><img src="images/review-zan_2x.png" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>';
                                htmlRev += '<span class="reviews-time">' + getDatediff(content.create_time*1000) + '</span>';
                                moreReview(content.comments);
                                htmlRev += '<p class="reviews-content">' + content.content + '</p></div></div>';
                    });
                    }else if(reviewsData.hots.length > 0 &&reviewsData.hots.length<5 ){
                        htmlRev += '<div class="reviews-box">';
                        htmlRev += '<div class="reviews-header"><img src="' + hotContent.passport.img_url + '" alt=""/>' + '</div>';
                        htmlRev += '<div class="reviews-right">';
                        htmlRev += '<p class="clearfix"><span class="reviews-name">' + hotContent.passport.nickname + '</span><span class="nickname-right"><a href="#" class="reviews-zan"><img src="images/review-zan_2x.png" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>';
                        htmlRev += '<span class="reviews-time">' + getDatediff(hotContent.create_time*1000) + '</span>';
                        moreReview(hotContent.comments);
                        htmlRev += '<p class="reviews-content">' + hotContent.content + '</p></div></div>';
                        $.each(reviewsData.comments, function (idx, content) {
                            if(idx<5-reviewsData.hots.length){
                                htmlRev += '<div class="reviews-box">';
                                htmlRev += '<div class="reviews-header"><img src="' + content.passport.img_url + '" alt=""/>' + '</div>';
                                htmlRev += '<div class="reviews-right">';
                                htmlRev += '<p class="clearfix"><span class="reviews-name">' + hotContent.passport.nickname + '</span><span class="nickname-right"><a href="#" class="reviews-zan"><img src="images/review-zan_2x.png" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>';
                                htmlRev += '<span class="reviews-time">' + getDatediff(content.create_time*1000) + '</span>';
                                moreReview(content.comments);
                                htmlRev += '<p class="reviews-content">' + content.content + '</p></div></div>';
                            }
                        });
                    }
                }


                    //htmlRev += '</div></div>';

            htmlRev += '</section>';
            } else {
                htmlRev += '<div class="reviews-box"><img src="images/picture_2x.png>" alt=""></div>';
            }

            $('.reviews').html(htmlRev);
        }



$(function(){


    //$.ajax({
    //    url: 'data/review.json',
    //    type: "GET",
    //    dataType: 'json',
    //    success: function (reviews) {
    //        renderData(reviews.data);
    //    },
    //    error: function (err) {
    //        alert('失败:' + err);
    //    }
    //});


});


