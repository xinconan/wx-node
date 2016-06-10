/**
 * Created by XINCONAN on 2016/6/10.
 */
var jsSHA = require('jssha');
module.exports = function(app){
  app.get('/api',function(req,res){
    var token = 'wx-node';
    var signature = req.query.signature;//΢�ż���ǩ��
    var timestamp = req.query.timestamp;//ʱ���
    var echostr = req.query.echostr;//����ַ���
    var nonce = req.query.nonce;//�����
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
      //��֤�ɹ�
      console.log("success");
      res.end(echostr);
    } else {
      //��֤ʧ��
      console.log("fail");
      res.end("");
    }

  });
  app.post('/api',function(req,res){
    var post_data="";
    req.on("data",function(data){post_data=data;});
    req.on("end",function(){
      var xmlStr=post_data.toString('utf-8',0,post_data.length);
      //������Ϣ����
      //�ط���Ϣ����
    });
  });
}