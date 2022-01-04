 function startTime() {
     const today = new Date();
     let h = today.getHours();
     let m = today.getMinutes();
     let s = today.getSeconds();
     m = checkTime(m);
     s = checkTime(s);
     document.getElementById('txt1').innerHTML = h;
     document.getElementById('txt2').innerHTML = m;
     document.getElementById('txt3').innerHTML = s;
     setTimeout(startTime, 1000);
     //             if(m<=50){
     // body.style.background = url("https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/05/Intrepid-Travel-sri-lanka_kandy_night.jpg");
     //      }
     //      else{
     //         body.style.background = url("https://preview.redd.it/mog7ygj572i51.jpg?auto=webp&s=a7f507599ec54de28829d7209099f77d2a469adb");   
     //      }
 }
 var currentTime = new Date().getHours();
 if (document.body) {
     if (7 <= currentTime && currentTime < 18) {
         document.body.background = "https://preview.redd.it/mog7ygj572i51.jpg?auto=webp&s=a7f507599ec54de28829d7209099f77d2a469adb";
     } else {
         document.body.background = "https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/05/Intrepid-Travel-sri-lanka_kandy_night.jpg ";
     }
 }

 function checkTime(i) {
     if (i < 10) {
         i = "0" + i
     }; // add zero in front of numbers < 10
     return i;
 }