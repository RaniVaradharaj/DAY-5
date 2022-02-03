// ANONYMOUS FUNCTION :
let primeNumbers = function(a) {
    let r=[];
    for(let j=0;j<a.length;j++){
        var d=0;
        for(let i=2;i<a[j];i++){
            if(a[j]%i==0){
                 d=d+1;
                 }
        };
        if(d==0){ 
            r.push(a[j]);
         }
    }
    console.log(r);    //output=>   [ 1,  2,  3,  5,  7, 19, 29, 31, 37, 41 ]
}
primeNumbers([1,2,3,4,5,6,7,8,9,10,12,15,19,27,29,31,33,35,37,39,41]);

// IIFE :
(function(a)  {
    let r=[];
    for(let j=0;j<a.length;j++){
        var d=0;
        for(let i=2;i<a[j];i++){
            if(a[j]%i==0){
                 d=d+1;
                 }
        };
        if(d==0){ 
            r.push(a[j]); 
        }
    }
    console.log(r);     //output=>   [ 1,  2,  3,  5,  7, 19, 29, 31, 37, 41 ]

})
([1,2,3,4,5,6,7,8,9,10,12,15,19,27,29,31,33,35,37,39,41]); 