var script = document.createElement("script");
script.type = "text/javascript";
var man = new Date(); 
var day = man.getDay()
var month = man.getMonth()
var year = man.getYear()
var hour = man.getHours()
var minute = man.getMinutes()
var second = man.getSeconds()
var ver = day + month + year + hour + minute + second
var srcS = "https://www.spiritspotcafe.com/Scripts/OpenTime.js" + "?v=" + ver;
script.src = srcS
document.body.appendChild(script);
