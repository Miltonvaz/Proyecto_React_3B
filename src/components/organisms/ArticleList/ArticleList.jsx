import React from 'react';
import ArticleCard from '../../molecules/ArticleCard/ArticleCard';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles && articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
