import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HeroArea } from './components/HeroArea';
import { LoginPage } from './components/Login';
import { DestinationPage } from './components/Destinations';
import { SignUpPage } from './components/SignUp';
import { AboutPage } from './components/About';
import { ContactUS } from './components/ContactUs';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HeroArea />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/Destination' element={<DestinationPage />} />
      <Route path='/About' element={<AboutPage/>}/>
      <Route path='/ContactUs' element={<ContactUS/>}/>
    </Routes>
  );
}

export default App;
