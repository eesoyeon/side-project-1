import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MyPage.css';

const MyPage = () => {
    const [userData, setUserData] = useState(null);

    const onClick = () => {
        console.log('로그아웃');
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="mypage-container">
            <h1>DIARY🌱</h1>
            <button onClick={onClick}>
                <Link to="/">로그아웃</Link>
            </button>
            <div className="diary-container">
                <input type=" text" />
                <button type="submit">작성하기</button>
            </div>
        </div>
    );
};

export default MyPage;
