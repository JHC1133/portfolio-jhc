import './styles/App.css';
import './styles/PortfolioHeader.css';
import './styles/Sidebar.css';
import './styles/Fonts.css';
import './styles/RealismPage.css';
import './styles/AbstractPage.css';
import './styles/UIPage.css';
import PortfolioHeader from './components/PortfolioHeader';
import Sidebar from './components/Sidebar';
import RealismPage from './components/RealismPage';
import AbstractPage from './components/AbstractPage';
import UIPage from './components/UIPage';
import { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState(false);

  return (
    <div className="app-container">
      <PortfolioHeader/>
      <Sidebar setActivePage={setActivePage}/>
        {activePage === 'REALISM' && <RealismPage/>}
        {activePage === 'ABSTRACT' && <AbstractPage/>}
        {activePage === 'UI' && <UIPage/>}
      {/* <div className='main-content main-container'>
        <Sidebar setActivePage={setActivePage}/>
          {activePage === 'REALISM' && <RealismPage/>}
          {activePage === 'ABSTRACT' && <AbstractPage/>}
          {activePage === 'UI' && <UIPage/>}
      </div> */}
    </div>
  );
}

export default App;
