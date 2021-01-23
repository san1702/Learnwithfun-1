const readLineSync = require('readline-sync');

function welcome()
{
const welcome = readLineSync.question('\n Hello , Are you ready for the quiz? Please Type (yes/No)' + '\n');

if(welcome === "yes"){
console.log("Good,let's Start");
main();
}
else {
console.log("cool, come back later")
return;
}
}

var questions =[
    {
      question       : " The C++ language is" ,
      options        : ['Pure Object oriented','Not Object oriented','Semi Object-oriented or Partial Object-oriented','None of the above'],
      correctAnswer  : 'c'
    },
    {
      question       : "Which of the following class allows to declare only one object of it?",
      options        :['Abstract class','Virtual class','Singleton class','Friend class'],
    
      correctAnswer  : 'c'
    },
    {
      question      : " Which of the following is the correct syntax for declaring the array?",
      options       : ['init array []','int array [5];','Array[5];','None of the above'],
         
      correctAnswer : 'b'
    },
    {
      question      : " Which type of memory is used by an Array in C++ programming language?",
      options       : ['Contiguous','None-contiguous','Both A and B','None of the above'],
      
      correctAnswer : 'a'
    },
    {
      question      : " Which types of arrays are always considered as linear arrays?",
      options       : ['Single-dimensional','Multi-dimensional', 'Both A and B','None of the above'],
        
      correctAnswer : 'a'
    },

]; 
function main(){
  let score = 0 ;

  for(var iterator = 0 ; iterator<questions.length; iterator++)
  {

    showQuestion(iterator);
    console.log(`\n`);
    showOptions(iterator);
     console.log(`\n`);
    var letters = /^[a-d]+$/;
     const userAnswer = readLineSync.question('\nEnter your option: ' + '\n');
    
     if(userAnswer.match(letters))
     {
        if(userAnswer === questions[iterator].correctAnswer){
         console.log(`Yay !! Correct Answer`+ '\n');
         score = score +1;

       }
       else{
         console.log(`Sorry, this is not the right answer :(`+ '\n');
       }
     
     }
     else{
      console.log(`please choose from the mentioned options ! you have to restart the quiz!!`+ '\n');
     return;

     }
  }

  DisplayScore(score);
}

function showQuestion(questionnumber){
 
    console.log(`${questions[questionnumber].question}`);
  
}

function showOptions(questionnumber){
 
for(var options = 97 ; options <= 100 ; options++){
  	var showoptions = String.fromCharCode(options);
    console.log(`${showoptions}. ${questions[questionnumber].options[options-97]}`);

}
}

function DisplayScore(score){
  console.log(` you scored ${score} out of ${questions.length}`);
}

welcome();

