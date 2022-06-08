import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import BuyBlock from './components/BuyBlock/BuyBlock';

import './App.css';



function App() {

  const [sticky, setSticky] = useState(false)
  const [pinned, setPinned] = useState(false)

  function headerScrollHandler() {
    if (window.scrollY >= 100) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  function buyBlockScrollHandler() {
    console.log(window.scrollY)
    if (window.scrollY >= 300) {
      setPinned(true)
      console.log(pinned)
    } else {
      setPinned(false)
      console.log(pinned)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', buyBlockScrollHandler)
    return function () {
      window.removeEventListener('scroll', buyBlockScrollHandler);
    }
  }, [pinned])

  useEffect(() => {
    window.addEventListener('scroll', headerScrollHandler)
    return function () {
      window.removeEventListener('scroll', headerScrollHandler);
    }
  }, [sticky])

  return (
    <div>
      <Header sticky={sticky} />
      <Promo sticky={sticky} />
      <BuyBlock pinned={pinned} />
    </div>
  );
}

export default App;
