import React from 'react';
import { Logo, IconHamburger } from '../assets';
import RequestButton from './RequestButton';

type NavProps = {
  clicked: number | null;
  handleClicked: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => void;
};

type NavLinkPrps = {
  href?: string;
  children: React.ReactNode;
};

const links = [
  { href: '/home', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/contact', text: 'Contact' },
  { href: '/blog', text: 'Blog' },
  { href: '/careers', text: 'Careers' },
] as const;

const Nav = ({ clicked, handleClicked }: NavProps) => {
  return (
    <nav className="w-full h-24 px-7 xl:px-44 flex justify-between items-center bg-custom-white z-10 text-lg relative">
      <div className="w-36 my-6">
        <img src={Logo} alt="Easybank logo" className="w-full" />
      </div>

      <ul className="hidden xl:flex gap-7 text-grayish-blue h-full">
        {links.map((link, index) => (
          <li
            key={index}
            className="h-full relative flex items-center hover:text-dark-blue transition-all duration-200"
            onClick={(e) => handleClicked(e, index)}
          >
            <NavLink href={link.href} key={index}>
              {link.text}
            </NavLink>
            <div
              className={`w-full h-1.5 absolute bottom-0 left-0 origin-left gradient-to-right
                ${clicked === index ? 'scale-x-100' : 'scale-x-0'}
                transition-transform duration-300 ease-out`}
            />
          </li>
        ))}
      </ul>

      <RequestButton />

      <div className="xl:hidden">
        <img src={IconHamburger} alt="Hamburger icon" />
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: NavLinkPrps) => {
  return <a href={href || '/'}>{children}</a>;
};

export default Nav;
