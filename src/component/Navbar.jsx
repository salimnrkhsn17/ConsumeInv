import axios from "axios";
import React, { useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 

export default function Navbar() {
    const [isLogin, setIsLogin] =useState(false);
    const [authUser, setAuthUser] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/profile`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        .then(res => {
            setIsLogin(true);
            setAuthUser(res.data.data);
            if (location.pathname === '/login') {
                navigate('/profile')
            }
        })
        .catch(err => {
            setIsLogin(false);
            if (err.response.status === 401 && location.pathname != '/login') {
                navigate('/login?message=' + encodeURIComponent('Anda belum login!'));
            }
        })

    }, [navigate]);
    return (
        <div className="bg-blue-600 py-2">
            <div className="grid grid-cols-12">
                <section className="col-span-10 col-start-2">
                    <div className="flex items-center">
                        <Link
                            className="mr-2 text-sm font-semibold uppercase text-white"
                            to="/"
                        >
                            INVENTARIS APP
                        </Link>
                        <Link to="/login"><small className="text-white">Login</small></Link>
                        {
                            isLogin ? authUser['role'] === 'admin' ? (
                                <>
                                <Link to="/stuff"><small className="text-white ms-3">Stuff</small></Link>
                                <Link to="/inbound-stuff"><small className="text-white ms-3">Inbound</small></Link>
                                <Link to="/lending"><small className="text-white ms-3">Lending</small></Link>
                                <Link to="/users"><small className="text-white ms-3">User</small></Link>
                                </>
                            ) : (
                                <Link to="/"><small className="text-white ms-3">Lending</small></Link>
                            ) : ''
                        }
                    </div>
                    {
                        isLogin ? (<Link to="/profile"><small className="text-white">Profile</small></Link>) : ''
                    }
                </section>
            </div>
        </div>
    );
}