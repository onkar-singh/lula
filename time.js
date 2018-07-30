
    //  var pu=document.getElementById("d1").innerHTML="<span>:</span>";
    
    // document.getElementById("d1").innerHTML = "Time Left:- "+"<b>"+ minutes+jk + "m" + pu + seconds + "s "+"</b>";
   
    // if (distance < 0) {
    //     clearInterval(x);
    //     document.getElementById("demo").innerHTML = "EXPIRED";
    // }

window.onload=document.getElementById('id01').style.display='block';
document.getElementById('subm').onclick = function() {
  document.getElementById('id01').style.display = "none";
      var start=Date.now(),r=document.getElementById('r');
      (function f(){
      var diff=Date.now()-start,ns=(((72e5-diff)/1e3)>>0),m=(ns/60)>>0,s=ns-m*60;
      r.innerHTML="Time Left:- "+"<b>"+m+"<span>"+":"+"</span>"+((''+s).length>1?'':'0')+s+"<b>";
      if(diff>72e5){
        start = Date.now();
        r = document.getElementById('r').innerHTML="<b>00:00</b>";
      }
      setTimeout(f,1e3);
      })();
}

