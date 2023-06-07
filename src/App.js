import Navbar from './components/Navbar';
import Application from './components/Application';
import './App.css';

function App() {
  document.documentElement.setAttribute("data-theme", "dark");
  return (
    <>
      <Navbar heading='To Do App' />
      <Application />
    </>
  );
}

export default App;