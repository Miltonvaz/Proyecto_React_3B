import React from 'react';
import RaceDetails from '../../molecules/RaceDetail/RaceDetails';

const races = [
  {
    raceName: 'Gran Premio de Mónaco',
    date: '26 de mayo de 2024',
    imageUrl: 'https://img.remediosdigitales.com/02c7d5/monaco-f1-2019/840_560.jpg'
  },
  {
    raceName: 'Gran Premio de Canadá',
    date: '09 de junio de 2024',
    imageUrl: 'https://images.daznservices.com/di/library/DAZN_News/e4/24/2022-06-15-2019-circuit-gilles-villeneuve-canada-montreal-f1-formula-1_1rtqs9bgffmli1vxrw77zt2xda.jpg?t=1705348657&w=800'
  },
  {
    raceName: 'Gran Premio de España',
    date: '23 de junio de 2024',
    imageUrl: 'https://cdn2.excelsior.com.mx/media/pictures/2023/06/04/2958523.jpg'
  },
  {
    raceName: 'Gran Premio de Austria',
    date: '30 de junio de 2024',
    imageUrl: 'https://cdn-9.motorsport.com/images/amp/6VRP4JV6/s1000/max-verstappen-red-bull-racing.jpg'
  },
  {
    raceName: 'Gran Premio de Gran Bretaña',
    date: '07 de julio de 2024',
    imageUrl: 'https://cdn-2.motorsport.com/images/amp/0JBPPkA0/s6/sebastian-vettel-aston-martin-.jpg'
  }
];

const raceDetails = {
  'gran premio de mónaco': {
    circuito: "Circuito de Mónaco",
    vueltaRapida: "1:12.909 - Lewis Hamilton (2021)",
    maxGanador: "Ayrton Senna - 6 victorias",
    datosCuriosos: "El Gran Premio de Mónaco es conocido por ser uno de los más prestigiosos y difíciles del calendario.",
    imagen: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monoco_Circuit.png"
  },
  'gran premio de canadá': {
    circuito: "Circuito Gilles Villeneuve",
    vueltaRapida: "1:13.078 - Valtteri Bottas (2023)",
    maxGanador: "Lewis Hamilton - 7 victorias",
    datosCuriosos: "El circuito lleva el nombre del legendario piloto canadiense Gilles Villeneuve.",
    imagen: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png"
  },
  'gran premio de españa': {
    circuito: "Circuito de Barcelona-Catalunya",
    vueltaRapida: "1:18.149 - Lewis Hamilton (2021)",
    maxGanador: "Michael Schumacher - 6 victorias",
    datosCuriosos: "El Gran Premio de España es una de las carreras más antiguas en el calendario de la F1, habiendo debutado en 1951. El circuito es conocido por su combinación de curvas rápidas y lentas, y es un lugar popular para las pruebas de pretemporada.",
    imagen: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png"
  },
  'gran premio de austria': {
    circuito: "Red Bull Ring",
    vueltaRapida: "1:05.619 - Carlos Sainz (2020)",
    maxGanador: "Alain Prost - 3 victorias",
    datosCuriosos: "El Gran Premio de Austria ha sido parte del calendario de Fórmula 1 de forma intermitente desde 1964. El Red Bull Ring, anteriormente conocido como A1-Ring y Österreichring, es conocido por su pintoresco entorno alpino y sus secciones rápidas y fluidas. Desde su renovación y regreso al calendario en 2014, ha sido una carrera emocionante, a menudo influenciada por las condiciones meteorológicas variables.",
    imagen: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png"
  },
  'gran premio de gran bretaña': {
    circuito: "Circuito de Silverstone",
    vueltaRapida: "1:27.097 - Max Verstappen (2023)",
    maxGanador: "Lewis Hamilton - 8 victorias",
    datosCuriosos: "Silverstone es conocido como el hogar del automovilismo británico y fue el escenario del primer Gran Premio de F1 en 1950.",
    imagen: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png"
  }
};

const RaceCarousel = () => (
  <section className="race-carousel">
    <h1>Próximas Carreras</h1>
    <div className="race-grid">
      {races.map(race => (
        <RaceDetails
          key={race.raceName}
          raceName={race.raceName}
          date={race.date}
          raceDetails={raceDetails[race.raceName.toLowerCase()]}
          imageUrl={race.imageUrl}
        />
      ))}
    </div>
  </section>
);

export default RaceCarousel;
