import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainContext from "./context/MainContext";
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import ThemeCustomizerIcon from './components/themeCustomizer/ThemeCustomizerIcon';
import ContentRouterview from './views/ContentRouterview';
import LogIn from "./components/login/LogIn";
import SignUp from './components/login/SignUp';
import "./sass/index.css";

function getToken() {
  const token = JSON.parse(sessionStorage.getItem('token'));
  return token;
}

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [sideFixed, setSideFixed] = useState(false);
  const [token, setToken] = useState(getToken());

  return (
    <MainContext.Provider value={{ showSearch, setShowSearch, sideFixed, setSideFixed, setToken }}>
      <div className="app">
        <BrowserRouter>
          {!token && <Routes>
            <Route path='/login' element={<LogIn />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/' element={<Navigate to='/login' />}></Route>
          </Routes>}
          {token && <Sidebar />}
          <div className={sideFixed ? "containerOuter sideFixed" : "containerOuter"}>
            <Header/>
            <ContentRouterview />
            <Footer />
            <ThemeCustomizerIcon />
          </div>
        </BrowserRouter>
      </div>
    </MainContext.Provider>
  );
}

export default App;


