# CS81 Module 6B – Personal Assistant Simulation

This project is part of **Module 6 Assignment 6B** for Santa Monica College's CS81 JavaScript Programming course.  
It focuses on designing a JavaScript object using constructor functions, internal state, and methods that simulate a personal assistant.

---

## Repository Structure

```
.
├── assistant.js       # PersonalAssistant object definition and usage simulation
├── REFLECTION.md      # Reflection on customization, challenges, and improvements
└── README.md          # Project overview and setup instructions
```

---

## Objectives

- Use constructor functions to define reusable object templates
- Practice method creation using prototypes
- Apply the `this` keyword within object context
- Simulate real-world behavior through method interaction
- Reflect on object logic and personalization

---

## Features in `assistant.js`

The script includes:

- `PersonalAssistant(name)`  
  → Constructor function that initializes name, empty task list, and default mood.

- `.addTask(task)`  
  → Adds a new task to the assistant’s internal list and logs confirmation.

- `.completeTask()`  
  → Removes and logs the first task from the list (FIFO).

- `.reportMood()`  
  → Prints the assistant’s current mood to the console.

- **Simulation Code**  
  → Demonstrates a daily scenario with task additions, completions, and mood transitions.

---

## Setup & Usage

1. Clone the repository:
```bash
git clone https://github.com/sergehall/cs81-module6b-assistant
cd cs81-module6b-assistant
```

2. Run the script in Node.js:
```bash
node assistant.js
```

---

## Example Output

```
Hi! I'm SergeBot, your personal assistant.
Mood: focused
Task added: Finish CS81 Assignment 6B
Task added: Prepare dinner
Task added: Go for a 30-minute run
Completed: Finish CS81 Assignment 6B
Completed: Prepare dinner
Mood: accomplished
```

---

## Git Commit History

Includes at least 4 meaningful commits:
- `init: create project and add assistant.js`
- `feat: add task, completeTask, and reportMood methods to PersonalAssistant`
- `feat: simulate assistant behavior with real-life tasks and mood tracking`
- `docs: write REFLECTION.md and README.md with project overview`

---

## License

This project is for educational use only as part of CS81 coursework at Santa Monica College.
