import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const User = {
    email: 'pink731p@naver.com',
    name: '이소연',
    password: 'abcd1234!',
};

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://29911bff-8812-4fc1-b542-dade21cd7bb1.mock.pstmn.io/singup',
                {
                    email,
                    username,
                    password,
                }
            );

            if (response.status === 200) {
                // 서버에서 받은 JWT 토큰 저장
                const token = response.data.token;
                console.log(token);
                localStorage.setItem('token', token);

                navigate('/login');
            }
        } catch (error) {
            console.log('회원가입 실패: ', error);
            if (error.response) {
                alert('회원가입 실패');
            }
        }
    };

    return (
        <div className="signup-container">
            <h2>회원가입</h2>
            <form className="signup-form" onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder="이메일"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="user-name"></label>
                    <input
                        type="text"
                        id="user_name"
                        value={username}
                        placeholder="이름"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder="비밀번호"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="confirm-password"></label>
                    <input
                        type="password"
                        id="confirm_password"
                        value={confirmPassword}
                        placeholder="비밀번호 확인"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button className="signup-button" type="submit">
                    회원가입
                </button>
            </form>
        </div>
    );
};

export default SignUp;
