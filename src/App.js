import './App.scss';
import Navigation from './routes/navigation/navigation.component';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Process from './routes/our-process/our-process.component';
import About from './routes/about/about.component';
import Offer from './routes/what-do-we-offer/what-do-we-offer.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='what-do-we-offer' element={<Offer />}/>
          <Route path='our-process' element={<Process />}/>
          <Route path='about-us' element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
