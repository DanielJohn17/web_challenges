import FeatureCard from '../components/FeatureCard';
import { features } from '../utils/featuresData';

const About = () => {
  return (
    <div className="w-screen h-screen bg-light-grayish-blue flex flex-col justify-center">
      <div className="pl-40 text-lg">
        <h1 className="text-5xl font-light text-dark-blue mb-10">
          Why choose Easybank?
        </h1>
        <p className="max-w-2xl text-grayish-blue">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div className="pl-40 mt-20 flex gap-10">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default About;
