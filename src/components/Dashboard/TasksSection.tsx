
import React, { useState } from 'react';

const TasksSection = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Schedule meeting with Zencore", completed: false, priority: "high" },
    { id: 2, text: "Review Q1 investment report", completed: false, priority: "medium" },
    { id: 3, text: "Update fleet analytics dashboard", completed: true, priority: "low" },
    { id: 4, text: "Analyze market trends", completed: false, priority: "high" }
  ]);
  
  const [newTask, setNewTask] = useState('');
  const [showAddTask, setShowAddTask] = useState(false);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask,
        completed: false,
        priority: "medium"
      }]);
      setNewTask('');
      setShowAddTask(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-500';
      case 'medium': return 'border-yellow-500';
      case 'low': return 'border-green-500';
      default: return 'border-gray-500';
    }
  };

  return (
    <div className="border border-gray-700 rounded-lg p-6 bg-black relative overflow-hidden hover:border-gray-500 transition-all duration-300 group">
      {/* Futuristic accent */}
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-gray-500 opacity-20 rounded-br-lg group-hover:opacity-40 transition-opacity duration-300"></div>
      
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-light text-white uppercase tracking-wider">Tasks</h3>
        <button 
          onClick={() => setShowAddTask(!showAddTask)}
          className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
        >
          <span className="text-xl">+</span>
        </button>
      </div>
      
      {showAddTask && (
        <div className="mb-4 animate-fade-in">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add new task..."
              className="flex-1 bg-gray-900 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:border-gray-400 focus:outline-none"
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
            />
            <button
              onClick={addTask}
              className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded text-sm transition-colors duration-200"
            >
              Add
            </button>
          </div>
        </div>
      )}
      
      <div className="space-y-3 max-h-48 overflow-y-auto">
        {tasks.map((task, index) => (
          <div 
            key={task.id} 
            className={`flex items-center space-x-3 p-2 rounded hover:bg-gray-900 transition-all duration-200 cursor-pointer group/task animate-fade-in border-l-2 ${getPriorityColor(task.priority)}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="w-4 h-4 rounded border-gray-600 bg-black text-green-500 focus:ring-green-500 focus:ring-2 transition-all duration-200"
            />
            <span className={`text-sm flex-1 transition-all duration-300 ${
              task.completed 
                ? 'text-gray-500 line-through opacity-50' 
                : 'text-gray-300 group-hover/task:text-white'
            }`}>
              {task.text}
            </span>
            <div className={`w-2 h-2 rounded-full ${
              task.priority === 'high' ? 'bg-red-500' :
              task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
            } opacity-70`}></div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="flex justify-between text-xs text-gray-400">
          <span>Completed: {tasks.filter(t => t.completed).length}</span>
          <span>Total: {tasks.length}</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(tasks.filter(t => t.completed).length / tasks.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TasksSection;
