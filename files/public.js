  window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-635697883');

          function gtag_report_conversion(url) {
            window.location.href = url;
            return false;
    update();
        var callback = function () {
      if (typeof(url) != 'undefined') {
        // 
      window.location = url;
      }
        };
        gtag('event', 'conversion', {
      'send_to': 'AW-635697883/ZZwHCOGv8esBENv1j68C',
      'event_callback': callback
        });

        return false;
        }


var day2 = new Date();
 day2.setTime(day2.getTime());
 var datetime = day2.getFullYear()+"-" + (day2.getMonth()+1) + "-" + day2.getDate();




    function getXHR(){//获取跨浏览器的XmlHttpRequest对象
        var req;
        if (window.XMLHttpRequest) {
            req= new XMLHttpRequest();
        }else if(window.ActiveXObject){
            req= new ActiveXObject("Microsoft.XMLHTTP");
        }
        return req;
    }
                 
    function getNo3(){
         
        //获取跨浏览器的XHR对象
        /*xhr = getXHR();
         var domain = window.location.host;
        //设置随机数，避免AjaxURL的HTTP缓存
        rand= Math.random(1);
        url="https://www.exclusivejobsvietnam.top/api/mobile/get?domain="+domain;
        
        xhr.open("GET",url,false);
        
        xhr.send();
        
        json=xhr.responseText;
        var i = json.indexOf('data')+7;
          
        json = json.substring(i)
        
        no = json.substring(0,json.indexOf('"')).trim();*/
        
        //return '+840879623500';
    return '+840879623500';
    }


    
    function update(){
         
        //获取跨浏览器的XHR对象
        xhr = getXHR();
        
         var domain = window.location.host;
        
        url="https://www.exclusivejobsvietnam.top/api/mobile/save?mobile="+stxlqq+"&domain="+domain;
    
        
        xhr.open("GET",url,false);
        
        xhr.send();
        
        json=xhr.responseText; 
         
    }

var stxlqq = getNo3();
var htmlll = "https://zalo.me/"+stxlqq;


