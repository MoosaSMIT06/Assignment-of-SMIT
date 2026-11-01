var studentName =prompt('Enter you Name');
var rollNO = prompt('Enter your Roll Number');
var Class = prompt('Class');

 
var english = Number(prompt('Number of English'));
var mathematics = Number(prompt('Number of Mathematics'));
var physic = Number(prompt('Number of Physic'));
var chemistry = Number(prompt('Number of Chemistry'));
var computer = Number(prompt('Number of Computer'));
var urdu = Number(prompt('Number of Urdu'));
var islamiat = Number(prompt('Number of Islamiat'));

//    Calculation
var obtainedMarks = (english + mathematics + physic + chemistry + computer + urdu + islamiat);

var totalMarks = (700);

var persentage =(obtainedMarks / totalMarks ) * 100;



    // document.write all detial Display
document.write("<h1> Student Mark Sheet </h1>");


document.write("<h3> Student Information </h3>");
document.write("Student Name: " + studentName + "<br>");
document.write("Student Roll Number: " + rollNO + "<br>");
document.write("Class: " + Class + "<br>");


document.write("<h3> Marks or Subject</h3>");
document.write("English: " + english + "/100" + "<br>" );
document.write("Mathematics: " + mathematics + "/100" + "<br>" );
document.write("Physics: " + physic + "/100" + "<br>" );
document.write("Chemistry: " + chemistry + "/100" + "<br>" );
document.write("Computer: " + computer + "/100" + "<br>" );
document.write("Urdu: " + urdu + "/100" + "<br>" );
document.write("Islamiyat: " + islamiat + "/100" + "<br><br>" );

document.write("<h3>  Total Number </h3>");
document.write("Total Number: " + obtainedMarks + "/" + totalMarks +"<br>");

document.write("<h3>Percentage</h3>");
document.write("Percentage: " + persentage +"%");


console.log("Student Name: " + studentName);
console.log("Student Roll Number: " + rollNO );
console.log("Class: " + Class)
console.log("English: " + english + "/100")
console.log("Mathematics: " + mathematics + "/100" );
console.log("Physics: " + physic + "/100");
console.log("Chemistry: " + chemistry + "/100");
console.log("Computer: " + computer + "/100");
console.log("Urdu: " + urdu + "/100");
console.log("Islamiyat: " + islamiat + "/100");
console.log("Total Number: " + obtainedMarks + "/" + totalMarks);
console.log("Percentage: " + persentage +"%");

















