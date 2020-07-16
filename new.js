 function inchToFeet(inch){
     var feet = inch/12;
     return feet;
 }
 result=inchToFeet(345);
 console.log(result);
 inchToFeet(999);


 // leap year



 let date = new Date(2020, 1, 29).getDate();
if (date === 29) {
console.log('it is a leap year');
} else {
console.log('it is a common year');
}
