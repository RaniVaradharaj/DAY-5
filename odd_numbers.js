 // ANONYMOUS FUNCTION :

let oddNumbers = function(a) {
    let b=[];
    a.map((e)=>{
        if(e%2==1)
        {
            b.push(e);
        };
    });
    console.log(b);       // output--->  [ 1, 3, 5, 7, 9 ]
}
oddNumbers([1,2,3,4,5,6,7,8,9,10]); 

//IIFE:
((a) => {
    let b=[];
    a.map((e)=>{
        if(e%2==1){
            b.push(e);
        };
    });
    console.log(b);        // output-->  [ 1, 3, 5, 7, 9 ]
})([1,2,3,4,5,6,7,8,9,10]);

