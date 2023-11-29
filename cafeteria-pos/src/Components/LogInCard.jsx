import React from "react";
import "../css/LogInCard.css";

function LogInCard() {
  return (
    
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Log In</h5>
          <form>
            <div className="form-group">
              <label className="lable" htmlFor="exampleInputEmail1">User Name</label>
              <input
                type="email"
                className="form-control inputs"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted">
              </small>
            </div>
            <div className="form-group">
              <label className="lable" htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control inputs"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              SIGN IN
            </button>
          </form>
          <div className="to-sign-up-div">
            <p className="to-sign-up-txt">Don't have an account?</p>
            <a className="to-sign-up" href="/registration">Sign Up</a>
          </div>

        </div>
      </div>
      
  );
}
export default LogInCard;
