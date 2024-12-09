"use client";

import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import HomeBanner from './components/HomeBanner/HomeBanner';
import FindOutMore from './components/FindOutMore/FindOutMore';
import HomeTextBlock from './components/HomeTextBlock/HomeTextBlock';
import Sidebar from './components/SideBar/SideBar';
import Spreadsheet from './components/Spreadsheet/Spreadsheet';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';



export default function Home() {
  const [page, setPage] = useState('home');

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar setPage={setPage} />
      {page === 'home' && (
        <>
          <HomeBanner />
          <HomeTextBlock />
          <FindOutMore setPage={setPage} />
        </>
      )}
    {page === 'manager' && (
        <div className="flex w-full">
          <div className="flex-grow p-8">
            <h1>Manager Page</h1>
            <Sidebar/>
            <Spreadsheet/>
          </div>
        </div>
      )}
      {page === 'about' && (
        <div className="flex w-full">
          <div className="flex-grow p-8">
            <AboutUsPage/>
          </div>
        </div>
      )}
    </div>
  );
}