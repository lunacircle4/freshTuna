import React, { useState } from 'react';
import './header.css';

function Header() {
  const [dropdownState, setDropdownState] = useState(false);

  const changeDropdownState = () => {
      if(dropdownState) {
        document.getElementsByClassName('dropdown')[0].style.top = '-10px';
        setDropdownState(false);
      }
      else {
        document.getElementsByClassName('dropdown')[0].style.top = '50px';
        setDropdownState(true);
      }
  };

  return (
    <header>
        <div className="body">
          <p>T U N A S T R E A M</p>
          <ul className="menu">
            <li>about me</li>
            <li>my skils</li>
            <li>my works</li>
          </ul>
          <button onClick={changeDropdownState}></button>
        </div>
        
        <ul className="dropdown">
          <li>about me</li>
          <li>my skils</li>
          <li>my works</li>
        </ul>
    </header>
  );
}

export default Header;