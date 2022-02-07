// Arrow Function Convert all the strings to title caps in a string array

let toTitleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' ')); ;     //output--->  Hello Developers
  }

  toTitleCase("heLlO dEveloPers");
