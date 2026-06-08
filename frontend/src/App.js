import './App.css';
import MainContainer from './Components/MainContainer';
import { useState } from 'react';
import LoginPage from './Components/pages/LoginPage';
import { Route, Routes } from 'react-router';
import SignupPage from './Components/pages/SignupPage'; 
import WelcomePage from './Components/pages/WelcomePage';
import OnlineUsers from './Components/OnlineUsers';
import CreateGroup from './Components/pages/CreateGroup';
import WorkArea from './Components/WorkArea';
import OnlineGroups from './Components/OnlineGroups';
function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className={theme?"App-dark":"App-light"}>
      {/* <MainContainer theme={theme} setTheme={setTheme}/> */}
      <Routes>
        <Route path="/" element={<LoginPage theme={theme}/>} />
        <Route path="/signup" element={<SignupPage theme={theme}/>} />
        <Route path="app" element={<MainContainer theme={theme} setTheme={setTheme}/>}>
          <Route path="welcome" element={<WelcomePage theme={theme}/>} />
          <Route path="chat" element={<WorkArea theme={theme}/>} />
          <Route path="users" element={<OnlineUsers theme={theme}/>} />
          <Route path="groups" element={<OnlineGroups theme={theme}/>} />
          <Route path="create-group" element={<CreateGroup theme={theme}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
