const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = title => {
  const cased = tutorials.map(element => {
    let word = ""
    for(let i = 0; i < element.length; i++){
      if(i == 0){
        word += element[i].toUpperCase()
      }
      else if(element[i-1] == " "){
        word += element[i].toUpperCase()
      }
      else{
        word += element[i]
      }
    }
    return word
  })
  console.log(cased)
  return cased
}

titleCased(tutorials)
