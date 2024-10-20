import { Link } from 'react-router-dom';
import hearts from './../images/hearts.png';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className={classes.symbol}>
            <Link to="/">
              <img alt="logo1" src={hearts} width="20%" height="50%" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
