import React from 'react';
import ArticleCard from '../../molecules/ArticleCard/ArticleCard';

const articles = [
  {
    imageSrc: 'https://media.formula1.com/image/upload/f_auto,c_limit,w_630,q_auto/t_16by9North/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Emilia_Romagna/2153682946',
    title: 'Pérez cree que el difícil fin de semana de Imola fue "único"',
    text: 'Pérez explica lo que comprometió su carrera en Imola.',
    link: 'https://www.formula1.com/en/latest/article/perez-believes-difficult-imola-weekend-was-one-off-as-he-explains-what.4jKaG8RINS3WCnWJrZqxa3'
  },
  {
    imageSrc: 'https://media.formula1.com/image/upload/t_16by9Centre/f_auto/q_auto/v1716125168/trackside-images/2024/F1_Grand_Prix_of_Emilia_Romagna/2153666476.jpg.transform/6col/image.jpg',
    title: 'Vasseur "un poco frustrado" al señalar dónde perdió Ferrari la oportunidad de ganar en casa en Imola',
    text: 'Vasseur identifica las áreas problemáticas para Ferrari en Imola.',
    link: 'https://www.formula1.com/en/latest/article/vasseur-a-bit-frustrated-as-he-pinpoints-where-ferrari-lost-chance-of-home.70EueHRKe5Xl4fnXbIt1C7'
  },
  {
    imageSrc: 'https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9North/f_auto/q_auto/fom-website/2024/Imola%20(Emilia-Romagna)/GettyImages-2153281803',
    title: 'Piastri está "emocionado por el futuro"',
    text: 'Piastri lamenta la penalización pero se muestra optimista sobre el rendimiento de McLaren.',
    link: 'https://www.formula1.com/en/latest/article/vasseur-a-bit-frustrated-as-he-pinpoints-where-ferrari-lost-chance-of-home.70EueHRKe5Xl4fnXbIt1C7'
  },
  {
    imageSrc: 'https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9South/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Miami/2151628474',
    title: 'Horner elogia el "fenomenal" cambio de Red Bull',
    text: 'Horner destaca el esfuerzo del equipo Red Bull en el GP de Imola.',
    link: 'https://www.formula1.com/en/latest/article/horner-praises-phenomenal-turnaround-by-red-bull-at-the-end-of-stressful.4tFlF2na8BVpWoAgKIK80Q'
  },
  {
    imageSrc: 'https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9North/f_auto/q_auto/fom-website/2024/Imola%20(Emilia-Romagna)/GettyImages-2153281744',
    title: 'Sainz espera resolver los problemas detectados en Imola',
    text: 'Sainz busca soluciones tras un fin de semana complicado en Imola.',
    link: 'https://www.formula1.com/en/latest/article/sainz-hoping-to-solve-issues-identified-in-imola-amid-p5-result-after.4SV2uNLrMg3FbKPUL2zK8P'
  },
  {
    imageSrc: 'https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9South/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Emilia_Romagna/2153692012',
    title: 'Russell no se "enfurruña" por perder la posición ante Hamilton',
    text: 'Russell reflexiona sobre su carrera en el Gran Premio de Emilia-Romaña.',
    link: 'https://www.formula1.com/en/latest/article/russell-wont-sulk-over-losing-position-to-hamilton-in-emilia-romagna-grand.2pMtQP5RZRr64Kb2lg4UtN'
  },
  {
    imageSrc: 'https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9North/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Emilia_Romagna/2153676686',
    title: 'Verstappen emocionado por llevarse la victoria en Imola',
    text: 'Verstappen reflexiona sobre su desafío con Norris al final de la carrera.',
    link: '#'
  },
];

const NewsCarousel = () => (
  <section className="news-carousel">
    <h1>Últimas noticias de F1</h1>
    <div className="news-grid">
      {articles.map(article => (
        <ArticleCard
          key={article.title}
          imageSrc={article.imageSrc}
          title={article.title}
          text={article.text}
          link={article.link}
        />
      ))}
    </div>
  </section>
);

export default NewsCarousel;
