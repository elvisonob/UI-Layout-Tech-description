import './index.css';
import search from './images/search.png';
import hearts from './images/hearts.png';
import institute from './images/institute.jpg';

const App = () => {
  return (
    <div className="container">
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
      <div className="menu">
        <div>Home</div>
        <div>Learn more</div>
        <div>The toolkit</div>
        <div>Prices and company License</div>
        <div>Training and Consultancy</div>
        <div>Case studies and Research</div>
        <div>Contact us</div>
      </div>
      <div className="main">Main</div>
      <div className="footer">
        <div className="top-footer">
          <div>Contact</div>
          <div>FAQ</div>
          <div>Site Map</div>
          <div>Privacy Policy</div>
          <div>Terms & Conditions</div>
        </div>
        <div className="bottom-footer">
          <div className="address">
            <div>
              Energy Institute 61 New Cavendish Street London W1G 7AR, UK
            </div>
            <div className="contact-num">T: +44 (0) 20 7467 7100</div>
            <div className="email">E: pubs@energyinst.org</div>
          </div>
          <div className="energy-institute">©2024 Energy Institute</div>
        </div>
      </div>
    </div>
  );
};

export default App;
