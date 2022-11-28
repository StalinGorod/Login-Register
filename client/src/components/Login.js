import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from "axios";
import './style.css';

Axios.defaults.withCredentials = true;

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('')
    let navigate = useNavigate();

    const login = () => {
        if (username === '') {
            setStatus('Mohon username anda dimasukkan')
        } else if (password === '') {
            setStatus('Password tidak boleh kosong')
        } else {
            Axios.post("http://localhost:3001/login", {
                username: username,
                password: password,
            }).then((response) => {
                if (response.data.message) {
                    setStatus(response.data.message);
                } else {
                    sessionStorage.setItem('token', response.data);
                    navigate('/dashboard');
                }
            });
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem("token") === null) {
            navigate('/');
        } else {
            navigate('/dashboard');
        }
    }, [navigate]);

    return (
        <>
            <div className="container py-5 mt-5" id='ts'>
                <h1 className='text-light'>LOGIN</h1>
                <p className='text-light'>
                    Please login to authenticate
                </p>
                <hr />
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className='form-control' onChange={(e) => { setUsername(e.target.value) }} />
                    <b className="text-danger">{status}</b>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className='form-control' onChange={(e) => { setPassword(e.target.value) }} />
                    <b className="text-danger">{status}</b>
                </div>
                <div className="form-group">
                    <button className="btn btn-danger my-3" onClick={login}>
                        Login
                    </button>
                </div>
                <p className="text-light">
                    Don't have account? Please <Link to='/register'>register</Link>
                </p>
            </div>
        </>
    );
}

export default Login;