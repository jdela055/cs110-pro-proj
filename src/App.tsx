import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

import { NextUIProvider } from '@nextui-org/react';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';


import { Image } from '@nextui-org/react';

import NavbarComponent from './components/NavbarComponent';
import Sidebar from './components/Sidebar';
import ContentComponent from './components/ContentComponent';


export default function App() {

  const [content, setContent] = useState('about-me');

  // useEffect(() => {

  //   alert(content);

  // }, [content]);


  return (    
    <NextUIProvider>
      <div id="main-container" className="flex flex-row min-h-screen min-w-screen bg-white">

        <div id="sidebar" className="flex min-h-full bg-green-800">
          {/* contact info + github links here */}
          <Sidebar/>
        </div>

        <div id="col-container" className="flex flex-col min-h-full w-full bg-blue-500">
          <div id="navbar" className="">
            <NavbarComponent setContent={setContent}/>
          </div>

          <div className="flex flex-col justify-center items-center w-full h-full font-sourceCodePro">
            {/* put media query here to change box aspect ratio, 8.5*11 when screen size is wide, and wider when screen is thin */}          
            <ContentComponent currentState={content}/>

          </div>
        </div>
      
      
      </div>

    </NextUIProvider>

  );
}