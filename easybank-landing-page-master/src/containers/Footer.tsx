import LogoWhite from '../components/LogoWhite';
import RequestButton from '../components/RequestButton';
import { iconLinks, links } from '../utils/FooterData';

const Footer = () => {
  return (
    <div
      className="w-full h-fit py-12 mx-auto border text-custom-white bg-dark-blue flex flex-col justify-between items-center
    gap-12 xl:h-56 xl:flex-row xl:px-40"
    >
      <div className="flex flex-col gap-8 items-center xl:flex-row xl:gap-32">
        <div className="flex flex-col gap-8 xl:gap-14">
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

        <div className="h-auto flex flex-col flex-wrap gap-x-48 gap-y-3 xl:h-24">
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

      <div className="flex flex-col items-center gap-8 xl:items-end">
        <RequestButton display={true} />
        <p className="text-grayish-blue text-sm">
          &copy; Easybank. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
