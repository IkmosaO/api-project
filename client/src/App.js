import logo from './logo.svg';
import './App.css';
import SplashPage from './components/SplashPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={ <SplashPage/>} />

        </Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
