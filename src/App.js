import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/page/Header';
import Main from './components/page/Main';
import Footer from './components/page/Footer';
import Test from './components/page/Test';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Route exact path="(/)?" component={Main}/>
        <Route exact path="/test" component={Test}/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
