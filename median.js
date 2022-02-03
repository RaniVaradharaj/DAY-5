//  ANONYMOUS FUNCTION:
let median = function(a,b){
    let arr=[...a,...b];
    arr.sort();
    let r;
    let l=arr.length;
    if(l%2===0){
        r= (arr[(l/2)] + arr[(l/2)-1])/2;
    }
    else{
        r= arr[(l-1)/2];
    }
    console.log(r);            //Output--->   5
};

let a = [5,6,9,1];
let b = [7,4,8,3,2];
median(a,b);

//  IIFE :
((a,b) => {
    let arr=[...a,...b];
    arr.sort();
    let r;
    let l=arr.length;
    if(l%2===0){
        r= (arr[(l/2)] + arr[(l/2)-1])/2;
    }
    else{
        r= arr[(l-1)/2];
    }
    console.log(r);           //Output--->   5
})([5,6,9,1], [7,4,8,3,2]);