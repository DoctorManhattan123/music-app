import * as React from 'react';
import './App.css';
import HomeScreen from './screens/Home.screen';
import MusicList from './screens/MusicList.screen';
import { Routes, Route, Link } from 'react-router-dom';
import NavTab from './components/NavTab';

const w = window.innerWidth;
const h = window.innerHeight;
const numberOfNavTabs = 3;

function App() {
  return (
    <div className="App">
      <p>{`width: ${w}, height ${h}`}</p>
      <div
        style={{
          position: 'absolute',
          height: '10%',
          bottom: 0,
          border: 'blue solid 1px',
          width: '100%',
          display: 'flex',
        }}
      >
        <NavTab link={'/'} message={'Start'} numberOfTabs={3}></NavTab>
        <NavTab link={'/home'} message={'Home'} numberOfTabs={3}></NavTab>
        <NavTab
          link={'/home'}
          message={'Second Home'}
          numberOfTabs={3}
        ></NavTab>
      </div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<MusicList />} />
      </Routes>
    </div>
  );
}

export default App;
