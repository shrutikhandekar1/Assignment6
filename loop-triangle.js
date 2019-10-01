/*
Looping a Triangle (5 points)
Write a loop that displays the following triangle within a console window:
#
##
###
####
#####
######
#######
*/

//variable
var totalNumberofRows = 7;
var output="";

//Nested for loops
for (var i = 1; i <= totalNumberofRows; i++) {
    for (var j = 1; j <= i; j++) {
        document.write("#");
    }
    document.write("<br>");
    console.log(output);
    output="";
}
