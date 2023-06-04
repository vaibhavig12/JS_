/*write a javascript to print all prime numbers from 1 to 100 in reverse
order.
reverse number
var num=12345
var reverse=num.toString().split('').reverse().join('');
console.log(reverse);
*/
/* reverse method 2
var n=1234
var  ans=0;
while (n!=0){
    var mod=n%10;
    ans= (ans*10)+mod;
    n= Math.floor(n/10);
}
console.log(ans);*/
var start = 1;
var end = 100;

for (var i = end; i >= start; i--) {
    var isPrime = true;

    // Check if current number i is prime
    for (var j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }

    // If i is prime, print it
    if (isPrime && i > 1) {
        console.log(i);        
    }
}