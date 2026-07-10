import './App.scss';
import Home from './pages/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className={`App ${theme}`}>
      <Header
        theme={theme}
        setTheme={setTheme}
      />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
