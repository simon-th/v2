import React from 'react';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen h-screen max-h-full">
      <Navbar />
      <div className="container mx-auto py-20 xl:pt-32 xl:pb-auto">
        {children}
      </div>
    </main>
  );
}
