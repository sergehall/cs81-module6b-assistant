// assistant.js

// Constructor function to create a personal assistant object
function PersonalAssistant(name) {
  this.name = name;           // Assistant's name
  this.tasks = [];            // Array to hold tasks
  this.mood = "neutral";      // Default mood
}

// Adds a new task to the assistant's task list
PersonalAssistant.prototype.addTask = function (task) {
  this.tasks.push(task);
  console.log(`${this.name} added task: "${task}"`);
};

// Completes the first task and updates mood
PersonalAssistant.prototype.completeTask = function () {
  if (this.tasks.length > 0) {
    const completed = this.tasks.shift();
    console.log(`${this.name} completed task: "${completed}"`);
    this.mood = "productive";
  } else {
    console.log(`${this.name} has no tasks left to complete.`);
    this.mood = "relaxed";
  }
};

// Reports current mood
PersonalAssistant.prototype.reportMood = function () {
  console.log(`${this.name}'s current mood is: ${this.mood}`);
};

// --- Simulate a day with the assistant ---

// Create an instance of the assistant
const myAssistant = new PersonalAssistant("SergeBot");

// Greet the user
console.log(`Hi! I'm ${myAssistant.name}, your personal assistant.`);

// Report mood before tasks
myAssistant.mood = "focused";
myAssistant.reportMood();

// Add real tasks
myAssistant.addTask("Finish CS81 Assignment 6B");
myAssistant.addTask("Prepare dinner");
myAssistant.addTask("Go for a 30-minute run");

// Complete some tasks
myAssistant.completeTask();
myAssistant.completeTask();

// Update and report mood after progress
myAssistant.mood = "accomplished";
myAssistant.reportMood();
