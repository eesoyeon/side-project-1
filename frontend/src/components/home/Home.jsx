import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Login from '../login/Login';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-title">
                <h1>DIARY🌱</h1>
            </div>
            <Login />
            <div className="home-signup">
                <p>아직 회원이 아니신가요?</p>
                <Link to="/signup">회원가입</Link>
            </div>
        </div>
    );
};

export default Home;
