/*
The “Coin Flip Streak” Game

In this part of the assignment you will explore what you’ve learned so far about variables, do while loops, 
conditionals, operators, math, and more to create a “coin flip streak game”. The point of this simple game is to 
see what kind of streak you can get to (how many times “Heads” comes up in a row before “Tails” does to end the game). 
To complete the game follow the steps outlined below:
1. Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
2. Create a do while loop.
3. Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to 
get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
4. Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. 
If it’s 1, write out “Tails” into the console window. 
5. Set the condition of the do while loop to end once the coinFlip becomes “Tails”.

*/

//variables
var coinflip;
var i;

    do{
        //Create number 1 or 0 randomly
        coinflip = (Math.random()>0.5)? 1 : 0;
        (coinflip === 1) ? document.write(" " + "Heads <br>") : document.write(" " + "Tails <br>");
        }
    while(coinflip != 0);

