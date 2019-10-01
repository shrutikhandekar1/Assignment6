/* 
    Larger or Smaller? 
    Create an application that accepts two integers within two separate prompts. 
    Then, display only the larger of the two within the browser window. 
    Don’t forget to handle the fact that the two could be equal.

*/

//Variables
var num1, num2;

//Prompt user for 2 numbers

num1 = parseInt(window.prompt("Enter the first number"));
num2 = parseInt(window.prompt("Enter the second number"));

//Compare the two numbers and display larger of two numbers

if(num1 !== num2){
    if(num1 > num2){
        document.write("The larger number is: " + num1);
    }
    else{
        document.write("The larger number is: " + num2);
    }
}
else{
    document.write("Both numbers are equal");
}
