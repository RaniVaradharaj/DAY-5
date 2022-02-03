//  Anonymous function Rotate an array by k times :
const Rotate = function(a,k) {
    for(i=0;i<k;i++){
        let d=a[a.length-1];
        a.pop();
        a.splice(0,0,d);
    }    
    console.log(a);
}
let arr = [1,2,3,4,5,6,7,8,9];
let k = 4;
Rotate(arr,k);

 // IIFE Rotate an array by k times :
 ((a,k) => {
    for(i=0;i<k;i++){
        let d=a[a.length-1];
        a.pop();
        a.splice(0,0,d);
    }    
    console.log(a);
 })([1,2,3,4,5,6,7,8,9],4);