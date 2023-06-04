/*write a javascript to print the month if numeric value for the month is
given
Method 1
var monthNumber = 12

var dict={
    1:"January",
    2:"February",
    3:"March",
    4:"April",
    5:"May",
    6:"June",
    7:"July",
    8:"August",
    9:"September",
    10:"October",
    11:"November",
    12:"December"
};
if (dict.hasOwnProperty(monthNumber)){
    console.log(dict[monthNumber]);
}
else
{
    console.log("Enter a Number range between 1-12");
}*/
//Method 2 using array

var monthNumber=1
var month=[
    "January","February",
    "March","April",
    "May","June",
    "July","August",
    "September","October",
    "November","December"
];
var monthName = month[monthNumber - 1];
console.log(monthName);
