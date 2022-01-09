import React from 'react';
import Navbar from './Navbar';
import { GitHub, Mail, LinkedIn, Instagram } from './Icons';

type LayoutProps = {
  children: React.ReactNode;
};

const iconClass =
  'w-6 h-6 stroke-gray-600 fill-none stroke-1.5 hover:stroke-white hover:scale-110';
const sideBarClass =
  'z-5 w-full flex flex-row md:flex-col justify-center md:fixed md:w-fit transition ease-in-out';

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen bg-dark-navy text-white">
      <Navbar />
      <div className="container mx-auto py-28 sm:py-36 xl:py-48 xl:pb-auto">
        {children}
      </div>
      <div
        className={`${sideBarClass} gap-6 md:pl-8 pb-4 md:pb-0 md:bottom-12`}
      >
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
      <div
        className={`${sideBarClass} pb-6 md:bottom-28 md:-right-12 md:rotate-90`}
      >
        <a href="mailto:simon.thoque@gmail.com">
          <p className="text-sm text-gray-600 tracking-widest hover:scale-105 hover:text-white">
            simon.thoque@gmail.com
          </p>
        </a>
      </div>
    </main>
  );
}
