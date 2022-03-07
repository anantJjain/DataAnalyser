import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ComparisonGraph from './components/ComparisonGraph';
import QuesAnalysis from './components/QuesAnalysis';
import Sidebar from './components/Sidebar';
import SyllabAnalysis from './components/SyllabAnalysis';
import QuickStats from './components/QuickStats';
import SkillTest from './components/SkillTest';
import CenterGrid from './components/CenterGrid';
import LeftGrid from './components/LeftGrid';

import Modl from './components/Modal';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <CenterGrid />
      <LeftGrid />
      {/* <Modl /> */}
      {/* <Try /> */}
      
    </div>
  );
}

export default App;
