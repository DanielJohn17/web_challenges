import ArticleCard from '../components/ArticleCard';
import { articles } from '../utils/ArticlesData';

const Article = () => {
  return (
    <div className="w-full py-12 bg-very-light-gray flex flex-col justify-center xl:px-40 xl:h-screen">
      <h1 className="text-4xl text-center text-dark-blue font-light xl:text-5xl xl:text-left">
        Latest Articles
      </h1>

      <div className="mt-20 flex flex-col gap-10 xl:flex-row">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Article;
