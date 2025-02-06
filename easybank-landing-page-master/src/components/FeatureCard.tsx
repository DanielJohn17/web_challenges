type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="w-[298px] text-lg flex flex-col items-center gap-6 xl:items-start xl:gap-10">
      <div>
        <img src={icon} alt={title} />
      </div>

      <div>
        <h2 className="text-2xl mb-4 text-dark-blue text-center xl:text-left xl:mb-8">
          {title}
        </h2>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-grayish-blue text-wrap text-center xl:text-left"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
