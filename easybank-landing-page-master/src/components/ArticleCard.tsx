type ArticleCardProps = {
  image: string;
  author: string;
  title: string;
  content: string;
};

const ArticleCard = ({ image, author, title, content }: ArticleCardProps) => {
  return (
    <div className="mx-auto w-[300px] flex flex-col bg-custom-white rounded-lg">
      <div className="w-full h-52 rounded-t-lg mb-5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover overflow-hidden rounded-t-lg"
        />
      </div>

      <div className="p-6 flex flex-col gap-3">
        <p className="text-sm text-grayish-blue">By {author}</p>
        <h2 className="text-xl font-light">{title}</h2>
        <p
          dangerouslySetInnerHTML={{ __html: content }}
          className="text-grayish-blue"
        />
      </div>
    </div>
  );
};

export default ArticleCard;
