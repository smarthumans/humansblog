import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/page/Header';
import Main from './components/page/Main';
import Footer from './components/page/Footer';
import About from './components/page/About';
import Exercise from './components/page/Exercise';
import Mental from './components/page/Mental';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="(/)?" component={Main}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/exercise" component={Exercise}/>
      <Route exact path="/mental" component={Mental}/>
      <Footer/>
    </div>
  );
}

export default App;
