import './App.css';
// import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
// import { Footer } from './components/Footers';
import { HeroArea } from './components/HeroArea';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Header />} /> */}
      <Route path='/' element={<HeroArea />} />
      {/* <Route path="/" element={<Footer />} /> */}
    </Routes>
  );
}

export default App;
