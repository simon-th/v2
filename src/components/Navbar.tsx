import React from 'react';
import { Link } from 'gatsby';

const defaultLinks: NavBarLinkProps[] = [
  { label: 'Home', url: '/' },
  { label: 'Experience', url: '/experience' },
  { label: 'Projects', url: '/projects' },
];

const navbarHoverStyle = 'hover:bg-gray-800 hover:scale-1';
const navbarBaseStyle =
  'block text-sm font-semibold px-3 py-2 rounded-md transition ease-in-out';

interface MobileMenuButtonProps {
  onClick: () => void;
}

interface VisibilityProps {
  isVisible: boolean;
}

interface NavBarLinkProps {
  label: string;
  url: string;
}

function getNavLinks(
  linkPropsList: NavBarLinkProps[],
  className: string
): JSX.Element[] {
  const links: JSX.Element[] = [];
  linkPropsList.forEach((props) => {
    const { label, url } = props;
    links.push(
      <Link className={className} to={url} title={label}>
        {label}
      </Link>
    );
  });
  return links;
}

function MobileMenuButton(props: MobileMenuButtonProps) {
  const { onClick } = props;
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
        onClick={onClick}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          className="hidden h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

function MobileMenu(props: VisibilityProps) {
  const { isVisible } = props;
  const visibilityClass = isVisible ? '' : 'hidden';
  return (
    <div className={`${visibilityClass} sm:hidden`} id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {getNavLinks(
          defaultLinks,
          `${navbarBaseStyle} ${navbarHoverStyle} bg-black`
        )}
      </div>
    </div>
  );
}

function NavBrand() {
  return (
    <div className="flex-shrink-0 flex items-center">
      <h1 className="text-xl font-bold">Simon Hoque</h1>
    </div>
  );
}

function MenuBar() {
  return (
    <div className="hidden sm:block">
      <div className="flex space-x-8">
        {getNavLinks(defaultLinks, `${navbarBaseStyle} ${navbarHoverStyle}`)}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [menuButtonClicked, setMenuButtonClicked] = React.useState(false);
  return (
    <nav className="bg-black sm:bg-transparent sm:bg-gradient-to-b sm:from-black text-white fixed sm:h-36 w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <MobileMenuButton
            onClick={() => {
              setMenuButtonClicked(!menuButtonClicked);
            }}
          />
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <NavBrand />
          </div>
          <MenuBar />
        </div>
      </div>
      <MobileMenu isVisible={menuButtonClicked} />
    </nav>
  );
}
