import './App.css';
import Navbar from './Components/Navbar';
import MainContainer from './Components/MainContainer';
import React from 'react';
import Active from './Data/active';



function App() {
  const [active, setactive] = React.useState(Active);
  // console.log(active)
  function chnagePage(e) {
    e.preventDefault();
    document.querySelectorAll('.link').forEach(item => {
      item.classList.remove('active-list-item')
    })
    e.target.classList.add('active-list-item');
    const target = e.target.getAttribute('value');
    setactive(prev => {
      Object.keys(prev).forEach(key => {
        prev[key] = false;
      })
      return (
        {
          ...prev,
          [target]: true,
        }
      )
    })
  }
  return (
    <>
      <Navbar
        onEvent={chnagePage}
      />
      <MainContainer
        active={active}
      />
    </>
  );
}

export default App;
