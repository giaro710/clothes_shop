import './default.scss';
import Header from './components/Header/Header';
import Homepage from './pages/homepage/Homepage';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Homepage />
      </div>
    </div>
  );
};

export default App;
