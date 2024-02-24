import logo from './logo.svg';
import './App.css';
import './styles/style.css'
import MainComponent from './MainComponent';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
}

export default App;
