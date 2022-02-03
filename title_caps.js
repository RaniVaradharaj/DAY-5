// ANONYMOUS FUNCTION :
let toTitleCase = function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    return str.join(' '); 
  }
  
  console.log(toTitleCase("heLlO dEveloPers"));  //output--->  Hello Developers

  // IIFE :
((str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' ')); ;     //output--->  Hello Developers
  })("heLlO dEveloPers");