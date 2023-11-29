import React from "react";
import "../css/RegistrationCard.css";

function RegistrationCard() {
    return (
        <div>
        <div className="card">
            <h1 className="title">WELCOME TO ADMIN</h1>
        </div>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Log In</h5>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
              </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
            </button>
                </form>
            </div>
        </div>
    </div>
    );
}
export default RegistrationCard;