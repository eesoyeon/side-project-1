import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://29911bff-8812-4fc1-b542-dade21cd7bb1.mock.pstmn.io/login',
                {
                    email,
                    password,
                }
            );

            if (response.status === 200) {
                // 서버에서 받은 JWT 토큰 저장
                const token = response.data.token;
                console.log(token);

                localStorage.setItem('token', token);

                navigate('/mypage');
            }
        } catch (error) {
            console.log('로그인 실패: ', error);
            if (error.response) {
                alert('로그인에 실패했습니다.');
            }
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="email">이메일</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder="you@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="login-button" type="submit">
                    로그인
                </button>
            </form>
        </div>
    );
};

export default Login;
