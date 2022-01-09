import React from 'react';
import Navbar from './Navbar';
import { GitHub, Mail, LinkedIn, Instagram } from './Icons';

type LayoutProps = {
  children: React.ReactNode;
};

const iconClass =
  'w-6 h-6 stroke-gray-600 fill-none stroke-1.5 hover:stroke-white hover:scale-110';
const sideBarClass =
  'z-5 pb-12 w-full justify-center flex flex-row md:flex-col md:fixed md:bottom-10 transition ease-in-out';

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen bg-dark-navy text-white">
      <Navbar />
      <div className="container mx-auto py-28 sm:py-36 xl:py-48 xl:pb-auto">
        {children}
      </div>
      <div className={`${sideBarClass} gap-6 md:pl-8`}>
        <a
          href="mailto:simon.thoque@gmail.com"
          className={iconClass}
          aria-label="Email Address"
        >
          <Mail />
        </a>
        <a
          href="https://www.linkedin.com/in/simon-hoque"
          className={iconClass}
          aria-label="LinkedIn"
        >
          <LinkedIn />
        </a>
        <a
          href="https://www.github.com/simon-th"
          className={iconClass}
          aria-label="GitHub"
        >
          <GitHub />
        </a>
        <a
          href="https://www.instagram.com/_simonhoque"
          className={iconClass}
          aria-label="Instagram"
        >
          <Instagram />
        </a>
      </div>
    </main>
  );
}
