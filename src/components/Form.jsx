import React from 'react';

const Form = () => {
    return (
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
    );
};

export default Form;