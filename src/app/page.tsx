"use client";

import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import HomeBanner from './components/HomeBanner/HomeBanner';
import FindOutMore from './components/FindOutMore/FindOutMore';
import HomeTextBlock from './components/HomeTextBlock/HomeTextBlock';



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
        <div/>
      )}
    </div>
  );
}