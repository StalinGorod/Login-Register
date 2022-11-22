import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [erusername, setErusername] = useState('')
    const [erpassword, setErpassword] = useState('')

    const login = () => {
        if (Username === '') {
            setErusername('Mohon username anda dimasukkan')
        } else if (Password === '') {
            setErpassword('Password tidak boleh kosong')
            setErusername('')
        }
    }

    return (
        <>
            <div className="container py-5">
                <h1 className='text-muted'>LOGIN</h1>
                <p className='text-muted'>
                    Please login to authenticate
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
                    <button className="btn btn-danger my-3" onClick={login}>
                        Login
                    </button>
                </div>
                <p className="text-muted">
                    Don't have account? Please <Link to='/register'>register</Link>
                </p>
            </div>
        </>
    );
}

export default Login;