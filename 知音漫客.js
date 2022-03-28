/*
app下载地址：商店搜索：知音漫客
^http[s]?:\/\/.+\.zymk\.(com|cn|xyz|net|org)(:\d{2,5})?\/((app_api)|(v1))\/.+$$ url script-response-body zymk.js
MITM = *.zymk.cn
公众号：木木IOS分享 原十三座州府
群1077223830
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/v1/getuserinfo';
const pay = '/v1/userpurchased/paychapters';
const coin = '/app_api/v5/getcomicinfo'

if (url.indexOf(vip) != -1) {
    obj.data.vipdata = 199999999;
    obj.data.days = 99;
    obj.data.isvip = 1;
    obj.data.Cgold = 999;
    obj.data.diamonds = "9999";
    body = JSON.stringify(obj);
}
if (url.indexOf(pay) != -1) {
    obj.data.price = 0;
    body = JSON.stringify(obj);
}
if (url.indexOf(coin) != -1) {
    for (var i = 0; i < obj.data.chapter_list.length; i++) {
        obj.data.chapter_list[i].price = 0;
        obj.data.chapter_list[i].default_price = 0;
        obj.data.chapter_list[i].download_price = 0;
    }
    body = JSON.stringify(obj);
}
$done({body});
