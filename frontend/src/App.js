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
import { useSelector } from 'react-redux';
function App() {
  const themeValue = useSelector((state) => state.theme.value);
  return (
    <div className={themeValue?"App-dark":"App-light"}>
      {/* <MainContainer theme={theme} setTheme={setTheme}/> */}
      <Routes>
        <Route path="/*" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<WelcomePage/>} />
          <Route path="chat" element={<WorkArea />} />
          <Route path="users" element={<OnlineUsers />} />
          <Route path="groups" element={<OnlineGroups />} />
          <Route path="create-group" element={<CreateGroup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
