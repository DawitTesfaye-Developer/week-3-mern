import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './components/profile';
import TaskManager from './pages/TaskManager';
import ApiData from './pages/ApiData';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Profile name="Dawit" age={24} />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/api" element={<ApiData />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
