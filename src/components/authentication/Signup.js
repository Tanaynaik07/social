import React from 'react';
import "../authentication/signup.css";
import { Link } from 'react-router-dom';

const Signup = () => {
    {
        return (

            <div id='signup'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

                <div className="container">
                <Link to="/"><i class="fa-solid fa-house"></i></Link>
                    <h2>Sign Up</h2>
                    <form action="#">
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        {/* Additional details */}
                        <div className="input-group">
                            <label htmlFor="age">Age</label>
                            <input type="number" id="age" name="age" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" name="address" required />
                        </div>
                        <button type="submit" className="btn">Sign Up</button>
                    </form>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        );
    }
}

export default Signup;
