import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import NewsCarousel from '../../organisms/NewsCarousel/NewsCarousel';
import RaceCarousel from '../../organisms/RaceCarousel/RaceCarousel';
import PilotsCarousel from '../../organisms/PilotCarousel/PilotCarousel';

const Home = () => (
  <MainTemplate>
    <NewsCarousel />
    <RaceCarousel />
  <PilotsCarousel/>
  </MainTemplate>
);

export default Home;
