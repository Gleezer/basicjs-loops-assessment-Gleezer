// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

let numbers = [
  469,
  755,
  244,
  245,
  758,
  450,
  302,
  20,
  712,
  71,
  456,
  21,
  398,
  339,
  882,
  848,
  179,
  535,
  940,
  472,
];

document.write("<h1>Array Analyzer</h1>")
document.write("<h3>Now analyzing the array: " + numbers + "</h3>");
document.write("<ul>");
// Write your code here 👇

//Largest Number
let largestNum = 0
for (index = 0; index <= numbers.length; index += 1)
{
  let initNum = numbers[index]
  if (initNum > largestNum)
  {
    largestNum = initNum
   // console.log(largestNum)
  }
}
//console.log(largestNum)

// Then render each li:
document.write("<li>Largest Number: " + largestNum + "</li>");
// etc...

//smallest number
let smallestNum = Infinity
for (index = 0; index <= numbers.length; index += 1)
{
  let newNum = numbers[index]
  if (newNum < smallestNum)
  {
    smallestNum = newNum
    //console.log(smallestNum)
  }
}
document.write("<li>Smallest Number: " + smallestNum + "</li>");


//sum of the array
let addSum = 0

for (index = 0; index < numbers.length; index += 1)
{
  addSum += numbers[index]
  
}
document.write("<li>Sum: " + addSum + "</li>");

//Average of array
let aveArray = 0

for (index = 0; index < numbers.length; index += 1)
{
  aveArray += numbers[index]
  aveNum = aveArray / numbers.length
  
}
document.write("<li>Average: " + aveNum + "</li>");


//all even Numbers and odd numbers
let evenNums = []
let oddNums = []
for (index = 0; index < numbers.length; index += 1)
{
  let currNum = numbers[index]
  if (currNum % 2 === 0)
  {
    evenNums.push(currNum)
  }
  else
  {
    oddNums.push(currNum)
  }
}
document.write("<li>Even Numbers: " + evenNums + "</li>")
document.write("<li>Odd Numbers: " + oddNums + "</li>");

//Numbers divisible by 8
let numsByEight = []
for (index = 0; index < numbers.length; index += 1)
{
  let currNum = numbers[index]
  if (currNum % 8 === 0)
  {
    numsByEight.push(currNum)
  }
 }
 document.write("<li>Numbers divisible by 8: " + numsByEight + "</li>");

document.write("</ul>");
