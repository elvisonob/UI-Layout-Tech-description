import search from './../images/search.png';
import hearts from './../images/hearts.png';
import institute from './../images/institute.jpg';
import basket from './../images/basket.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="companyLogo1">
        <img alt="logo1" src={hearts} width="100%" height="70%" />
      </div>
      <div className="companyLogo2">
        <img alt="logo2" src={institute} width="80%" height="80%" />
      </div>

      <div className="search">
        <div className="topSearch">
          <div className="search">Search</div>
          <div className="icon">
            <img src={search} alt="search-item" width="60%" height="50%" />
          </div>
        </div>
      </div>
      <div className="signIn">
        <Link to="/login">Sign In/Register</Link>
      </div>
      <div className="basket">
        <Link to="/basket">
          <img alt="basketlogo" src={basket} width="68%" height="100%" />
          <div>Basket</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
