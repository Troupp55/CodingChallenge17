// src/components/TaskGenerator.js
import React, { useState } from 'react';
import tasks from '../tasks';
import FancyText from './FancyText';

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const nextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const markTaskCompleted = () => {
    tasks[currentTaskIndex].isCompleted = true;
  };

  const currentTask = tasks[currentTaskIndex];
  const motivationalMessages = [
    "You can do it!",
    "Keep pushing forward!",
    "Almost there!",
    // Add more messages as needed
  ];

  const getRandomMotivationalMessage = () => {
    return motivationalMessages[
      Math.floor(Math.random() * motivationalMessages.length)
    ];
  };

  return (
    <div>
      <FancyText title={true} text={`Task ${currentTask.id}`} />
      <FancyText title={false} text={currentTask.name} />
      <FancyText title={false} text={currentTask.isCompleted ? "Completed ✔" : "Pending"} />
      <button onClick={nextTask}>Next Task</button>
      <button onClick={markTaskCompleted}>Mark as Completed</button>
      <FancyText title={false} text={getRandomMotivationalMessage()} />
    </div>
  );
};

export default TaskGenerator;
