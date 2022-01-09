import React from 'react';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen bg-dark-navy text-white">
      <Navbar />
      <div className="container mx-auto pb-20 pt-28 sm:pt-36 xl:pt-48 xl:pb-auto">
        {children}
      </div>
    </main>
  );
}
