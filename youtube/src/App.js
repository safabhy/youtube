import logo from './logo.svg';
import './App.css';
import image from './image.jpg';
import React  from 'react';
import Video from "./components/Video";
import Videos from "./components/Videos";

 function App() {
   
  return (

  <div className='youtube-box'>
   <nav className="navigation">
      <a href="" className="brand-name">
        <img src={image} alt='image' width='90' height='50'/>
      </a>
      
    </nav>
    
    <Video/>
    <Videos/>
    
    </div>
  );
}

export default App;
