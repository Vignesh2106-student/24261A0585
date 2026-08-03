function validateForm(){

var fname=document.getElementById("fname").value;
var lname=document.getElementById("lname").value;
var father=document.getElementById("father").value;
var mother=document.getElementById("mother").value;
var dob=document.getElementById("dob").value;

var board10=document.getElementById("board10").value;
var year10=document.getElementById("year10").value;
var per10=document.getElementById("per10").value;

var board12=document.getElementById("board12").value;
var year12=document.getElementById("year12").value;
var per12=document.getElementById("per12").value;

var boardDegree=document.getElementById("boardDegree").value;
var yearDegree=document.getElementById("yearDegree").value;
var perDegree=document.getElementById("perDegree").value;

var photo=document.getElementById("photo").files;
var sign=document.getElementById("sign").files;

if(fname==""){
alert("Enter First Name");
return false;
}

if(lname==""){
alert("Enter Last Name");
return false;
}

if(father==""){
alert("Enter Father's Name");
return false;
}

if(mother==""){
alert("Enter Mother's Name");
return false;
}

if(dob==""){
alert("Select Date of Birth");
return false;
}

if(photo.length==0){
alert("Upload Passport Size Photo");
return false;
}

if(sign.length==0){
alert("Upload Signature");
return false;
}

document.getElementById("result").style.display="block";

document.getElementById("result").innerHTML=

"<h2>Registration Successful</h2>"+

"<hr>"+

"<p><b>First Name :</b> "+fname+"</p>"+

"<p><b>Last Name :</b> "+lname+"</p>"+

"<p><b>Father's Name :</b> "+father+"</p>"+

"<p><b>Mother's Name :</b> "+mother+"</p>"+

"<p><b>Date of Birth :</b> "+dob+"</p>"+

"<h3>Educational Details</h3>"+

"<table border='1' width='100%' cellspacing='0'>"+

"<tr style='background:#1976d2;color:white;'>"+

"<th>Qualification</th><th>Board</th><th>Year</th><th>Percentage</th></tr>"+

"<tr><td>10th</td><td>"+board10+"</td><td>"+year10+"</td><td>"+per10+"</td></tr>"+

"<tr><td>Intermediate</td><td>"+board12+"</td><td>"+year12+"</td><td>"+per12+"</td></tr>"+

"<tr><td>Degree</td><td>"+boardDegree+"</td><td>"+yearDegree+"</td><td>"+perDegree+"</td></tr>"+

"</table>";

return false;

}