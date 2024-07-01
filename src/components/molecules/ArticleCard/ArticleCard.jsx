import React from 'react';
import Image from '../../atmos/Image/Image';
import Title from '../../atmos/Title/Title';
import Text from '../../atmos/Text/Text';
import Button from '../../atmos/Button/Button';

const ArticleCard = ({ imageSrc, title, text, link }) => (
  <div className="article-card">
    <Image src={imageSrc} alt={title} />
    <Title>{title}</Title>
    <Text>{text}</Text>
    <Button onClick={() => window.location.href = link}>Leer más</Button>
  </div>
);

export default ArticleCard;
