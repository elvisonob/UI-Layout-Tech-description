import search from './../images/search.png';
import hearts from './../images/hearts.png';
import institute from './../images/institute.jpg';

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
        <div className="bottomSearch"></div>
      </div>
      <div className="signIn">Sign In</div>
      <div className="basket">basket</div>
    </div>
  );
};

export default Header;
