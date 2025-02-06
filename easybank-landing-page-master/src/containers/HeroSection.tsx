import { useState, useEffect } from 'react';
import { BGIntroDesktop, ImageMockups, BGIntroMobile } from '../assets';
import RequestButton from '../components/RequestButton';
import MobileNavigation from '../components/MobileNavigation';

import type { MobileNavigationProps } from '../lib/types';

const HeroSection = ({ openNav, handleOpenNav }: MobileNavigationProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 1440);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setIsMobile(window.innerWidth < 1440);
      });
    };
  }, [isMobile]);
  return (
    <div className="w-full h-screen bg-very-light-gray flex flex-col-reverse xl:flex-row items-center relative">
      <div className="px-9 flex flex-col items-center mb-16 text-lg max-w-[612px] xl:px-0 xl:pl-40 xl:items-start">
        <h1 className="text-center text-[40px] leading-12 text-dark-blue font-light mb-6 xl:text-left xl:text-6xl xl:leading-16">
          Next generation digital banking
        </h1>
        <p className="text-center text-grayish-blue text-wrap mb-10 xl:text-left">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <div>
          <RequestButton display={true} />
        </div>
      </div>

      {isMobile ? (
        <div className="w-full z-0">
          <img
            src={BGIntroMobile}
            alt="Mobile Banking"
            className="w-full object-cover absolute top-0 left-0"
          />
          <img
            src={ImageMockups}
            alt="Mockups"
            className="w-3xl z-10 absolute left-1/2 -translate-x-1/2 -top-24 object-contain"
          />
        </div>
      ) : (
        <div className="absolute h-screen -right-[458px] -top-52 z-0">
          <div className="relative h-full">
            <img
              src={BGIntroDesktop}
              alt="Mobile Banking"
              className="w-[85%] object-cover"
            />
            <img
              src={ImageMockups}
              alt="Mockups"
              className="w-3xl z-10 absolute left-44 top-20 object-contain"
            />
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      <MobileNavigation openNav={openNav} handleOpenNav={handleOpenNav} />
    </div>
  );
};

export default HeroSection;
