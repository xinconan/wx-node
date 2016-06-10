/**
 * Created by XINCONAN on 2016/6/10.
 */
var jsSHA = require('jssha');
module.exports = function(app){
  app.get('/api',function(req,res){
    var token = 'wx-node';
    var signature = req.query.signature;//微信加密签名
    var timestamp = req.query.timestamp;//时间戳
    var echostr = req.query.echostr;//随机字符串
    var nonce = req.query.nonce;//随机数
    var oriArray = new Array();
    oriArray[0] = nonce;
    oriArray[1] = timestamp;
    oriArray[2] = token;
    oriArray.sort();

    var original = oriArray.join('');

    var shaObj = new jsSHA('SHA-1','TEXT');
    shaObj.update(original);
    var scyptoString = shaObj.getHash('HEX');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if(signature == scyptoString){
      //验证成功
      console.log("success");
      res.end(echostr);
    } else {
      //验证失败
      console.log("fail");
      res.end("");
    }

  });
  app.post('/api',function(req,res){
    var post_data="";
    req.on("data",function(data){post_data=data;});
    req.on("end",function(){
      var xmlStr=post_data.toString('utf-8',0,post_data.length);
      //解析消息代码
      //回发消息代码
    });
  });
}