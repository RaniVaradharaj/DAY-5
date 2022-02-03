//anonymous function Remove duplicates from an array :
const remdup= function(r){
    let arr=[];
    r.map((e)=>{
           if(arr.includes(e)){  }
           else{ arr.push(e); }
    });
    console.log(arr);
};
let arr=[1,5,7,9,6,4,8,7,9,6,3,2,1,4,5,7,8,6,3,2,9,8,4,2];
remdup(arr);

//IIFE Remove duplicates from an array :
((r) => {
    let arr=[];
    r.map((e)=>{
           if(arr.includes(e)){  }
           else{ arr.push(e); }
    });
    console.log(arr);
})([1,5,7,9,6,4,8,7,9,6,3,2,1,4,5,7,8,6,3,2,9,8,4,2]);
