///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0;

for (let i = 0; i <= fujiAcres.length; i++) {
  totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];
}

console.log(`${totalAcres} acres this week`);

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres / fujiAcres.length; // DIVIDED ACRES BY DAYS NUMBER
console.log(`${averageDailyAcres} acres per day`);

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

// CODE HERE

// ACRESLEFT > 0 (NOT DAYS BECAUSE SHOULD BE > 0 ALL TIME IF DAYS USED WILL INCREASE IT'S VALUE)
while (acresLeft > 0) {
  days++;
  acresLeft -= averageDailyAcres;
}

console.log(`${days} days of work left`);

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

// SINCE ALL ARRAYS HAVE 7 DAYS, WE CAN USE THE SAME FOR LOOP GET THE VALUES OF THE ACRES ARRAYS, MULTIPLY THEM BY 6.5 AND PUSH THE NEW VALUES TO THE EMPTY ARRAYS BY USING PUSH METHOD.

for (let i = 0; i < fujiAcres.length; i++) {
  fujiTons.push(fujiAcres[i] * 6.5);
  galaTons.push(galaAcres[i] * 6.5);
  pinkTons.push(pinkAcres[i] * 6.5);
}

console.log(fujiTons, galaTons, pinkTons);

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE

// SINCE THE PROBLEM DOES NOT REQUIRE AN ARRAY BUT A NUMBER, THIS VARIABLES WILL BE INITIALIZED TO 0
let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

// AGAIN ALL THE ARRAYS HAVE 7 DAYS SO THE LOOP WILL WORK FOR THE 3 ARRAYS. THIS TIME WE GET THE VALUES FROM THE TONS ARRAYS AND STARTING ADDING THEM TO THEIR RESPECTIVE POUNDS VARIABLE. ONCE THE ARRAY REACH THE INDEX 6 WE MULTIPLY THE RESULT TO 2000 AND ASIGN IT TO THE SAME VARIABLE.
for (let i = 0; i < fujiAcres.length; i++) {
  fujiPounds += fujiTons[i];
  galaPounds += galaTons[i];
  pinkPounds += pinkTons[i];
}
fujiPounds *= 2000;
galaPounds *= 2000;
pinkPounds *= 2000;

console.log("Tons: ", fujiPounds, galaPounds, pinkPounds);

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// HERE WE JUST MULTIPLY THE POUNDS BY THE RESPECTIVE PRICE
let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log("Profit: ", fujiProfit, galaProfit, pinkProfit);

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

// AND HERE WE JUST ADD  ALL THE PROFITS
let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(`Total Profit: ${totalProfit}`);
