function setPigLatin(input, output){
  let objInput = document.querySelector('#'+input);
  let objOutput = document.querySelector('#'+output);
  let str = objInput.value;
  console.log(str)
  let words = str.split(' ');
  let result = '';
  for(let word of words){
    if(startsWithVowel(word)) 
      result += ' ' + getVowelStr(word);
    else if(startsWithOneConsonant(word)) 
      result += ' ' + getOneConsonantStr(word);
    else if(startsWithTwoConsonant(word)) 
      result += ' ' + getTwoConsonantStr(word);
    else;
    objOutput.textContent = result.substr(1); 
  }
}

function getVowelStr(str){
  return str + "way";
}

function getOneConsonantStr(str){
  if(str.length < 1) return str;
  return str.substr(1) + str.charAt(0) + "ay";
}

function getTwoConsonantStr(str){
  if(str.length < 2) return str;
  return str.substr(2) + str.substr(0,2) + "ay";
}

function isVowel(str, n){
  if(str.length <= n) return false;
  let vowel = "aeiouAEIOU"
  return vowel.indexOf(str.charAt(n)) >= 0;
}

function isConsonant(str, n){
  if(str.length <= n) return false;
  return !isVowel(str,n);
}

function startsWithVowel(str){
  return isVowel(str,0);
}

function startsWithOneConsonant(str){
  return isConsonant(str,0) && isVowel(str,1);
}

function startsWithTwoConsonant(str){
  return isConsonant(str,0) && isConsonant(str,1)
}