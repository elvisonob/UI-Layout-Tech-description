import MainNavigation from '../components/MainNavigation';
import Footer from './../components/Footer';
import classes from './Basket.module.css';
const Basket = () => {
  return (
    <div>
      <MainNavigation />
      <div className={classes.basket}>
        <h2>Your Basket is empty right now</h2>
        <p>Return to the homepage and do some purchase</p>
      </div>

      <Footer />
    </div>
  );
};

export default Basket;
