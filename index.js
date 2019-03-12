function titleCase(str) {

  str = str.toLowerCase();

  let titleStr ='';

  for(let i = 0; str.length > i; i++) {
    if(str[i] === ' '){
      let capital = " " + str[i + 1].toUpperCase()
      titleStr += capital;
      i++;
    }
    else {
      titleStr += (str[i])
    }
  }
  
  return str[0].toUpperCase() + titleStr.slice(1);
}

console.log(titleCase("I'm a little tea pot"))
