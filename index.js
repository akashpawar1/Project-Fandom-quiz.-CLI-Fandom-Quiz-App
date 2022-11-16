// project: SQL queries? CLI App

var readlineSync = require('readline-sync')

var score = 0
var questions = [
  {
    question: "Who is Darth Vader? ",
    option: ['Anakin', 'Luke', 'Yoda', 'Han solo'],
    answer: 0
  },
  {
    question:"What color is Luke's lightsaber?",
    option:['green','blue','red','purple'],
    answer:0
  },
  {
    question:"how tall is yoda?",
    option:['1 inch','1 cm','100 meter','2 feet'],
    answer: 3
  },
  {
    question:'In how many lnguages is C-3P0 fluent?',
    option:['12','Over 6 million!','9','2'],
    answer:1
  },
  {
    question:"What planat is wooki's home planet is?",
    option:['Kashyyyk','Middle-Earth','Platform 9 3/4', 'Azeroth'],
    answer:0
  }
]

function quiz(Qlist){
  for (var i = 0; i < Qlist.length; i++){
    console.log(String(i+1) + '. ' + Qlist[i].question)
    var userAns = readlineSync.keyInSelect(Qlist[i].option,"")

    if(userAns == Qlist[i].answer){
      console.log("CORRECT :) \n")
      score++
    }
    else{
      console.log("OOPS!!! \n")
    }
  }
 
}

userName = readlineSync.question("What's your name? ")
quiz(questions)
console.log(userName + " you scored = " + score)