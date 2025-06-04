"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const questions = [
    { question: "What is the capital of Maine? ", answer: "Augusta" }, // questions for the quiz and respective answers
    { question: "What color is the sky on a clear day? ", answer: "blue" },
    { question: "What was Darth Vader's real name? ", answer: "Anakin" },
    { question: "How many weeks in a year? ", answer: "52" },
    { question: "What is the furthest planet from the Sun? ", answer: "Neptune" }
];
function getValidAnswer(promptText) {
    while (true) { // also checks if user provide an answer at all, and asks to provide if not.
        const input = prompt(promptText);
        const trimmed = input.trim();
        if (trimmed === "") {
            console.log("Please provide an answer.");
            continue;
        }
        return trimmed;
    }
}
function askQuestion(q) {
    const userResp = getValidAnswer(q.question); // compares both lowered variables if they are the same it logs a correct or wrong
    const normalizedUser = userResp.toLowerCase(); // response.
    const normalizedAnswer = q.answer.toLowerCase();
    const isCorrect = normalizedUser === normalizedAnswer;
    console.log(`You answered ${userResp}` + ", " + `${isCorrect ? "correct! ✅" : "wrong ❌"}`);
    return isCorrect;
}
function runQuiz() {
    let score = 0; // logs final score.
    for (const q of questions) {
        if (askQuestion(q)) {
            score++;
        }
    }
    console.log(`\nYour final score: ${score} out of ${questions.length}`);
}
runQuiz();
