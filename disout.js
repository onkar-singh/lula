var ui=document.getElementById("out");
var ui1=document.getElementById("out1");
var ui2=document.getElementById("out2");
var co11=document.getElementById("co11");
var in11=document.getElementById("in11");
var ng11=document.getElementById("ng11");
var tl11=document.getElementById("tl11");
var correct=0;
var incorrect=0;
ui.onclick=outp;
function outp() {
	
	ui1.style.display="block";
	ui2.style.display="none"; 

	for(i in inda){
		var cbv = "abcd";
		var res=qes[i].ans;
		var pos = cbv.lastIndexOf(res);  //value 0,1,2,3
		if (inda[i]==pos) { correct++;} 
		else {incorrect++;}
		
	}
console.log(correct,incorrect,"jfskfjksfjksfsd",pos,inda[i]);
co11.innerHTML=correct;
in11.innerHTML=incorrect;
ng11.innerHTML=(incorrect*(1/3)).toFixed(2);
tl11.innerHTML=(correct-(incorrect*(1/3))).toFixed(2);

	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

	}


