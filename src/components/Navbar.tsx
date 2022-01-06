import React from 'react';
import { Link } from 'gatsby';

const defaultLinks: NavBarLinkProps[] = [
  {label: "About", url: "/#"},
  {label: "Experience", url: "/#"},
  {label: "Projects", url: "/#"},
]

interface NavBarLinkProps {
  label: string,
  url: string
}

function getNavLinks(linkPropsList: NavBarLinkProps[], className: string): JSX.Element[] {
  const links: JSX.Element[] = [];
  linkPropsList.forEach((props) => {
    const { label, url } = props;
    links.push(
      <Link className={className} to={url} title={label}>{label}</Link>
    )
  })
  return links;
}

function MobileMenuButton() {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        {/* <!--
          Icon when menu is closed.
          Heroicon name: outline/menu
          Menu open: "hidden", Menu closed: "block"
        --> */}
        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        {/* <!--
          Icon when menu is open.
          Heroicon name: outline/x
          Menu open: "block", Menu closed: "hidden"
        --> */}
        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

function MobileMenu() {
  // <!-- Mobile menu, show/hide based on menu state. -->
  return (
    <div className="sm:hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        {/* <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a> */}
        {getNavLinks(defaultLinks, "text-sm text-white font-semibold block")}
      </div>
    </div>
  );
}

function NavBrand() {
  return (
    <div className="flex-shrink-0 flex items-center">
      <h1 className='text-xl text-white font-bold'>Simon Hoque</h1>
    </div>
  );
}

function MenuBar() {
  return (
    <div className="hidden sm:block">
      <div className="flex space-x-8">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        {/* <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a> */}
        {getNavLinks(defaultLinks, "text-sm text-white font-semibold")}
      </div>
    </div>
  );
}


function Navbar() {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <MobileMenuButton />
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <NavBrand />
          </div>
          <MenuBar />
        </div>
      </div>

      <MobileMenu />
    </nav>
  );
}

export default Navbar;
