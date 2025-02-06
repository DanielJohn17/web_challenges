import NavLink from './NavLink';
import { links } from '../utils/NavLinksData';
import type { MobileNavigationProps } from '../lib/types';

const ANIMATE_NAV_OPEN = 'translate-y-0 opacity-100';
const ANIMATE_NAV_CLOSE = 'translate-y-full opacity-0';

const MobileNavigation = ({
  openNav,
  handleOpenNav,
}: MobileNavigationProps) => {
  return (
    <div
      className={`${
        openNav ? ANIMATE_NAV_OPEN : ANIMATE_NAV_CLOSE
      } flex flex-col items-center absolute top-0 left-0 w-full h-full bg-dark-blue/20 text-center py-5 
      transition-all duration-300 xl:hidden`}
    >
      <ul className="text-lg bg-custom-white px-32 py-10 flex flex-col gap-4 rounded-lg">
        {links.map((link, index) => (
          <li key={index} onClick={handleOpenNav}>
            <NavLink href={link.href} key={index}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavigation;
