//  ANONYMOUS FUNCTION :
let sumOfNumbers = function(a) {
    let b=0;
    a.map((e)=>{
        b+=e;
    });
    console.log(b);            //output=>  15
}
sumOfNumbers([9,3,4,5]);

// IIFE :
(function(a) {
    let b=0;
    a.map((e)=>{
        b+=e;
    });
    console.log(b);            //output=>   15
})([9,3,4,5]);