import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import './style.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nama, setNama] = useState('');
    const [erusername, setErusername] = useState('');
    const [erpassword, setErpassword] = useState('');
    const [ernama, setErnama] = useState('');

    const register = () => {
        if (username === '') {
            setErusername('Mohon buat username')
        } else if (password === '') {
            setErpassword('Password harus diisi')
            setErusername('')
        } else if (nama === '') {
            setErnama('Nama harus diisi')
            setErpassword('')
        } else {
            Axios.post("http://localhost:3001/register", {
                username: username,
                password: password,
                nama: nama
            });
        }
    }

    return (
        <>
            <div className="container py-5 mt-5" id='ts'>
                <h1 className='text-light'>Register</h1>
                <p className='text-light'>
                    Please register to add account
                </p>
                <hr />
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className='form-control' onChange={(e) => { setUsername(e.target.value) }} />
                    <b className="text-danger">{erusername}</b>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className='form-control' onChange={(e) => { setPassword(e.target.value) }} />
                    <b className="text-danger">{erpassword}</b>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className='form-control' onChange={(e) => { setNama(e.target.value) }} />
                    <b className="text-danger">{ernama}</b>
                </div>
                <div className="form-group">
                    <button className="btn btn-danger my-3" onClick={register}>
                        Register
                    </button>
                </div>
                <p className="text-light">
                    Have an account! Please <Link to='/'>login</Link>
                </p>
            </div>
        </>
    );
}

export default Register;