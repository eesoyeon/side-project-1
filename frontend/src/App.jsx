import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import MyPage from './components/MyPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    {/* <Route path="/login" element={<Login />}></Route> */}
                    <Route path="/signup" element={<SignUp />}></Route>
                    <Route path="/mypage" element={<MyPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
