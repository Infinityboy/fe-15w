/**
 * Created by admin on 2016/5/6.
 */
'use strict';
window.Jn = {};
var cacheData = null;
Jn.setData = function (data) {
    if (data.key == 'newsInitDetail') {
        renderData(data.content);
    }
};
Jn.addComment = function(reviewsData){
    isLoading = false;
    if (reviewsData.code == '10000') {
        renderData(reviewsData.data);
    }
};
Jn.changeFontSize = function(fontStype){
    var indent = $('.indent p');
    if(fontStype == 1){
        indent.css('font-size','76%');
    }else if(fontStype == 2){
    }else if(fontStype == 3){
        indent.css('font-size','124%');
    }else if(fontStype == 4){
        indent.css('font-size','136%');
    }else if(fontStype == 5){
        indent.css('font-size','148%');
    }
}
//var dataC = {
//    data:{
//        "comments": [
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1191477110,
//                "comments": [
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1191343693,
//                        "comments": [
//
//                        ],
//                        "content": "常州\n",
//                        "create_time": 1477454447000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "218.92.116.250",
//                        "ip_location": "江苏省连云港市",
//                        "metadata": "{\"clientPort\":\"60863\"}",
//                        "metadataAsJson": {
//                            "clientPort": "60863"
//                        },
//                        "oppose_count": 0,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://sucimg.itc.cn/avatarimg/521252034_1477454446649_c55",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "卍",
//                            "platform_id": 3,
//                            "user_id": 521252034
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 1190945138,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 0,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 1,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 1,
//                            "title": "潜水",
//                            "userId": 0
//                        },
//                        "user_id": 521252034
//                    },
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1190945138,
//                        "comments": [
//
//                        ],
//                        "content": "还是我认作你爹吧儿子。看清楚泉州",
//                        "create_time": 1477419599000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "171.90.194.81",
//                        "ip_location": "四川省",
//                        "metadata": "{\"clientPort\":\"56019\"}",
//                        "metadataAsJson": {
//                            "clientPort": "56019"
//                        },
//                        "oppose_count": 0,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://sucimg.itc.cn/avatarimg/88298794_1382424931899_c55",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "◤◇救赎◇◢",
//                            "platform_id": 3,
//                            "user_id": 88298794
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 1190802024,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 1,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 3,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 88298794
//                    },
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1190802024,
//                        "comments": [
//
//                        ],
//                        "content": "大洋洲   北美洲  亚洲  ",
//                        "create_time": 1477411618000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "14.145.33.232",
//                        "ip_location": "广东省广州市",
//                        "metadata": "{\"clientPort\":\"57367\"}",
//                        "metadataAsJson": {
//                            "clientPort": "57367"
//                        },
//                        "oppose_count": 1,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "111acc",
//                            "platform_id": 3,
//                            "user_id": 309094931
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 1188327425,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 0,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 3,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 309094931
//                    },
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1188327425,
//                        "comments": [
//
//                        ],
//                        "content": "老徐，梅州，杭州，福州，苏州，温州。你能再说出一个州，我当场认做你爹",
//                        "create_time": 1477194719000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "39.89.169.18",
//                        "ip_location": "",
//                        "metadata": "{\"clientPort\":\"56380\"}",
//                        "metadataAsJson": {
//                            "clientPort": "56380"
//                        },
//                        "oppose_count": 2,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "郭大鲜",
//                            "platform_id": 3,
//                            "user_id": 209728247
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 0,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 19,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 3,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 209728247
//                    }
//                ],
//                "content": "徐老师",
//                "create_time": 1477462908000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "15W电竞头条客户端",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "117.114.147.166",
//                "ip_location": "北京市",
//                "metadata": "{\"clientPort\":\"57330\"}",
//                "metadataAsJson": {
//                    "clientPort": "57330"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://files.15w.com/user/2016/0517/56101182266843.jpg",
//                    "is_official": false,
//                    "is_shared": false,
//                    "isv_refer_id": "5610118226",
//                    "isv_refer_metadata": "",
//                    "nickname": "JinYong",
//                    "platform_id": -1,
//                    "profile_url": "",
//                    "user_id": 485082927
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 1191343693,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 24,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 485082927
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1191343693,
//                "comments": [
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1190945138,
//                        "comments": [
//
//                        ],
//                        "content": "还是我认作你爹吧儿子。看清楚泉州",
//                        "create_time": 1477419599000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "171.90.194.81",
//                        "ip_location": "四川省",
//                        "metadata": "{\"clientPort\":\"56019\"}",
//                        "metadataAsJson": {
//                            "clientPort": "56019"
//                        },
//                        "oppose_count": 0,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://sucimg.itc.cn/avatarimg/88298794_1382424931899_c55",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "◤◇救赎◇◢",
//                            "platform_id": 3,
//                            "user_id": 88298794
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 1190802024,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 1,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 3,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 88298794
//                    },
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1190802024,
//                        "comments": [
//
//                        ],
//                        "content": "大洋洲   北美洲  亚洲  ",
//                        "create_time": 1477411618000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "14.145.33.232",
//                        "ip_location": "广东省广州市",
//                        "metadata": "{\"clientPort\":\"57367\"}",
//                        "metadataAsJson": {
//                            "clientPort": "57367"
//                        },
//                        "oppose_count": 1,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "111acc",
//                            "platform_id": 3,
//                            "user_id": 309094931
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 1188327425,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 0,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 3,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 309094931
//                    },
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1188327425,
//                        "comments": [
//
//                        ],
//                        "content": "老徐，梅州，杭州，福州，苏州，温州。你能再说出一个州，我当场认做你爹",
//                        "create_time": 1477194719000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "39.89.169.18",
//                        "ip_location": "",
//                        "metadata": "{\"clientPort\":\"56380\"}",
//                        "metadataAsJson": {
//                            "clientPort": "56380"
//                        },
//                        "oppose_count": 2,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "郭大鲜",
//                            "platform_id": 3,
//                            "user_id": 209728247
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 0,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 19,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 3,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 209728247
//                    }
//                ],
//                "content": "常州\n",
//                "create_time": 1477454447000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "218.92.116.250",
//                "ip_location": "江苏省连云港市",
//                "metadata": "{\"clientPort\":\"60863\"}",
//                "metadataAsJson": {
//                    "clientPort": "60863"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://sucimg.itc.cn/avatarimg/521252034_1477454446649_c55",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "卍",
//                    "platform_id": 3,
//                    "user_id": 521252034
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 1190945138,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 1,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 1,
//                    "title": "潜水",
//                    "userId": 0
//                },
//                "user_id": 521252034
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1191318530,
//                "comments": [
//
//                ],
//                "content": "我要上片尾！",
//                "create_time": 1477453118000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "15W电竞头条客户端",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "139.224.70.160",
//                "ip_location": "",
//                "metadata": "metadata",
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://files.15w.com/user/2016/1025/56214196862105.jpg",
//                    "is_official": false,
//                    "is_shared": false,
//                    "isv_refer_id": "5621419686",
//                    "isv_refer_metadata": "",
//                    "nickname": "路崽子",
//                    "platform_id": -1,
//                    "profile_url": "",
//                    "user_id": 521189750
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 5,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 521189750
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1191317859,
//                "comments": [
//
//                ],
//                "content": "为啥我看英雄原稿看到了克烈骑着人马？为啥克烈有好几个英雄的技能",
//                "create_time": 1477453102000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "15W电竞头条客户端",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "139.224.70.160",
//                "ip_location": "",
//                "metadata": "metadata",
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://files.15w.com/user/2016/1025/56214196862105.jpg",
//                    "is_official": false,
//                    "is_shared": false,
//                    "isv_refer_id": "5621419686",
//                    "isv_refer_metadata": "",
//                    "nickname": "路崽子",
//                    "platform_id": -1,
//                    "profile_url": "",
//                    "user_id": 521189750
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 5,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 521189750
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1191317943,
//                "comments": [
//
//                ],
//                "content": "男刀，跟刀妹什么关系",
//                "create_time": 1477453045000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "15W电竞头条客户端",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "139.224.70.160",
//                "ip_location": "",
//                "metadata": "metadata",
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://files.15w.com/user/2016/1025/56214196862105.jpg",
//                    "is_official": false,
//                    "is_shared": false,
//                    "isv_refer_id": "5621419686",
//                    "isv_refer_metadata": "",
//                    "nickname": "路崽子",
//                    "platform_id": -1,
//                    "profile_url": "",
//                    "user_id": 521189750
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 5,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 521189750
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1191316402,
//                "comments": [
//
//                ],
//                "content": "36E要上片尾？为啥男的没有？",
//                "create_time": 1477452967000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "15W电竞头条客户端",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "139.224.70.160",
//                "ip_location": "",
//                "metadata": "metadata",
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://files.15w.com/user/2016/1025/56214196862105.jpg",
//                    "is_official": false,
//                    "is_shared": false,
//                    "isv_refer_id": "5621419686",
//                    "isv_refer_metadata": "",
//                    "nickname": "路崽子",
//                    "platform_id": -1,
//                    "profile_url": "",
//                    "user_id": 521189750
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 5,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 521189750
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1191206395,
//                "comments": [
//
//                ],
//                "content": "徐老师，如果敌方英雄被莫甘娜或者拉克丝Q中了，那人马的E技能还能不能踢开",
//                "create_time": 1477444796000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "15W电竞头条客户端",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "223.104.25.79",
//                "ip_location": "",
//                "metadata": "metadata",
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://files.15w.com/user/2016/1016/5620276426909.jpg",
//                    "is_official": false,
//                    "is_shared": false,
//                    "isv_refer_id": "5620276426",
//                    "isv_refer_metadata": "",
//                    "nickname": "电竞头条加油",
//                    "platform_id": -1,
//                    "profile_url": "",
//                    "user_id": 517257244
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 1,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 3,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 517257244
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1191004505,
//                "comments": [
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1188327425,
//                        "comments": [
//
//                        ],
//                        "content": "老徐，梅州，杭州，福州，苏州，温州。你能再说出一个州，我当场认做你爹",
//                        "create_time": 1477194719000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "39.89.169.18",
//                        "ip_location": "",
//                        "metadata": "{\"clientPort\":\"56380\"}",
//                        "metadataAsJson": {
//                            "clientPort": "56380"
//                        },
//                        "oppose_count": 2,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "郭大鲜",
//                            "platform_id": 3,
//                            "user_id": 209728247
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 0,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 19,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 3,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 209728247
//                    }
//                ],
//                "content": "八宝州  贵州",
//                "create_time": 1477423263000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "119.0.253.156",
//                "ip_location": "",
//                "metadata": "{\"clientPort\":\"51200\"}",
//                "metadataAsJson": {
//                    "clientPort": "51200"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://sucimg.itc.cn/avatarimg/353653099_1454101928574_c55",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "大洋亿",
//                    "platform_id": 3,
//                    "user_id": 353653099
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 1188327425,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 7,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 353653099
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190960699,
//                "comments": [
//
//                ],
//                "content": "尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝月和魔法王座 滚吧！ 去尼玛的贪玩蓝",
//                "create_time": 1477420451000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "121.9.64.198",
//                "ip_location": "广东省佛山市",
//                "metadata": "{\"clientPort\":\"58439\"}",
//                "metadataAsJson": {
//                    "clientPort": "58439"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "速度点滴",
//                    "platform_id": 3,
//                    "user_id": 294230134
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 1,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 8,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 294230134
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190945138,
//                "comments": [
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1190802024,
//                        "comments": [
//
//                        ],
//                        "content": "大洋洲   北美洲  亚洲  ",
//                        "create_time": 1477411618000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "14.145.33.232",
//                        "ip_location": "广东省广州市",
//                        "metadata": "{\"clientPort\":\"57367\"}",
//                        "metadataAsJson": {
//                            "clientPort": "57367"
//                        },
//                        "oppose_count": 1,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "111acc",
//                            "platform_id": 3,
//                            "user_id": 309094931
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 1188327425,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 0,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 3,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 309094931
//                    },
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1188327425,
//                        "comments": [
//
//                        ],
//                        "content": "老徐，梅州，杭州，福州，苏州，温州。你能再说出一个州，我当场认做你爹",
//                        "create_time": 1477194719000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "39.89.169.18",
//                        "ip_location": "",
//                        "metadata": "{\"clientPort\":\"56380\"}",
//                        "metadataAsJson": {
//                            "clientPort": "56380"
//                        },
//                        "oppose_count": 2,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "郭大鲜",
//                            "platform_id": 3,
//                            "user_id": 209728247
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 0,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 19,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 3,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 209728247
//                    }
//                ],
//                "content": "还是我认作你爹吧儿子。看清楚泉州",
//                "create_time": 1477419599000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "171.90.194.81",
//                "ip_location": "四川省",
//                "metadata": "{\"clientPort\":\"56019\"}",
//                "metadataAsJson": {
//                    "clientPort": "56019"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://sucimg.itc.cn/avatarimg/88298794_1382424931899_c55",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "◤◇救赎◇◢",
//                    "platform_id": 3,
//                    "user_id": 88298794
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 1190802024,
//                "score": 0,
//                "status": 0,
//                "support_count": 1,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 3,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 88298794
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190935242,
//                "comments": [
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1188327425,
//                        "comments": [
//
//                        ],
//                        "content": "老徐，梅州，杭州，福州，苏州，温州。你能再说出一个州，我当场认做你爹",
//                        "create_time": 1477194719000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "39.89.169.18",
//                        "ip_location": "",
//                        "metadata": "{\"clientPort\":\"56380\"}",
//                        "metadataAsJson": {
//                            "clientPort": "56380"
//                        },
//                        "oppose_count": 2,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "郭大鲜",
//                            "platform_id": 3,
//                            "user_id": 209728247
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 0,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 19,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 3,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 209728247
//                    }
//                ],
//                "content": "还是我认作你爹吧。儿子泉州",
//                "create_time": 1477419578000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "171.90.194.81",
//                "ip_location": "四川省",
//                "metadata": "{\"clientPort\":\"56007\"}",
//                "metadataAsJson": {
//                    "clientPort": "56007"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://sucimg.itc.cn/avatarimg/88298794_1382424931899_c55",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "◤◇救赎◇◢",
//                    "platform_id": 3,
//                    "user_id": 88298794
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 1188327425,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 3,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 88298794
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190922443,
//                "comments": [
//
//                ],
//                "content": "你们说末日人机好不好打。任为好打的顶起。\n\n",
//                "create_time": 1477418230000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "60.174.109.208",
//                "ip_location": "安徽省亳州市",
//                "metadata": "{\"clientPort\":\"60056\"}",
//                "metadataAsJson": {
//                    "clientPort": "60056"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://sucimg.itc.cn/avatarimg/521152236_1477418164890_c55",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "初夏晨曦",
//                    "platform_id": 3,
//                    "user_id": 521152236
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 1,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 1,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 1,
//                    "title": "潜水",
//                    "userId": 0
//                },
//                "user_id": 521152236
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190857101,
//                "comments": [
//
//                ],
//                "content": "徐老吊我想知道两个基佬僧隔一堵墙一起二段q会发生什么不可思议的事情",
//                "create_time": 1477416145000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "15W电竞头条客户端",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "42.238.152.214",
//                "ip_location": "河南省",
//                "metadata": "metadata",
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://files.15w.com/user/2016/1026/56214323863654.jpg",
//                    "is_official": false,
//                    "is_shared": false,
//                    "isv_refer_id": "5621432386",
//                    "isv_refer_metadata": "",
//                    "nickname": "毕竟无情",
//                    "platform_id": -1,
//                    "profile_url": "",
//                    "user_id": 521148725
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 2,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 521148725
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190858758,
//                "comments": [
//
//                ],
//                "content": "。",
//                "create_time": 1477416064000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "15W电竞头条客户端",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "42.238.152.214",
//                "ip_location": "河南省",
//                "metadata": "metadata",
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://files.15w.com/user/2016/1026/56214323863654.jpg",
//                    "is_official": false,
//                    "is_shared": false,
//                    "isv_refer_id": "5621432386",
//                    "isv_refer_metadata": "",
//                    "nickname": "毕竟无情",
//                    "platform_id": -1,
//                    "profile_url": "",
//                    "user_id": 521148725
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 2,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 521148725
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190802024,
//                "comments": [
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1188327425,
//                        "comments": [
//
//                        ],
//                        "content": "老徐，梅州，杭州，福州，苏州，温州。你能再说出一个州，我当场认做你爹",
//                        "create_time": 1477194719000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "39.89.169.18",
//                        "ip_location": "",
//                        "metadata": "{\"clientPort\":\"56380\"}",
//                        "metadataAsJson": {
//                            "clientPort": "56380"
//                        },
//                        "oppose_count": 2,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "郭大鲜",
//                            "platform_id": 3,
//                            "user_id": 209728247
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 0,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 19,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 3,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 209728247
//                    }
//                ],
//                "content": "大洋洲   北美洲  亚洲  ",
//                "create_time": 1477411618000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "14.145.33.232",
//                "ip_location": "广东省广州市",
//                "metadata": "{\"clientPort\":\"57367\"}",
//                "metadataAsJson": {
//                    "clientPort": "57367"
//                },
//                "oppose_count": 1,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "111acc",
//                    "platform_id": 3,
//                    "user_id": 309094931
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 1188327425,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 3,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 309094931
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190801726,
//                "comments": [
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1188327425,
//                        "comments": [
//
//                        ],
//                        "content": "老徐，梅州，杭州，福州，苏州，温州。你能再说出一个州，我当场认做你爹",
//                        "create_time": 1477194719000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "39.89.169.18",
//                        "ip_location": "",
//                        "metadata": "{\"clientPort\":\"56380\"}",
//                        "metadataAsJson": {
//                            "clientPort": "56380"
//                        },
//                        "oppose_count": 2,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "郭大鲜",
//                            "platform_id": 3,
//                            "user_id": 209728247
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 0,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 19,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 3,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 209728247
//                    }
//                ],
//                "content": "皮蛋瘦肉粥",
//                "create_time": 1477411597000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "14.145.33.232",
//                "ip_location": "广东省广州市",
//                "metadata": "{\"clientPort\":\"57357\"}",
//                "metadataAsJson": {
//                    "clientPort": "57357"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "111acc",
//                    "platform_id": 3,
//                    "user_id": 309094931
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 1188327425,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 3,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 309094931
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190800987,
//                "comments": [
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1188327425,
//                        "comments": [
//
//                        ],
//                        "content": "老徐，梅州，杭州，福州，苏州，温州。你能再说出一个州，我当场认做你爹",
//                        "create_time": 1477194719000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "39.89.169.18",
//                        "ip_location": "",
//                        "metadata": "{\"clientPort\":\"56380\"}",
//                        "metadataAsJson": {
//                            "clientPort": "56380"
//                        },
//                        "oppose_count": 2,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "郭大鲜",
//                            "platform_id": 3,
//                            "user_id": 209728247
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 0,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 19,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 3,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 209728247
//                    }
//                ],
//                "content": "皮蛋瘦肉粥",
//                "create_time": 1477411585000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "14.145.33.232",
//                "ip_location": "广东省广州市",
//                "metadata": "{\"clientPort\":\"57348\"}",
//                "metadataAsJson": {
//                    "clientPort": "57348"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "111acc",
//                    "platform_id": 3,
//                    "user_id": 309094931
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 1188327425,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 3,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 309094931
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190761664,
//                "comments": [
//                    {
//                        "attachments": [
//                            {
//                                "type": 1,
//                                "url": "http://0d077ef9e74d8.cdn.sohucs.com/pwKCP7L_png"
//                            }
//                        ],
//                        "comment_id": 1190034126,
//                        "comments": [
//
//                        ],
//                        "content": "666\n这个套路不是一般的深",
//                        "create_time": 1477376781000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "117.30.223.174",
//                        "ip_location": "福建省",
//                        "metadata": "{\"clientPort\":\"53600\"}",
//                        "metadataAsJson": {
//                            "clientPort": "53600"
//                        },
//                        "oppose_count": 0,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://sucimg.itc.cn/avatarimg/421913185_1465516909572_c55",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "噢弟弟救我",
//                            "platform_id": 3,
//                            "user_id": 421913185
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 1190016256,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 0,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 2,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 421913185
//                    },
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1190016256,
//                        "comments": [
//
//                        ],
//                        "content": "广州",
//                        "create_time": 1477372979000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "121.34.147.45",
//                        "ip_location": "广东省深圳市",
//                        "metadata": "{\"clientPort\":\"1872\"}",
//                        "metadataAsJson": {
//                            "clientPort": "1872"
//                        },
//                        "oppose_count": 0,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "白天不懂夜的黑031",
//                            "platform_id": 3,
//                            "user_id": 84562639
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 1188327425,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 1,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 3,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 84562639
//                    },
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1188327425,
//                        "comments": [
//
//                        ],
//                        "content": "老徐，梅州，杭州，福州，苏州，温州。你能再说出一个州，我当场认做你爹",
//                        "create_time": 1477194719000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "39.89.169.18",
//                        "ip_location": "",
//                        "metadata": "{\"clientPort\":\"56380\"}",
//                        "metadataAsJson": {
//                            "clientPort": "56380"
//                        },
//                        "oppose_count": 2,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "郭大鲜",
//                            "platform_id": 3,
//                            "user_id": 209728247
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 0,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 19,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 3,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 209728247
//                    }
//                ],
//                "content": " 城市套路深 我要回农村",
//                "create_time": 1477407637000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "125.84.93.53",
//                "ip_location": "重庆市",
//                "metadata": "{\"clientPort\":\"3263\"}",
//                "metadataAsJson": {
//                    "clientPort": "3263"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://wx.qlogo.cn/mmopen/JxIniczvibMgT9LJGX3U3PuxWu8SQjmm7xSW7QI5KicgAW2u39QH99SaPuPq5vg1jXmI8bueYCeNduLHoGayUdf2icAHLzyAppQH/0",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "想念",
//                    "platform_id": 16,
//                    "user_id": 521105246
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 1190034126,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 1,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 1,
//                    "title": "潜水",
//                    "userId": 0
//                },
//                "user_id": 521105246
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190742557,
//                "comments": [
//
//                ],
//                "content": "你们真的想上片尾？那么是在学校上吗？",
//                "create_time": 1477405980000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "15W电竞头条客户端",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "140.237.103.94",
//                "ip_location": "",
//                "metadata": "metadata",
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://files.15w.com/user/2016/1025/56214089469694.jpg",
//                    "is_official": false,
//                    "is_shared": false,
//                    "isv_refer_id": "5621408946",
//                    "isv_refer_metadata": "",
//                    "nickname": "智慧火人",
//                    "platform_id": -1,
//                    "profile_url": "",
//                    "user_id": 521088489
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 1,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 1,
//                    "title": "潜水",
//                    "userId": 0
//                },
//                "user_id": 521088489
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190724390,
//                "comments": [
//
//                ],
//                "content": "这个世界就是那么奇妙，没办法",
//                "create_time": 1477404141000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "15W电竞头条客户端",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "101.24.93.76",
//                "ip_location": "河北省",
//                "metadata": "metadata",
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://files.15w.com/user/2016/1025/56214028467541.jpg",
//                    "is_official": false,
//                    "is_shared": false,
//                    "isv_refer_id": "5621402846",
//                    "isv_refer_metadata": "",
//                    "nickname": "『未』ア成ラプ年シ",
//                    "platform_id": -1,
//                    "profile_url": "",
//                    "user_id": 521072736
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 2,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 521072736
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190717088,
//                "comments": [
//
//                ],
//                "content": "我想知道婕拉的e和石头人的大招撞在一起会怎样，，，求视频",
//                "create_time": 1477403329000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "123.12.61.254",
//                "ip_location": "河南省新乡市",
//                "metadata": "{\"clientPort\":\"56471\"}",
//                "metadataAsJson": {
//                    "clientPort": "56471"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://0d077ef9e74d8.cdn.sohucs.com/fac494264beff70ed91fedf32783552b_default_1449556078067_jpg",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "15W电竞头条网友",
//                    "platform_id": 3,
//                    "user_id": 521061363
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 1,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 1,
//                    "title": "潜水",
//                    "userId": 0
//                },
//                "user_id": 521061363
//            },
//            {
//                "attachments": [
//                    {
//                        "type": 1,
//                        "url": "http://comment.bjcnc.img.sohucs.com/pHKeFa4_gif"
//                    }
//                ],
//                "comment_id": 1190696875,
//                "comments": [
//
//                ],
//                "content": "你妈的坑",
//                "create_time": 1477402091000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "60.160.227.225",
//                "ip_location": "云南省文山壮族苗族自治州",
//                "metadata": "{\"clientPort\":\"52435\"}",
//                "metadataAsJson": {
//                    "clientPort": "52435"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://0d077ef9e74d8.cdn.sohucs.com/fac494264beff70ed91fedf32783552b_default_1449556055750_jpg",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "15W电竞头条网友",
//                    "platform_id": 3,
//                    "user_id": 521052512
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 1,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 1,
//                    "title": "潜水",
//                    "userId": 0
//                },
//                "user_id": 521052512
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190678014,
//                "comments": [
//
//                ],
//                "content": "来中一箭。。",
//                "create_time": 1477400914000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "49.67.241.88",
//                "ip_location": "江苏省南通市",
//                "metadata": "{\"clientPort\":\"17709\"}",
//                "metadataAsJson": {
//                    "clientPort": "17709"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://sucimg.itc.cn/avatarimg/235532383_1429503406045_c55",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "只为结婚不交友",
//                    "platform_id": 3,
//                    "user_id": 235532383
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 6,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 235532383
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190638185,
//                "comments": [
//
//                ],
//                "content": "只有一个问题，你有表妹？\n",
//                "create_time": 1477398636000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "171.222.85.84",
//                "ip_location": "四川省",
//                "metadata": "{\"clientPort\":\"49590\"}",
//                "metadataAsJson": {
//                    "clientPort": "49590"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://sucimg.itc.cn/avatarimg/345512846_1451987491987_c55",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "杭州布可艺饰刺绣墙布",
//                    "platform_id": 3,
//                    "user_id": 345512846
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 3,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 345512846
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190629755,
//                "comments": [
//
//                ],
//                "content": "老徐，你说如果石头和狼人同时放大会怎么样呢？赞我让老徐看见\n",
//                "create_time": 1477397726000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "171.34.74.140",
//                "ip_location": "江西省",
//                "metadata": "{\"clientPort\":\"62981\"}",
//                "metadataAsJson": {
//                    "clientPort": "62981"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://0d077ef9e74d8.cdn.sohucs.com/fac494264beff70ed91fedf32783552b_default_1449556157637_jpg",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "15W电竞头条网友",
//                    "platform_id": 3,
//                    "user_id": 521007814
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 1,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 1,
//                    "title": "潜水",
//                    "userId": 0
//                },
//                "user_id": 521007814
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190595488,
//                "comments": [
//
//                ],
//                "content": "徐老师片尾好难上，你好上吗？",
//                "create_time": 1477395352000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "110.251.68.142",
//                "ip_location": "河北省廊坊市",
//                "metadata": "{\"clientPort\":\"51853\"}",
//                "metadataAsJson": {
//                    "clientPort": "51853"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://0d077ef9e74d8.cdn.sohucs.com/fac494264beff70ed91fedf32783552b_default_1449556163495_jpg",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "15W电竞头条网友",
//                    "platform_id": 3,
//                    "user_id": 520984880
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 1,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 1,
//                    "title": "潜水",
//                    "userId": 0
//                },
//                "user_id": 520984880
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190571900,
//                "comments": [
//
//                ],
//                "content": "老徐，大虫子大技能6层，血手，露露大技能，变大药剂能有多大",
//                "create_time": 1477393512000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "39.159.188.128",
//                "ip_location": "",
//                "metadata": "{\"clientPort\":\"51922\"}",
//                "metadataAsJson": {
//                    "clientPort": "51922"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://sucimg.itc.cn/avatarimg/520974753_1477393498903_c55",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "残羽漫天",
//                    "platform_id": 3,
//                    "user_id": 520974753
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 1,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 1,
//                    "title": "潜水",
//                    "userId": 0
//                },
//                "user_id": 520974753
//            },
//            {
//                "attachments": [
//                    {
//                        "type": 1,
//                        "url": "http://comment.bjcnc.img.sohucs.com/pHKgrho_gif"
//                    }
//                ],
//                "comment_id": 1190510314,
//                "comments": [
//
//                ],
//                "content": "老徐也是666",
//                "create_time": 1477388178000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "15W电竞头条客户端",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "180.155.163.126",
//                "ip_location": "上海市",
//                "metadata": "metadata",
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://files.15w.com/user/2016/1025/56213500267477.jpg",
//                    "is_official": false,
//                    "is_shared": false,
//                    "isv_refer_id": "5621350026",
//                    "isv_refer_metadata": "",
//                    "nickname": "剧毒黑蔷薇",
//                    "platform_id": -1,
//                    "profile_url": "",
//                    "user_id": 520939517
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 2,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 520939517
//            },
//            {
//                "attachments": [
//                    {
//                        "type": 1,
//                        "url": "http://0d077ef9e74d8.cdn.sohucs.com/pydY2fD_jpg"
//                    }
//                ],
//                "comment_id": 1190508106,
//                "comments": [
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1187730426,
//                        "comments": [
//
//                        ],
//                        "content": "不会被定住，以前巴德出的时候有这个视频\n",
//                        "create_time": 1477136683000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": false,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "27.152.56.14",
//                        "ip_location": "福建省",
//                        "metadata": "{\"clientPort\":\"2529\"}",
//                        "metadataAsJson": {
//                            "clientPort": "2529"
//                        },
//                        "oppose_count": 1,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "加肯龙",
//                            "platform_id": 3,
//                            "user_id": 283346871
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 1187659817,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 1,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 4,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 283346871
//                    },
//                    {
//                        "attachments": [
//
//                        ],
//                        "comment_id": 1187659817,
//                        "comments": [
//
//                        ],
//                        "content": "徐老师，如果巴德开大打中正在挖洞的雷克赛会怎样？求视频解释",
//                        "create_time": 1477122887000,
//                        "elite": false,
//                        "floor_count": 0,
//                        "from": "",
//                        "hide": true,
//                        "hide_floor": false,
//                        "highlight": false,
//                        "ip": "218.68.228.47",
//                        "ip_location": "天津市",
//                        "metadata": "{\"clientPort\":\"40798\"}",
//                        "metadataAsJson": {
//                            "clientPort": "40798"
//                        },
//                        "oppose_count": 117,
//                        "passport": {
//                            "expired": false,
//                            "fee": 0,
//                            "followers_count": 0,
//                            "from": "",
//                            "grant": false,
//                            "img_url": "http://sucimg.itc.cn/avatarimg/519188189_1477121702060_c55",
//                            "is_official": false,
//                            "is_shared": false,
//                            "nickname": "空城旧梦",
//                            "platform_id": 3,
//                            "user_id": 519188189
//                        },
//                        "quick": false,
//                        "reply_count": 0,
//                        "reply_id": 0,
//                        "score": 0,
//                        "status": 0,
//                        "support_count": 9,
//                        "top": false,
//                        "userScore": {
//                            "isvId": 0,
//                            "level": 2,
//                            "levelUp": 0,
//                            "privilege": {
//
//                            },
//                            "score": 7,
//                            "title": "冒泡",
//                            "userId": 0
//                        },
//                        "user_id": 519188189
//                    }
//                ],
//                "content": "你不要回复好吧，我要上片尾\n",
//                "create_time": 1477388047000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "218.68.228.47",
//                "ip_location": "天津市",
//                "metadata": "{\"clientPort\":\"40469\"}",
//                "metadataAsJson": {
//                    "clientPort": "40469"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://sucimg.itc.cn/avatarimg/519188189_1477121702060_c55",
//                    "is_official": false,
//                    "is_shared": false,
//                    "nickname": "空城旧梦",
//                    "platform_id": 3,
//                    "user_id": 519188189
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 1187730426,
//                "score": 0,
//                "status": 0,
//                "support_count": 1,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 7,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 519188189
//            },
//            {
//                "attachments": [
//
//                ],
//                "comment_id": 1190503320,
//                "comments": [
//
//                ],
//                "content": "求中奖",
//                "create_time": 1477387163000,
//                "elite": false,
//                "floor_count": 0,
//                "from": "15W电竞头条客户端",
//                "hide": false,
//                "hide_floor": false,
//                "highlight": false,
//                "ip": "223.104.12.156",
//                "ip_location": "",
//                "metadata": "{\"clientPort\":\"45111\"}",
//                "metadataAsJson": {
//                    "clientPort": "45111"
//                },
//                "oppose_count": 0,
//                "passport": {
//                    "expired": false,
//                    "fee": 0,
//                    "followers_count": 0,
//                    "from": "",
//                    "grant": false,
//                    "img_url": "http://files.15w.com/user/2016/1025/56213495067667.jpg",
//                    "is_official": false,
//                    "is_shared": false,
//                    "isv_refer_id": "5621349506",
//                    "isv_refer_metadata": "",
//                    "nickname": "孤独古",
//                    "platform_id": -1,
//                    "profile_url": "",
//                    "user_id": 520930786
//                },
//                "quick": false,
//                "reply_count": 0,
//                "reply_id": 0,
//                "score": 0,
//                "status": 0,
//                "support_count": 0,
//                "top": false,
//                "userScore": {
//                    "isvId": 0,
//                    "level": 2,
//                    "levelUp": 0,
//                    "privilege": {
//
//                    },
//                    "score": 2,
//                    "title": "冒泡",
//                    "userId": 0
//                },
//                "user_id": 520930786
//            }
//        ],
//        "expert": [
//
//        ],
//        "hots":[],
////    "hots": [
////      {
////        "attachments": [
////
////        ],
////        "comment_id": 1188495664,
////        "comments": [
////
////        ],
////        "content": "老徐老徐.我想知道男刀的另一把刀在谁身上",
////        "create_time": 1477229095000,
////        "elite": false,
////        "floor_count": 0,
////        "from": "",
////        "hide": false,
////        "hide_floor": false,
////        "highlight": false,
////        "ip": "111.128.195.42",
////        "ip_location": "福建省",
////        "metadata": "{\"clientPort\":\"55043\"}",
////        "metadataAsJson": {
////          "clientPort": "55043"
////        },
////        "oppose_count": 0,
////        "passport": {
////          "expired": false,
////          "fee": 0,
////          "followers_count": 0,
////          "from": "",
////          "grant": false,
////          "img_url": "http://sucimg.itc.cn/avatarimg/412381081_1464271903564_c55",
////          "is_official": false,
////          "is_shared": false,
////          "nickname": "Startbegi",
////          "platform_id": 3,
////          "user_id": 412381081
////        },
////        "quick": false,
////        "reply_count": 0,
////        "reply_id": 0,
////        "score": 0,
////        "status": 0,
////        "support_count": 18,
////        "top": false,
////        "userScore": {
////          "isvId": 0,
////          "level": 2,
////          "levelUp": 0,
////          "privilege": {
////
////          },
////          "score": 2,
////          "title": "冒泡",
////          "userId": 0
////        },
////        "user_id": 412381081
////      },
////      {
////        "attachments": [
////
////        ],
////        "comment_id": 1189586587,
////        "comments": [
////
////        ],
////        "content": "老徐呐，你说魔抗鞋不是有抗性提升么，狼人的大招有1.8秒的硬控并且攻击5次，那么问题来了，狼人会控制满1.8秒或者攻击5次么？",
////        "create_time": 1477294111000,
////        "elite": false,
////        "floor_count": 0,
////        "from": "",
////        "hide": false,
////        "hide_floor": false,
////        "highlight": false,
////        "ip": "180.127.112.66",
////        "ip_location": "江苏省连云港市",
////        "metadata": "{\"clientPort\":\"23072\"}",
////        "metadataAsJson": {
////          "clientPort": "23072"
////        },
////        "oppose_count": 0,
////        "passport": {
////          "expired": false,
////          "fee": 0,
////          "followers_count": 0,
////          "from": "",
////          "grant": false,
////          "img_url": "http://sucimg.itc.cn/avatarimg/487197176_1469898797367_c55",
////          "is_official": false,
////          "is_shared": false,
////          "nickname": "口干巴爹",
////          "platform_id": 3,
////          "user_id": 487197176
////        },
////        "quick": false,
////        "reply_count": 0,
////        "reply_id": 0,
////        "score": 0,
////        "status": 0,
////        "support_count": 2,
////        "top": false,
////        "userScore": {
////          "isvId": 0,
////          "level": 2,
////          "levelUp": 0,
////          "privilege": {
////
////          },
////          "score": 3,
////          "title": "冒泡",
////          "userId": 0
////        },
////        "user_id": 487197176
////      },
////      {
////        "attachments": [
////
////        ],
////        "comment_id": 1187952381,
////        "comments": [
////
////        ],
////        "content": "暴怒骑士的大招和亡灵战神的大招互撞会怎么样？  赞我让徐老师看到。",
////        "create_time": 1477179457000,
////        "elite": false,
////        "floor_count": 0,
////        "from": "",
////        "hide": false,
////        "hide_floor": false,
////        "highlight": false,
////        "ip": "42.85.173.75",
////        "ip_location": "辽宁省",
////        "metadata": "{\"reportReason\":\"4\",\"clientPort\":\"7234\"}",
////        "metadataAsJson": {
////          "reportReason": "4",
////          "clientPort": "7234"
////        },
////        "oppose_count": 59,
////        "passport": {
////          "expired": false,
////          "fee": 0,
////          "followers_count": 0,
////          "from": "",
////          "grant": false,
////          "img_url": "http://photo.pic.sohu.com/images/oldblog/person/11111.gif",
////          "is_official": false,
////          "is_shared": false,
////          "nickname": "1234564233",
////          "platform_id": 3,
////          "user_id": 256892642
////        },
////        "quick": false,
////        "reply_count": 0,
////        "reply_id": 0,
////        "score": 0,
////        "status": 0,
////        "support_count": 400,
////        "top": false,
////        "userScore": {
////          "isvId": 0,
////          "level": 2,
////          "levelUp": 0,
////          "privilege": {
////
////          },
////          "score": 10,
////          "title": "冒泡",
////          "userId": 0
////        },
////        "user_id": 256892642
////      },
////      {
////        "attachments": [
////
////        ],
////        "comment_id": 1188440923,
////        "comments": [
////
////        ],
////        "content": "周董，我是不会玩魔法王座的，别宣传了！首充只需要1元钱，我一角都不会充，地表带我超神？被宇天虐成狗！",
////        "create_time": 1477218821000,
////        "elite": false,
////        "floor_count": 0,
////        "from": "",
////        "hide": false,
////        "hide_floor": false,
////        "highlight": false,
////        "ip": "120.42.172.98",
////        "ip_location": "福建省泉州市",
////        "metadata": "{\"reportReason\":\"2\",\"clientPort\":\"1258\"}",
////        "metadataAsJson": {
////          "reportReason": "2",
////          "clientPort": "1258"
////        },
////        "oppose_count": 1,
////        "passport": {
////          "expired": false,
////          "fee": 0,
////          "followers_count": 0,
////          "from": "",
////          "grant": false,
////          "img_url": "http://sucimg.itc.cn/avatarimg/277608386_1439108851895_c55",
////          "is_official": false,
////          "is_shared": false,
////          "nickname": "遺忘",
////          "platform_id": 3,
////          "user_id": 277608386
////        },
////        "quick": false,
////        "reply_count": 0,
////        "reply_id": 0,
////        "score": 0,
////        "status": 0,
////        "support_count": 19,
////        "top": false,
////        "userScore": {
////          "isvId": 0,
////          "level": 2,
////          "levelUp": 0,
////          "privilege": {
////
////          },
////          "score": 15,
////          "title": "冒泡",
////          "userId": 0
////        },
////        "user_id": 277608386
////      },
////      {
////        "attachments": [
////
////        ],
////        "comment_id": 1188369909,
////        "comments": [
////
////        ],
////        "content": "不同阵营的6个瞎子围成一圈，同时Q中前方瞎子  同时二段  会咋样 赞我 让徐老湿看到",
////        "create_time": 1477202870000,
////        "elite": false,
////        "floor_count": 0,
////        "from": "",
////        "hide": false,
////        "hide_floor": false,
////        "highlight": false,
////        "ip": "175.7.79.202",
////        "ip_location": "湖南省",
////        "metadata": "{\"reportReason\":\"2\",\"clientPort\":\"6345\"}",
////        "metadataAsJson": {
////          "reportReason": "2",
////          "clientPort": "6345"
////        },
////        "oppose_count": 19,
////        "passport": {
////          "expired": false,
////          "fee": 0,
////          "followers_count": 0,
////          "from": "",
////          "grant": false,
////          "img_url": "http://sucimg.itc.cn/avatarimg/503989752_1472968357085_c55",
////          "is_official": false,
////          "is_shared": false,
////          "nickname": "吾一刀天下亡",
////          "platform_id": 3,
////          "user_id": 503989752
////        },
////        "quick": false,
////        "reply_count": 0,
////        "reply_id": 0,
////        "score": 0,
////        "status": 0,
////        "support_count": 75,
////        "top": false,
////        "userScore": {
////          "isvId": 0,
////          "level": 2,
////          "levelUp": 0,
////          "privilege": {
////
////          },
////          "score": 2,
////          "title": "冒泡",
////          "userId": 0
////        },
////        "user_id": 503989752
////      }
////    ],
//        "mode": 0,
//        "outer_cmt_sum": 4160,
//        "participation_sum": 34568,
//        "topic_id": 1839699065,
//        "total_page_no": 139,
//        "user_level": [
//            {
//                "exp": 0,
//                "isvId": 0,
//                "level": 1,
//                "privilege": 0,
//                "privilegeDesp": "{}",
//                "privilegeDespAsJson": {
//
//                },
//                "title": "潜水"
//            },
//            {
//                "exp": 2,
//                "isvId": 0,
//                "level": 2,
//                "privilege": 0,
//                "privilegeDesp": "{}",
//                "privilegeDespAsJson": {
//
//                },
//                "title": "冒泡"
//            },
//            {
//                "exp": 40,
//                "isvId": 0,
//                "level": 3,
//                "privilege": 0,
//                "privilegeDesp": "{}",
//                "privilegeDespAsJson": {
//
//                },
//                "title": "吐槽"
//            },
//            {
//                "exp": 100,
//                "isvId": 0,
//                "level": 4,
//                "privilege": 1,
//                "privilegeDesp": "{\"bold\":true}",
//                "privilegeDespAsJson": {
//                    "bold": true
//                },
//                "title": "活跃"
//            },
//            {
//                "exp": 500,
//                "isvId": 0,
//                "level": 5,
//                "privilege": 1,
//                "privilegeDesp": "{\"bold\":true}",
//                "privilegeDespAsJson": {
//                    "bold": true
//                },
//                "title": "话唠"
//            },
//            {
//                "exp": 2000,
//                "isvId": 0,
//                "level": 6,
//                "privilege": 1,
//                "privilegeDesp": "{\"bold\":true}",
//                "privilegeDespAsJson": {
//                    "bold": true
//                },
//                "title": "畅言"
//            },
//            {
//                "exp": 6000,
//                "isvId": 0,
//                "level": 7,
//                "privilege": 1,
//                "privilegeDesp": "{\"bold\":true}",
//                "privilegeDespAsJson": {
//                    "bold": true
//                },
//                "title": "专家"
//            },
//            {
//                "color": "#fffbcb",
//                "exp": 10000,
//                "isvId": 0,
//                "level": 8,
//                "privilege": 1,
//                "privilegeDesp": "{\"bold\":true,\"color\":\"#fffbcb\"}",
//                "privilegeDespAsJson": {
//                    "bold": true,
//                    "color": "#fffbcb"
//                },
//                "title": "大师"
//            },
//            {
//                "color": "#fffbcb",
//                "exp": 15000,
//                "isvId": 0,
//                "level": 9,
//                "privilege": 1,
//                "privilegeDesp": "{\"bold\":true,\"color\":\"#fffbcb\"}",
//                "privilegeDespAsJson": {
//                    "bold": true,
//                    "color": "#fffbcb"
//                },
//                "title": "传说"
//            },
//            {
//                "color": "#fffbcb",
//                "exp": 30000,
//                "isvId": 0,
//                "level": 10,
//                "privilege": 1,
//                "privilegeDesp": "{\"bold\":true,\"color\":\"#fffbcb\"}",
//                "privilegeDespAsJson": {
//                    "bold": true,
//                    "color": "#fffbcb"
//                },
//                "title": "神话"
//            }
//        ]
//    }
//};
function getDatediff(timeStamp) {
    var result;
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

function renderData(data) {
    cacheData = data;
    var title = data.title ? data.title : '';
    var time = data.time ? data.time : '';
    var content = data.content ? data.content : '';
    var htmlStr = '';

    function moreReview(comments){
        if(comments.length>0){
            $.each(comments,function(childIndex,childContent){
                if(comments.length > 1 && comments.length < 4){
                    htmlStr += '<div class="reviews-children"><p class="child-title clearfix">' + (childIndex+1) +'.&ensp;'+ childContent.passport.nickname +  '<a href="#" class="nickname-right"><img src="images/review-zan_2x.png" alt=""></a></p><p class="child-content">' + childContent.content + '</p></div>';
                }else{
                    if(childIndex == 0){
                        htmlStr += '<div class="reviews-children" ><p class="child-title">1.&ensp;'+ childContent.passport.nickname +  '<a href="#" class="nickname-right"><img src="images/review-zan_2x.png" alt=""></a></p><p class="child-content">' + childContent.content + '</p></div>';
                    }else if(childIndex > 0 && childIndex < comments.length-2){
                        htmlStr += '<div><div class="reviews-children center-more" style="display: none" ><p class="child-title clearfix">' + (childIndex+1) +'.&nbsp;'+ childContent.passport.nickname +  '</p><p class="child-content">' + childContent.content + '</p></div><a href="#" class="show-all-reviews"><p>显示全部评论</p></a></div>';
                    } else if(childIndex == comments.length-2){
                        htmlStr += '<div class="reviews-children" ><p class="child-title clearfix">' + (comments.length-1) +'.&ensp;'+ childContent.passport.nickname + '<a href="#" class="nickname-right"><img src="images/review-zan_2x.png" alt=""></a></p><p class="child-content">' + childContent.content + '</p></div>';
                    }else if(childIndex == comments.length-1){
                        htmlStr += '<div class="reviews-children" ><p class="child-title clearfix">' + comments.length +'.&ensp;'+ childContent.passport.nickname +  '<a href="#" class="nickname-right"><img src="images/review-zan_2x.png" alt=""></a></p><p class="child-content">' + childContent.content + '</p></div>';
                    }

                }
            });
        }
    }

    function renderRevData(reviewsData){
        if (reviewsData) {
            htmlStr += '<div class="list"><h3>竞猜评论</h3><ul id="news_list">';
            htmlStr += '<section class="hot-reviews">';
            if(reviewsData.hots.length >= 5){
                $.each(reviewsData.hots, function (hotIdx, hotContent) {
                    if(hotIdx<5){
                        htmlStr += '<div class="reviews-box">';
                        htmlStr += '<div class="reviews-header"><img src="' + hotContent.passport.img_url + '" alt=""/>' + '</div>';
                        htmlStr += '<div class="reviews-right">';
                        htmlStr += '<p class="clearfix"><span class="reviews-name">' + hotContent.passport.nickname + '</span><span class="nickname-right"><a href="#" class="reviews-zan"><img src="images/review-zan_2x.png" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>';
                        htmlStr += '<span class="reviews-time">' + getDatediff(hotContent.create_time*1000) + '</span>';
                        moreReview(hotContent.comments);
                        htmlStr += '<p class="reviews-content">' + hotContent.content + '</p></div></div>';
                    }
                });
            }else{
                if(reviewsData.hots.length == 0){
                    $.each(reviewsData.comments, function (idx, content) {
                        if(idx<5){
                            htmlStr += '<div class="reviews-box">';
                            htmlStr += '<div class="reviews-header"><img src="' + content.passport.img_url + '" alt=""/>' + '</div>';
                            htmlStr += '<div class="reviews-right">';
                            htmlStr += '<p class="clearfix"><span class="reviews-name">' + content.passport.nickname + '</span><span class="nickname-right"><a href="#" class="reviews-zan"><img src="images/review-zan_2x.png" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>';
                            htmlStr += '<span class="reviews-time">' + getDatediff(content.create_time*1000) + '</span>';
                            moreReview(content.comments);
                            htmlStr += '<p class="reviews-content">' + content.content + '</p></div></div>';
                        }
                    });
                }else if(reviewsData.hots.length > 0 &&reviewsData.hots.length<5 ){
                    $.each(reviewsData.hots, function (hotIdx, hotContent) {
                        htmlStr += '<div class="reviews-box">';
                        htmlStr += '<div class="reviews-header"><img src="' + hotContent.passport.img_url + '" alt=""/>' + '</div>';
                        htmlStr += '<div class="reviews-right">';
                        htmlStr += '<p class="clearfix"><span class="reviews-name">' + hotContent.passport.nickname + '</span><span class="nickname-right"><a href="#" class="reviews-zan"><img src="images/review-zan_2x.png" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>';
                        htmlStr += '<span class="reviews-time">' + getDatediff(hotContent.create_time*1000) + '</span>';
                        moreReview(hotContent.comments);
                        htmlStr += '<p class="reviews-content">' + hotContent.content + '</p></div></div>';
                    });
                    $.each(reviewsData.comments, function (idx, content) {
                        if(idx<5-reviewsData.hots.length){
                            htmlStr += '<div class="reviews-box">';
                            htmlStr += '<div class="reviews-header"><img src="' + content.passport.img_url + '" alt=""/>' + '</div>';
                            htmlStr += '<div class="reviews-right">';
                            htmlStr += '<p class="clearfix"><span class="reviews-name">' + hotContent.passport.nickname + '</span><span class="nickname-right"><a href="#" class="reviews-zan"><img src="images/review-zan_2x.png" alt=""></a><a href="#" class="reviews-replay"><img src="images/Reply_2x.png" alt=""></a></span></p>';
                            htmlStr += '<span class="reviews-time">' + getDatediff(content.create_time*1000) + '</span>';
                            moreReview(content.comments);
                            htmlStr += '<p class="reviews-content">' + content.content + '</p></div></div>';
                        }
                    });
                }
            }
            //htmlStr += '</div></div>';

            htmlStr += '</section></div>';
        } else {
            htmlStr += '<div class="reviews-box"><img src="images/picture_2x.png>" alt=""></div>';
        }
        //$('.reviews').html(htmlStr);
    }







    var htmlStr = '<header><h1 class="title">' + title + '</h1>';
    htmlStr += '<div class="meta"><span class="date">' + time + '</span><span class="author color-blue ml5">';
    htmlStr += data.author + '</span></div></header>';

    htmlStr += '<div class="indent flat-content">' + content + '</div>';

    // 分享
    //try {
    //    var shareData = Jnapp.jn_getShare();
    //    if (typeof shareData == 'string') {
    //        shareData = $.parseJSON(shareData);
    //        htmlStr += '<div class="excerpt-share"><div class="video-excerpt"><div class="video-excerpt-tip"><img src="data:image/png;charset=utf-8;base64,'+ shareData.baseIcon+'" alt="loading..."/><p>' + shareData.title + '</p></div></div>';
    //    }
    //} catch (ex) {
    //
    //}
    htmlStr += '<div class="share-short-issue"><p></p><p>分享给召唤师们</p><p></p></div>'
    htmlStr += '<div class="maintext-share"><a href="#" class="maintext-share-weixin"><img src="images/news_btn_weixin_nor.png" /></a><a href="#" class="maintext-share-frident"><img src="images/news_btn_pyq_nor.png" /></a><a href="" class="maintext-share-qq-space"><img src="images/QQ_2x.png" /></a><a href="#" class="maintext-share-qq"><img src="images/qq_zone.png" /></a><a href="#" class="maintext-share-weibo"><img src="images/news_btn_weibo_nor.png" /></a></div></div>';
    //评论
    htmlStr += '<div class="reviews">';
    Jnapp.jn_getComment("");
    //renderRevData(dataC.data);
    htmlStr += '</div>';



    var news_list = data.relate_news;
    if (news_list.length > 0) {
        htmlStr += '<div class="list"><h3>相关新闻</h3><ul id="news_list">';
        $.each(news_list, function (index, item) {
            htmlStr += '<li class="clearFix"><a href="###" class="clearfix list-item" data-type="' + item.articleType + '" data-id="' + item.extra + '"><div class="news-left"><p class="list-title">' + item.title + '</p>';

            if (item.tagColor && item.tagName) {
                htmlStr += '<span class="list-tag" style="color:' + item.tagColor + ';border-Color:' + item.tagColor + ';">' + item.tagName + '</span>';
            }
            if(item.comments){
                htmlStr += '<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;' + item.comments + '</span>';
            }else{
                htmlStr += '<span class="list-review"><img src="images/Reply_2x.png" alt="">&ensp;0</span>';
            }


            if (item.updateTime) {
                htmlStr += '<span class="list-time">' + getDatediff(item.updateTime*1000) + '</span>';
            }
            //dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

            htmlStr += '</div><div class="news-right"><img class="fl" src="' + item.thumbnail + '"/></div></a></li>';
        });

        htmlStr += '</ul></div><section class="line"></section>';
    }
    $('#newsDetail').html(htmlStr);
    //$('.indent p strong').parent().css('margin','1.5rem 0 1.25rem 0');
    $('.indent p img').parent().css({'padding':'0','margin':'1.5rem 0'});
}

$(function () {
      //$.ajax({
      //   url: 'data/news.json',
      //   type: "GET",
      //   dataType: 'json',
      //   success: function (str) {
      //       renderData(str.data);
      //   },
      //   error: function (err) {
      //       //alert('失败:' + err);
      //   }
      //});

    // 相关新闻
    $(document).on('click', '.list-item', function (e) {
        e.preventDefault();
        try {
            Jnapp.jn_related($(this).data('type'), $(this).data('id') + "");
        } catch (e) {

        }
    });

    // 图片查看大图
    $(document).on('click', '.flat-content img', function (e) {
        e.preventDefault();
        var title = $(this).attr('alt');
        title = title ? title : '';
        try {
            Jnapp.jn_image($(this).attr('src'), title, '');
        } catch (e) {

        }
    });

    // 微博
    $(document).on('click', '.maintext-share-weibo', function (e) {
        e.preventDefault();
        shareBegin(0);
    });

    // 微信
    $(document).on('click', '.maintext-share-weixin', function (e) {
        e.preventDefault();
        shareBegin(1);
    });

    // 朋友圈
    $(document).on('click', '.maintext-share-frident', function (e) {
        e.preventDefault();
        shareBegin(2);
    });

    //qq
    $(document).on('click', '.maintext-share-qq-space', function (e) {
        e.preventDefault();
        shareBegin(3);
    });

    //空间
    $(document).on('click', '.maintext-share-qq', function (e) {
        e.preventDefault();
        shareBegin(4);
    });

    function shareBegin(type) {
        try {
            var thumbnail = cacheData.thumbnail;
            var title = cacheData.title;
            var content = cacheData.excerpt;
            var url = cacheData.shareUrl;
            Jnapp.jn_share(type, thumbnail, title, content, url);
        } catch (e) {

        }
    }

    //显示全部评论
    $(document).on('click','.show-all-reviews',function(e){
        e.preventDefault();
        $(this).hide();
        $('.center-more').show();
    });

});