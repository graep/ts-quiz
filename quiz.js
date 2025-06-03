"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const questions = [
    { question: "What is the capital of Maine? ", answer: "Augusta" },
    { question: "What color is the sky on a clear day? ", answer: "blue" },
    { question: "What was Darth Vader's real name? ", answer: "Anakin" },
    { question: "How many weeks in a year? ", answer: "52" },
    { question: "What is the furthest planet from the Sun? ", answer: "Neptune" }
];
function getValidAnswer(promptText) {
    while (true) {
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
    const userResp = getValidAnswer(q.question);
    const normalizedUser = userResp.toLowerCase();
    const normalizedAnswer = q.answer.toLowerCase();
    const isCorrect = normalizedUser === normalizedAnswer;
    console.log(`You answered ${userResp}` + ", " + `${isCorrect ? "correct! ✅" : "wrong ❌"}`);
    return isCorrect;
}
function runQuiz() {
    let score = 0;
    for (const q of questions) {
        if (askQuestion(q)) {
            score++;
        }
    }
    console.log(`\nYour final score: ${score} out of ${questions.length}`);
}
runQuiz();
