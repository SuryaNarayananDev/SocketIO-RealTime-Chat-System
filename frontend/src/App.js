import './App.css';
import MainContainer from './Components/MainContainer';
import { useState } from 'react';
function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className={theme?"App-dark":"App-light"}>
      <MainContainer theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;
