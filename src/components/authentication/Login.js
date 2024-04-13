import React from 'react';
import "../authentication/login.css";
import { Link } from 'react-router-dom';
const Login = () => {
    {
        return (

            <div id='login'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <div className="container">
                <Link to="/"><i class="fa-solid fa-house"></i></Link>
                    <h2>Login</h2>
                    <form action="#">
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <button type="submit" className="btn">Login</button>
                    </form>
                    <p>Don't have an account? <Link to="/signup">Signup</Link></p>
                </div>
            </div>
        );
    }
}

export default Login;
