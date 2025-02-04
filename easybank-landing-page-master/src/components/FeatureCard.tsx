type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="w-[298px] text-lg flex flex-col gap-10">
      <div>
        <img src={icon} alt={title} />
      </div>

      <div>
        <h2 className="text-2xl mb-8 text-dark-blue">{title}</h2>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-grayish-blue text-wrap"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
