import React, { useEffect, useState } from 'react'

import img from "./assets/images/img-01.png"
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { checkLogin } from '../../reduxs/action'
const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState([]);
    const Navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        getDataLogin();
    }, []);

    const getDataLogin = async () => {
        try {
            const response = await fetch('https://647c676fc0bae2880ad0a7a8.mockapi.io/login', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                const tasks = await response.json();
                setUser(tasks);
            } else {
                // handle error
                console.error('Failed to fetch login data');
            }
        } catch (error) {
            // handle error
            console.error('Error fetching login data:', error);
        }
    };

    const handleSubmit = () => {
        const foundUser = user.find(item => item.userName === userName);

        if (foundUser) {
            if (foundUser.password === password) {
                alert("Đăng nhập thành công");
                dispatch(checkLogin(true))
                Navigate('/home')
            } else {
                alert('Sai mật khẩu');
            }
        } else {
            alert("Tài khoản không tồn tại")
        }
    };
    return (
        <div className='login'>
            <div className="wrap-login100">
                <div className="login100-pic js-tilt" >
                    <img src={img} alt="IMG" />
                </div>

                <form className="login100-form validate-form">
                    <span className="login100-form-title">
                        Admin Login
                    </span>

                    <div className="wrap-input100 validate-input" >
                        <input className="input100" value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Email" />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                    </div>

                    <div className="wrap-input100 validate-input">
                        <input className="input100" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <FontAwesomeIcon icon={faLock} />
                        </span>
                    </div>

                    <div className="input100 btn_login " onClick={handleSubmit}>
                        Log In
                    </div>


                    <div className="text-center p-t-136">
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login