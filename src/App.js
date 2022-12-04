import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./Components/Navbar";
import HomePage from "./Page/HomePage";
import { LOCAL_STORAGE_LOGGED_USRS_KEY } from "./Components/UsersList";
import LoginForm from "./Components/LoginForm";
import SignUpForm from "./Components/SignUpForm";
import AddedCardPage from "./Page/AddedCardPage";
import ViewProductPage from "./Page/ViewProductPage";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [user]);

  useEffect(() => {
    const loggedInUser = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_LOGGED_USRS_KEY)
    );
    if (loggedInUser) {
      setUser(loggedInUser);
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Navbar setUser={setUser} isLoggedIn={isLoggedIn} user={user}></Navbar>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/login" element={<LoginForm setUser={setUser} setLoggedIn={setLoggedIn}></LoginForm>}/>
            <Route exact path="/signup" element={<SignUpForm/>} />
            <Route exact path="/AddtoCardPage" element={<AddedCardPage/>} />
            <Route exact path='/ViewProduct/:id' element={<ViewProductPage/>} />            
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
