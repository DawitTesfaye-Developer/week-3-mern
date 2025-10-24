import * as React from 'react';
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Card from '../components/Card';
import Button from '../components/Button';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTask = () => {
    if (inputValue.trim()) {
      const newTask: Task = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <Card title="Task Manager" className="mb-6">
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="Add a new task..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm sm:text-base"
          />
          <Button onClick={addTask} className="w-full sm:w-auto">Add</Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Button
            variant={filter === 'all' ? 'primary' : 'secondary'}
            onClick={() => setFilter('all')}
            className="flex-1 sm:flex-none"
          >
            All
          </Button>
          <Button
            variant={filter === 'active' ? 'primary' : 'secondary'}
            onClick={() => setFilter('active')}
            className="flex-1 sm:flex-none"
          >
            Active
          </Button>
          <Button
            variant={filter === 'completed' ? 'primary' : 'secondary'}
            onClick={() => setFilter('completed')}
            className="flex-1 sm:flex-none"
          >
            Completed
          </Button>
        </div>

        <ul className="space-y-2">
          {filteredTasks.map(task => (
            <li key={task.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
              <div className="flex items-center gap-2 flex-1 w-full sm:w-auto">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-4 h-4 flex-shrink-0"
                />
                <span className={`flex-1 break-words ${task.completed ? 'line-through text-gray-500' : ''} text-sm sm:text-base`}>
                  {task.text}
                </span>
              </div>
              <Button variant="danger" onClick={() => deleteTask(task.id)} className="w-full sm:w-auto mt-2 sm:mt-0">Delete</Button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default TaskManager;
