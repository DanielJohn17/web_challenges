import FeatureCard from '../components/FeatureCard';
import { features } from '../utils/featuresData';

const About = () => {
  return (
    <div className="py-12 px-12 xl:px-40 w-screen xl:h-screen bg-light-grayish-blue flex flex-col justify-center">
      <div className="text-lg">
        <h1 className="text-4xl text-center xl:text-5xl xl:text-left font-light text-dark-blue mb-10">
          Why choose Easybank?
        </h1>
        <p className="max-w-2xl text-grayish-blue text-center xl:text-left mx-auto">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div className="mt-20 flex flex-col xl:flex-row gap-10">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default About;
