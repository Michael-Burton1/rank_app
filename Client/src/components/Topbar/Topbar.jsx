import React from 'react';
import './topbar.css'
const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarTop'>
        <img className='topbarLogo' src="Assets/logo.png" alt="boop"/>
      </div>
      <div className='topbarBottom'>
        <h2>Home</h2>
        <h2>Quiz</h2>
        <h2>Profile</h2>
      </div>
    </div>
  );
}

export default Topbar;
