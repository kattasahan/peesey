import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-background font-inter font-light text-foreground text-sm">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
