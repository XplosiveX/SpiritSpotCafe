setInterval(OpenTime,1000)
function OpenTime () {
  var myDate = new Date();
  var hours = myDate.getHours();
   var minutes = myDate.getMinutes();
   var OpenHours = [6,7,8,9,"10",11,12,13];
      var OpenMinutes = [0,1,2,4,5,5,06,07,7,8,9,10,"11",12,13,14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,53,54,55,56,57,58,59,60]
        var HoursTrue = OpenHours.includes(hours)
  var MinutesTrue = OpenMinutes.includes(minutes)
    if (HoursTrue == true && MinutesTrue == true)  {
    document.getElementById("NotTime").style.display = "block"
     document.getElementById("NoOrderTime").style.display = "block" 
     document.getElementById("YesOrderTime").style.display = "none" 
    } else {
       document.getElementById("NotTime").style.display = "none"
     document.getElementById("NoOrderTime").style.display = "block" 
     document.getElementById("YesOrderTime").style.display = "none" 
    }

 }
OpenTime()
