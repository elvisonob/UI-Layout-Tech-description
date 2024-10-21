import { Link } from 'react-router-dom';
import classes from './Register.module.css';
import { useState } from 'react';
import MainNavigation from './../components/MainNavigation';
import Footer from './../components/Footer';

const Register = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmedPassword] = useState('');
  const [error, setError] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const emailIsValid =
      enteredEmail.includes('@') && enteredEmail.includes('.');
    if (enteredName.trim() === '' || !emailIsValid) {
      return setError(true);
    }

    const passwordIsValid = enteredPassword.length >= 5;
    const confirmPasswordIsValid = enteredConfirmPassword.length >= 5;

    if (
      !passwordIsValid ||
      !confirmPasswordIsValid ||
      enteredPassword !== enteredConfirmPassword
    ) {
      return setError(true);
    }

    setEnteredName('');
    setEnteredEmail('');
    setEnteredPassword('');
    setEnteredConfirmedPassword('');
    setError(false);
  };

  return (
    <div>
      <MainNavigation />
      <div className={classes.signUp}>
        <h1>Register</h1>
        <form onSubmit={onSubmitHandler}>
          <label>User-Name</label>
          <input
            id="text"
            name="text"
            type="text"
            onChange={(e) => setEnteredName(e.target.value)}
            value={enteredName}
          />
          <label>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => setEnteredEmail(e.target.value)}
            value={enteredEmail}
          />
          <label>Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={(e) => setEnteredPassword(e.target.value)}
            value={enteredPassword}
          />
          <label>Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={(e) => setEnteredConfirmedPassword(e.target.value)}
            value={enteredConfirmPassword}
          />
          <div className={classes.validationControl}>
            {error && <p>Please ensure you have the right inputs</p>}
          </div>

          <button>Submit</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
