import React from "react";
import woman from "../../assests/img/woman.jpg";

const Form = () => {
  return (
    <div className="box">
      <form className="form">
        <h1>Trouble logging in?</h1>
        <h2>Enter your email or phone number below</h2>
        <div className="container">
          <div className="input-container">
            <input type="text" placeholder="Phone or Email" />
          </div>
          <input type="submit" value="Continue" className="button" />
          <p>
            <u>don't remember anything :(</u>
          </p>
        </div>
      </form>
      <img src={woman} className="img" alt="woman" />
    </div>
  );
};

export default Form;
