

function reverseNumber(num){
let reversedNumber = 0;
while(num>0){
    let mode = num%10; // gives the last digit of the number
    reversedNumber = reversedNumber*10+mode;
   // number =     (number/10); // 1234.5-.5 =1234
    num = (num - mode)/10 ;    //(12345-5)/10 = 1234
   //number = Math.floor(number/10); // 1234.5 => 1234
   //number = Math.trunc(number/10); // 1234.5 => 1234
}
return reversedNumber;
}


console.log(reverseNumber(12345)); // Output: 54321
//console.log(reverseNumber(987654321)); // Output: 123456789
//console.log(reverseNumber(1000)); // Output: 1