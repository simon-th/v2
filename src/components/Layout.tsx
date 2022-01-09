import React from 'react';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen bg-dark-navy text-white">
      <Navbar />
      <div className="container mx-auto py-28 sm:py-36 xl:py-48 xl:pb-auto">
        {children}
      </div>
    </main>
  );
}
