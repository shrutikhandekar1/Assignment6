/*
Countdown (5 points)

Write an application that counts down to 0 based on the number that a user passes into a prompt. 
If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0
and so on.
*/

//variables
var number, i, j;

number = parseInt(window.prompt("Enter a number"));

for(i=0;i<=number;i++){
    for(j=number;j>=0;j--){
        document.write(j + "<br>");
    }
    break;
}
