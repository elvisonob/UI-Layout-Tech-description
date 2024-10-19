import './index.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
