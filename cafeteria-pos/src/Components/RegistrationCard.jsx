import React from "react";
import "../css/RegistrationCard.css";

function RegistrationCard() {
  return (
    <div className="reg-card" >
      <div className="card-body">
        <h5 className="card-title">Register</h5>
        <form>
          <div className="form-group">
            <label className="lable" htmlFor="exampleInputEmail1">
              User Name
            </label>
            <input
              type="email"
              className="form-control inputs"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label className="lable" htmlFor="exampleInputPassword1">
              Password
            </label>
            <input
              type="password"
              className="form-control inputs"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group">
            <label className="lable" htmlFor="exampleInputPassword1">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control inputs"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SIGN UP
          </button>
        </form>
      </div>
      <div className="to-sign-up-div">
        <p className="to-sign-up-txt">Already have an account?</p>
        <a className="to-sign-up" href="/">
          Sign In
        </a>
      </div>
    </div>
  );
}
export default RegistrationCard;
