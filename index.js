const readLineSync = require('readline-sync');
var myquestions =[
    {
      question : " The C++ language is" ,
      answers  : {
          a : 'Pure Object oriented',
          b : 'Not Object oriented',
          c : 'Semi Object-oriented or Partial Object-oriented',
          d : 'None of the above'
      },
      correctAnswer : 'c'
    },
    {
      question : "Which of the following class allows to declare only one object of it?",
      answers  :{
          a : 'Abstract class',
          b : 'Virtual class',
          c : 'Singleton class',
          d : 'Friend class'
      },
      correctAnswer : 'c'
    },
    {
      question : " Which of the following is the correct syntax for declaring the array?",
      answers  :{
          a : 'init array []',
          b : 'int array [5];',
          c : 'Array[5];',
          d : 'None of the above'
      },
      correctAnswer : 'b'
    },
    {
      question : " Which type of memory is used by an Array in C++ programming language?",
      answers  :{
          a : 'Contiguous',
          b : 'None-contiguous',
          c : 'Both A and B',
          d : 'None of the above'
      },
      correctAnswer : 'a'
    },
    {
      question : " Which types of arrays are always considered as linear arrays?",
      answers  :{
          a : 'Single-dimensional',
          b : 'Multi-dimensional',
          c : 'Both A and B',
          d : 'None of the above'
      },
      correctAnswer : 'a'
    },

]; 
function main(){
  let score = 0 ;

  for(var iterator = 0 ; iterator<myquestions.length; iterator++)
  {

    showQuestion(iterator);
    console.log(`\n`);
    showAnswers(iterator);
     console.log(`\n`);
    var letters = /^[a-d]+$/;
     const user_answer = readLineSync.question('\nEnter your option: ' + '\n');
     if(user_answer.match(letters))
     {
        if(user_answer == myquestions[iterator].correctAnswer){
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
 
    console.log(`${myquestions[questionnumber].question}`);
  
}

//showQuestion(myquestions);
function showAnswers(questionnumber){
 
 for( var abc in myquestions[questionnumber].answers)
 {
 console.log(`${abc}  ${myquestions[questionnumber].answers[abc]}`);
 }
}

function DisplayScore(score){
  console.log(` you scored ${score} out of ${myquestions.length}`);
}

main();
