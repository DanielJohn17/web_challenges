import ArticleCard from '../components/ArticleCard';
import { articles } from '../utils/ArticlesData';

const Article = () => {
  return (
    <div className="w-full h-screen bg-very-light-gray flex flex-col justify-center">
      <h1 className="pl-40 text-5xl text-dark-blue font-light">
        Latest Articles
      </h1>

      <div className="pl-40 mt-20 flex gap-10">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Article;
