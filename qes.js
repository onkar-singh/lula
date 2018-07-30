var clicks = 1;
var mainarr=[];
var inda = {};
var qno=document.getElementById('qesno1');
var qev=document.getElementById('qes1');
var op1=document.getElementById('op11');
var op2=document.getElementById('op21');
var op3=document.getElementById('op31');
var op4=document.getElementById('op41');
var radios = document.getElementsByTagName('input');

// window.onload=document.getElementById('id01').style.display='block';
// document.getElementById('subm').onclick = function() {document.getElementById('id01').style.display = "none";}

function udata() {
var arrd = [];
var valm;     
for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
        // get value, set checked flag or do whatever you need to
        valm = radios[i].value; 
        var realclick="no" + qno.innerHTML;
        if (realclick!="no0") {inda[realclick] = valm;}
 } }}



function disqes(mn) {






		var gl="no" + (clicks-1);
		var ml="no" + clicks;
					
		udata();
		 var detect;
		 css(mn);
		 
		if (inda.hasOwnProperty(ml)) {

			var pl="no" + (Number(clicks));
			var detect = inda[pl];
			console.log(detect,"rurn1");
			qno.innerHTML=qes[ml].qno;
			qev.innerHTML=qes[ml].q;
			op1.innerHTML=qes[ml].a;
			op2.innerHTML=qes[ml].b;
			op3.innerHTML=qes[ml].c;
			radios[detect].checked = true;
			
			 return detect;

			}
else{
// collect user input data
// css(mn);



	var nz=Number(clicks)+6;
buo[nz].classList.remove("b4");
buo[nz].classList.add("b2");




udata();
console.log(inda);

function om() {
	var cl="no" + qno.innerHTML;
	 var im =inda[cl];
	 // console.log(im,cl,inda[cl]);inda.hasOwnProperty(cl)
	  if (cl!="no0" && im!=undefined) {
	       radios[im].checked = false;
	       console.log(detect,"rurn2");}
	 else {console.log("2222222");}}

om();

function sd() {
var bn="no" + clicks;
qno.innerHTML=qes[bn].qno;
qev.innerHTML=qes[bn].q;
op1.innerHTML=qes[bn].a;
op2.innerHTML=qes[bn].b;
op3.innerHTML=qes[bn].c; 
}

sd();

}
}


// var qesdata1 = {qno:"01", q:"  ", a:50, b:"  ",c:"  ",d:"  "};
// var myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};

var qes = {
no1:{
qno:"1",
q:"1What is the mechanical power developed by a DC series motor is maximum?",
a:"Back emf is equal to half the applied voltage.",
b:"Back emf is equal to applied voltage.",
c:"Back emf is equal to zero.",
d:"None of above.",
ans:"a"} ,

no2:{
qno:"2",
q:"2Eddy current loss will depends on",
a:"Frequency",
b:"Flux density",
c:"Thickness",
d:"All of the above",
ans:"d"} ,

no3:{
qno:"3",
q:"3In a dc machine 72 number of coils are used. Find the number of commutator segments required?",
a:"36",
b:"37",
c:"72",
d:"74",
ans:"c"} ,

no4:{
qno:"4",
q:"4Pointing to a girl in the photograph, Amar said, \"Her mother`s brother is the only son of my mother's father.\" How is the girl`s mother related to Amar ?",
a:"Mother",
b:"Sister",
c:"Aunt",
d:"Grandmother",
ans:"c"} ,

no5:{
qno:"5",
q:"5If white is called blue, blue is called red, red is called yellow, yellow is called green, green is called black, black is called violet and violet is called orange, what would be the colour of human blood ?",
a:"Red",
b:"Green",
c:"Yellow",
d:"Violet",
ans:"c"} ,

no6:{
qno:"6",
q:"6If the animals which can walk are called swimmers, animals who crawl are called flying, those living in water are called snakes and those which fly in the sky are called hunters, then what will a lizard be called ?",
a:"Flying",
b:"Swimmers",
c:"Snakes",
d:"Hunters",
ans:"a"} ,

no7:{
qno:"7",
q:"In a certain code, '467' means 'leaves are green' ; '485' means 'green is good' and '639' means 'they are playing'. Which digit stands for 'leaves' in that code ?",
a:"4",
b:"7",
c:"3",
d:"6",
ans:"b"} ,

no8:{
qno:"8",
q:"Choose the correct alternative from the following :: Assertion (A) : Bangladesh imports jute from India. Reason (R) : Bangladesh has most of the jute mills. ",
a:"Both A and R are true and R is the correct explanation of A.",
b:"Both A and R are true but R is NOT the correct explanation of A.",
c:"Both A and R are false.",
d:"A is false but R is true.",
ans:"c"} ,

no9:{
qno:"9",
q:"Rasik walked 20 m towards north. Then he turned right and walks 30 m. Then he turns right and walks 35 m. Then he turns left and walks 15 m. Finally he turns left and walks 15 m. In which direction and how many metres is he from the starting position?",
a:"15 m West",
b:"30 m East",
c:"30 m West",
d:"45 m East",
ans:"d"} ,

no10:{
qno:"10",
q:"Two cars start from the opposite places of a main road, 150 km apart. First car runs for 25 km and takes a right turn and then runs 15 km. It then turns left and then runs for another 25 km and then takes the direction back to reach the main road. In the mean time, due to minor break down the other car has run only 35 km along the main road. What would be the distance between two cars at this point?",
a:"65 km",
b:"75 km",
c:"80 km",
d:"85 km",
ans:"a"} ,

no11:{
qno:"11",
q:"(112 x 54) = ?",
a:"67000",
b:"70000",
c:"76500",
d:"77200",
ans:"b"} ,

no12:{
qno:"12",
q:"What is the unit digit in {(6374)1793 x (625)317 x (341491)}?",
a:"0",
b:"3",
c:"2",
d:"5",
ans:"a"} ,

no500:{
q:"",
a:"",
b:"",
c:"",
d:"",
ans:""} ,







no1000:{
q:"",
a:"",
b:"",
c:"",
d:"",
ans:""} ,
};


qno.innerHTML=qes.no1.qno;
qev.innerHTML=qes.no1.q;
op1.innerHTML=qes.no1.a;
op2.innerHTML=qes.no1.b;
op3.innerHTML=qes.no1.c;
op4.innerHTML=qes.no1.d; 

// var ml="no" + (clicks-1);
// 	if (inda.hasOwnProperty(ml)===false) {
// 	buo[nz].classList.remove("b6");
// 	}

function diskj(cnj) {
    var nz=Number(qno.innerHTML)+5;

var ml="no" + (clicks-1);
if (inda.hasOwnProperty(ml)) {
	var buo = document.getElementsByTagName('span');
	buo[nz].classList.remove("b6");console.log(nz,ml,buo[nz],cnj,"remove b6")}
}

document.getElementById("pln").addEventListener("click", diskj);