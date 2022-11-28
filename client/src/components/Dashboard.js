import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

function Dashboard() {

    let navigate = useNavigate();
    var username;
    if (sessionStorage.getItem('token') === null) {
        username = '';
    } else {
        var token = sessionStorage.getItem('token');
        var decoded = jwt_decode(token);
        username = decoded.username;
    }

    const logout = () => {
        sessionStorage.removeItem("token");
        navigate('/');
    }

    useEffect(() => {
        if (sessionStorage.getItem('token') === null) {
            navigate('/');
        } else {
            navigate('/dashboard');
        }
    }, [navigate]);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light shadow">
                <div className="container">
                    <h3 className="text-muted">Dashboard</h3>
                    <div className="">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <button className="btn btn-danger" onClick={logout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-fluid bg-light">
                <div className="container py-5">
                    Selamat Datang, <b>
                        {username}
                    </b>!
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, placeat recusandae inventore facilis deserunt repellat dolores, repudiandae optio minus mollitia adipisci, eum aut consequatur maxime? Quis et doloribus minima. Velit.</p>
                    <blockquote>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio voluptas at numquam nesciunt ratione vel accusantium non modi inventore reprehenderit porro eos, similique suscipit. Temporibus quaerat nihil quam doloremque!
                    </blockquote>
                </div>
            </div>
            <div className="container-fluid fixed-bottom py-3 text-center bg-secondary text-light">
                Copyright &copy; Fikri Ufayrah - 2022
            </div>
        </>
    )
};


export default Dashboard;