$(function(){

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

        function renderData(reviewsData){
            var htmlStr = '';
            if ( reviewsData.hots.length > 0) {
                htmlStr += '<div class="list"><h3>竞猜评论</h3><ul id="news_list">';
                htmlStr += '<section class="hot-reviews">';
                $.each(reviewsData.hots, function (hotIdx, hotContent) {
                    htmlStr += '<div class="reviews-box">';
                    htmlStr += '<div class="reviews-header"><img src="' + hotContent.passport.img_url + '" alt=""/>' + '</div>';
                    htmlStr += '<div class="reviews-right">';
                    htmlStr += '<span class="reviews-name">' + hotContent.passport.nickname + '</span>';
                    htmlStr += '<span class="reviews-time">' + getDatediff(hotContent.create_time) + '</span>';
                    htmlStr += '<p class="reviews-content">' + hotContent.content + '</p></div></div>';
                });
                htmlStr += '</section>';
            } else {
                htmlStr += '<p class="reviews-content"> 默认无评论图 </p></div></div>';
            }

            $('.revies').html(htmlStr);
        }



    $.ajax({
        url: 'data/review.json',
        type: "GET",
        dataType: 'json',
        success: function (reviews) {
            renderData(reviews.data);
        },
        error: function (err) {
            alert('失败:' + err);
        }
    });


});