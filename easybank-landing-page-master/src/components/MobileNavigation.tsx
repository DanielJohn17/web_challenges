import NavLink from './NavLink';
import { links } from '../utils/NavLinksData';

const MobileNavigation = () => {
  return (
    <div className="block xl:hidden absolute top-24 left-0 w-full bg-dark-blue/20 text-center py-5">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
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
