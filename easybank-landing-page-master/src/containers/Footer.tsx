import LogoWhite from '../components/LogoWhite';
import RequestButton from '../components/RequestButton';
import { iconLinks, links } from '../utils/FooterData';

const Footer = () => {
  return (
    <div className="w-full h-56 px-40 border text-custom-white bg-dark-blue flex justify-between items-center">
      <div className="flex gap-32 items-center">
        <div className="flex flex-col gap-14">
          <div>
            <LogoWhite />
          </div>

          <div className="flex gap-4">
            {iconLinks.map((iconLink, index) => (
              <a key={index} href={iconLink.href}>
                <img
                  src={iconLink.icon}
                  alt="Social Media Icon"
                  className="svg-icon"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="h-24 flex flex-col flex-wrap gap-x-48 gap-y-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-lime-green transition-colors duration-200"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-end gap-8">
        <RequestButton />
        <p className="text-grayish-blue text-sm">
          &copy; Easybank. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
