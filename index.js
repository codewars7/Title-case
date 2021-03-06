// Original solution
//const titleCase = (str) => {
//
//  str = str.toLowerCase();
//
//  let titleStr ='';
//
//  for(let i = 0; str.length > i; i++) {
//    if(str[i] === ' '){
//      let capital = " " + str[i + 1].toUpperCase()
//      titleStr += capital;
//      i++;
//    }
//    else {
//      titleStr += (str[i])
//    }
//  }
//  
//  return str[0].toUpperCase() + titleStr.slice(1);
//}
//
//console.log(titleCase("I'm a little tea pot"))



// solution with split and join methods
//const titleCase = (str) => {
//  str = str.toLowerCase().split(' ');
//  for (var i = 0; i < str.length; i++) {
//    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//  }
//  return str.join(' ');
//}
//titleCase("I'm a little tea pot");

// sollution with map
//const titleCase = (str) => {
//  str = str.toLowerCase().split(" ")
//  return str.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
//}


// sollution with map and replace. Replace method can use word or regex
// I used just word

const titleCase = (str) => {
  str = str.toLowerCase().split(' ')
  return str.map(word => word.replace(word[0], word[0].toUpperCase())).join(' ')
}

console.log(titleCase("I'm a little tea pot"))
