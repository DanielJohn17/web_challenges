import { BGIntroDesktop, ImageMockups } from '../assets';
import RequestButton from '../components/RequestButton';

const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-very-light-gray flex flex-col-reverse xl:flex-row items-center relative">
      <div className="pl-40 text-lg max-w-[612px]">
        <h1 className="text-6xl text-dark-blue font-light mb-6">
          Next generation digital banking
        </h1>
        <p className="text-grayish-blue text-left text-wrap mb-10">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <div>
          <RequestButton />
        </div>
      </div>

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
    </div>
  );
};

export default HeroSection;
