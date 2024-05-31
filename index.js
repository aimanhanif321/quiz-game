#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// console.log("==============INTROVERT OR EXTROVERT ==================");
// console.log("======================GAME===============================");
// const questions = [
//     {
//         question: "\nQ.1 After a tiring day, what helps you feel re-energized?",
//         options: ["\n\tA. Spending time by yourself", "\tB. Socializing with friends"]
//     },
//     {
//         question: "\nQ.2 At social gatherings, you usually:",
//         options: ["\n\tA. Stick to conversations with a few close friends", "\tB. Mingle and meet new people"]
//     },
//     {
//         question: "\nQ.3 How do you prefer to manage stress?",
//         options: ["\n\tA. Think things through on your own", "\tB. Discuss your problems with others"]
//     },
//     {
//         question: "\nQ.4 Your perfect weekend activity is:",
//         options: ["\n\tA. Enjoying a quiet evening with a book", "\tB. Going out and having fun with friends"]
//     },
//     {
//         question: "\nQ.5 When making decisions, you:",
//         options: ["\n\tA. Take time to reflect and analyze", "\tB. Prefer to talk it out with others"]
//     },
//     {
//         question: "\nQ.5 In your free time, you are more likely to:",
//         options: ["\n\tA. Engage in a solitary hobby", "\tB. Participate in group activities"]
//     },
//     {
//         question: "\nQ.6 In a team setting, you:",
//         options: ["\n\tA. Prefer to work independently or with a small group", "\tB. Thrive in a large, collaborative group"]
//     },
//     {
//         question: "\nQ.7 When meeting new people, you:",
//         options: ["\n\tA. Feel reserved and take time to open up", "\tB. Feel energized and engage easily"]
//     }
// ];
// let currentQuestionIndex = 0;
// let score = 0;
// async function loadQuestions() {
//     if(currentQuestionIndex < questions.length) {
//         const getanswer = questions[currentQuestionIndex];
//         const response = await inquirer.prompt([
//             {
//                 name:"answer",
//                 type:"list",
//                 message:getanswer.question,
//                 choices:getanswer.options
//             }
//         ]);
//         if(response.answer === getanswer.options[0]){
//             score++;
//         }
//         currentQuestionIndex++;
//         loadQuestions();
//     }else{
//        showResult();
//     }
//    async function showResult() {
//      let resultText;
//      if(score >= 6){  
//       resultText = "Introvert";
//      }else if(score <=2){
//        resultText = "Extrovert";
//      }else{
//       resultText = "Balanced traits of introversion and extroversion";
//      }
//      console.log(`\n\tYour score is ${score}. You are likely an ${resultText}.`);
//     }
//     }
// loadQuestions();
console.log(chalk.bold.blue("==============INTROVERT OR EXTROVERT =================="));
console.log(chalk.bold.blue("======================GAME==============================="));
const questions = [
    {
        question: "\nQ.1 After a tiring day, what helps you feel re-energized?",
        options: ["\n\tA. Spending time by yourself", "\tB. Socializing with friends"]
    },
    {
        question: "\nQ.2 At social gatherings, you usually:",
        options: ["\n\tA. Stick to conversations with a few close friends", "\tB. Mingle and meet new people"]
    },
    {
        question: "\nQ.3 How do you prefer to manage stress?",
        options: ["\n\tA. Think things through on your own", "\tB. Discuss your problems with others"]
    },
    {
        question: "\nQ.4 Your perfect weekend activity is:",
        options: ["\n\tA. Enjoying a quiet evening with a book", "\tB. Going out and having fun with friends"]
    },
    {
        question: "\nQ.5 When making decisions, you:",
        options: ["\n\tA. Take time to reflect and analyze", "\tB. Prefer to talk it out with others"]
    },
    {
        question: "\nQ.6 In your free time, you are more likely to:",
        options: ["\n\tA. Engage in a solitary hobby", "\tB. Participate in group activities"]
    },
    {
        question: "\nQ.7 In a team setting, you:",
        options: ["\n\tA. Prefer to work independently or with a small group", "\tB. Thrive in a large, collaborative group"]
    },
    {
        question: "\nQ.8 When meeting new people, you:",
        options: ["\n\tA. Feel reserved and take time to open up", "\tB. Feel energized and engage easily"]
    }
];
let currentQuestionIndex = 0;
let score = 0;
async function loadQuestions() {
    if (currentQuestionIndex < questions.length) {
        const getanswer = questions[currentQuestionIndex];
        const response = await inquirer.prompt([
            {
                name: "answer",
                type: "list",
                message: chalk.green(getanswer.question),
                choices: getanswer.options.map(option => chalk.yellow(option))
            }
        ]);
        if (response.answer === chalk.yellow(getanswer.options[0])) {
            score++;
        }
        currentQuestionIndex++;
        loadQuestions();
    }
    else {
        showResult();
    }
}
async function showResult() {
    let resultText;
    if (score >= 6) {
        resultText = "Introvert";
    }
    else if (score <= 2) {
        resultText = "Extrovert";
    }
    else {
        resultText = "Balanced traits of introversion and extroversion";
    }
    console.log(chalk.bold.magenta(`\n\tYour score is ${score}. You are likely an ${resultText}.`));
}
loadQuestions();
