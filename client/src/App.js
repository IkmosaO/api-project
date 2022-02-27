import './App.css';
import SplashPage from './components/SplashPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TeamTable from './components/TeamTable';

function App() {
  return (
    <div className="AppBackground">
      <div className="App" >
        <BrowserRouter>
          <Routes>
            <Route path='/' element ={<SplashPage/>} />
            <Route path='/teams/:id' element ={<TeamTable/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
