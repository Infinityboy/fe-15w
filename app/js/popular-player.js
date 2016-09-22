'use strict';

window.Jn={};
Jn.setData = function (data) {
    if (data.key == 'popularPlayer') {
        renderData(data.content);
    }else if(data.key == 'popularTeam'){
        renderData(data.content);
    }
};

function renderData(data){
    var oWrap = $('.wrap');
    var htmlStr = '<section>';
        htmlStr+= '<div class="popular-bg">';
        htmlStr+= '<div class="mask">';
        htmlStr+= '<div class="sale-describe">';
        htmlStr+= '<div class="sale-left">';
        htmlStr+= '<p>本期排行:'+data.period+'</p></div>';
        htmlStr+= '<div class="sale-right">';
        htmlStr+= '<p>距本期结束还有<em class="sale-time-describe">'+data.timeleft+'</em>天</p>';
        htmlStr+= '<p>榜单每五分钟刷新一次</p></div></div>';
        htmlStr+= '<div class="most-popular-players">';
        htmlStr+= '<div class="popular-box" data-id="'+data.list[1].dataId+'" data-type="'+data.list[1].articleType+'">';
        htmlStr+= '<div class="player-img"><img src="'+data.list[1].thumbnail+'" alt=""/></div>';
        htmlStr+= '<div class="player-sec-box">';
        htmlStr+= '<div class="player-sec-icon"><img src="images/Second_2x.png.png" alt=""/></div>';
        htmlStr+= '<span class="player-pact">'+data.list[1].sname+'</span>';
        htmlStr+= '<span>'+data.list[1].goods+'</span></div></div>';
        htmlStr+= '<div class="popular-box first" data-id="'+data.list[0].dataId+'" data-type="'+data.list[0].articleType+'">';
        htmlStr+= '<div class="player-img-first"><img src="'+data.list[0].thumbnail+'" alt=""/></div>';
        htmlStr+= '<div class="player-sec-box">';
        htmlStr+= '<div class="player-sec-icon"><img src="images/first_2x.png.png" alt=""/></div>';
        htmlStr+= '<span class="player-pact">'+data.list[0].sname+'</span>';
        htmlStr+= '<span>'+data.list[0].goods+'</span></div></div>';
        htmlStr+= '<div class="popular-box" data-id="'+data.list[2].dataId+'" data-type="'+data.list[2].articleType+'">';
        htmlStr+= '<div class="player-img"><img src="'+data.list[2].thumbnail+'" alt=""/></div>';
        htmlStr+= '<div class="player-sec-box">';
        htmlStr+= '<div class="player-sec-icon"><img src="images/Third_2x.png.png" alt=""/></div>';
        htmlStr+= '<span class="player-pact">'+data.list[2].sname+'</span>';
        htmlStr+= '<span>'+data.list[2].goods+'</span>';
        htmlStr+= '</div></div></div></div></div></section>';
        htmlStr+= '<section class="popular-players" >';
        if(data.list.length>0){
            $.each(data.list,function(index,item){
                if(index<9){
                    var rank = '0' + item.ranking;
                }else{
                    rank = item.ranking;
                }if(index>=3){
                    htmlStr+= '<a href="###" class="popular-skip" data-id="'+item.dataId+'" data-type="'+item.articleType+'">';
                    htmlStr+= '<div class="popular-players-list">';
                    htmlStr+= '<div class="rank" ><span>'+rank+'</span></div>';
                    htmlStr+= '<div class="rank-head"><img src="'+item.thumbnail+'" alt=""/></div>';
                    htmlStr+= '<div class="players-list-pact"><span>'+item.sname+'</span></div>';
                    htmlStr+= '<div class="grades"><span>'+item.goods+'</span></div></div></a>';
                }

            });
        }

        htmlStr+= '</section>';

    oWrap.html(htmlStr);
}


$(function(){

     //$.ajax({
     //    url: 'http://api.15w.com/client/app/jn/v1_3/game/ranking?typeId=player',
     //    type: "GET",
     //    dataType: 'jsonp',
     //    success: function (res) {
     //        renderData(res.data);
     //    },
     //    error: function (err) {
     //        alert('失败:' + err);
     //    }
     //});
    $(document).on('click','.popular-box',function(e){
        e.preventDefault();
        try{
            var stringType,
                dataId = $(this).data('id'),
                typeId = $(this).data('type');
            if(typeId  == 13){
                stringType = 'player';
            }else if(typeId  == 14){
                stringType = 'team';
            }
            //console.log(stringType, dataId);
            Jnapp.jn_openPage(stringType, dataId+'');
        }catch(e){

        }
    });

    $(document).on('click','.popular-players a',function(e){
        e.preventDefault();
        try{
            var stringType,
                dataId = $(this).data('id'),
                typeId = $(this).data('type');
            if(typeId  == 13){
                stringType = 'player';
            }else if(typeId  == 14){
                stringType = 'team';
            }
            //console.log(stringType, dataId);
            Jnapp.jn_openPage(stringType, dataId+'');
        }catch(e){

        }
    });


});