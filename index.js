/* let name = "LaunchCode";

for (let i = 0; i < name.length; i++) {
   console.log(name[i]);
}


let languages = ["JS", "Java", "C#", "Python"];

for (let i = 0; i < languages.length; i++) {
   console.log(languages[i]);
}



let phrase = "LaunchCode's LC101";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}

*/
const input = require('readline-sync');

let question1 = "Who was the first American woman in space? "
let question2 = "True or false: 5 kilometer == 5000 meters?"
let question3 = "(5 + 3)/2 * 10 = ?";
let question4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?";
let question5 = "What is the minimum crew size for the ISS?";
let question = [question1, question2,question3, question4, question5];
let correctAnswer1 = "Sally Ride";
let correctAnswer2 = "true";
let correctAnswer3 = "40";
let correctAnswer4 = "Trajectory";
let correctAnswer5 = "3";

let correctAnswer = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5];
let arrCandidateAnswer = [];

let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;


 for (let i = 0; i < question.length; i++) {
   const input = require('readline-sync');
  console.log(question[i]);
  candidateAnswer= input.question();
 console.log("Your Answer: "+ candidateAnswer)
 console.log("Correct answer: " + correctAnswer[i]);
 arrCandidateAnswer.push(candidateAnswer);
   }