const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// 3 tasks loop
for (let i = 0; i < 3; i++) {

  let taskTitle = prompt(`Enter title for task ${i + 1}:`);
  let taskDescription = prompt(`Enter description for task ${i + 1}:`);
  let taskStatus = prompt(
    "Enter task status (todo, doing, done):"
  ).toLowerCase();

  // Status error catching
  while (
    taskStatus !== "todo" &&
    taskStatus !== "doing" &&
    taskStatus !== "done"
  ) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    taskStatus = prompt(
      "Enter task status (todo, doing, done):"
    ).toLowerCase();
  }

  // Create new ID
  const newId =
    Math.max(...initialTasks.map(task => task.id)) + 1;

  const newTask = {
    id: newId,
    title: taskTitle,
    description: taskDescription,
    status: taskStatus,
  };

  initialTasks.push(newTask);
}
//Chck console message
alert("There are enough tasks on your board, please check them in the console.");

// Log full list
console.log("Updated Task List:");
console.log(initialTasks);

// Completed task log
const completedTasks = initialTasks.filter(
  task => task.status === "done"
);

console.log("Completed Tasks:");
console.log(completedTasks);