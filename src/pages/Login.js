import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import classes from './Login.module.css';
import MainNavigation from './../components/MainNavigation';
import Footer from './../components/Footer';

const Login = () => {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);

  const email = useRef();
  const password = useRef();

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid =
      enteredEmail.includes('@') && enteredEmail.includes('.');
    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);

    const passwordIsValid = enteredPassword.length >= 5;
    if (!passwordIsValid) {
      setPasswordIsInvalid(true);
      return;
    }

    setPasswordIsInvalid(false);

    console.log(enteredEmail, enteredPassword);

    email.current.value = '';
    password.current.value = '';
  };

  return (
    <div>
      <MainNavigation />
      <div className={classes.login}>
        <h1>Login</h1>
        <form onSubmit={onHandleSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className={classes.validationControl}>
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>

          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
          <div className={classes.validationControl}>
            {passwordIsInvalid && (
              <p>Please ensure password is at least 5 characters</p>
            )}
          </div>
          <button>Submit</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
