import React from 'react';
import PilotCards from '../../organisms/PilotsCards/PilotsCards';

const pilots = [
    {
        name: 'Max Verstappen',
        image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/verstappen',
        teamLogo: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull',
        team: 'Red Bull',
        points: 161,
      },
      {
        name: 'Charles Leclerc',
        image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/leclerc',
        teamLogo: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/ferrari',
        team: 'Ferrari',
        points: 113,
      },
      {
        name: 'Sergio Pérez',
        image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/perez',
        teamLogo: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull',
        team: 'Red Bull',
        points: 107,
      },
      {
        name: 'Lando Norris',
        image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/norris',
        teamLogo: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/mclaren',
        team: 'McLaren',
        points: 101,
      },
      {
        name: 'Carlos Sainz',
        image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/sainz',
        teamLogo: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/ferrari',
        team: 'Ferrari',
        points: 93,
      },
      {
        name: 'Oscar Piastri',
        image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/piastri',
        teamLogo: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/mclaren',
        team: 'McLaren',
        points: 53,
      },
      {
        name: 'George Russell',
        image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/russell',
        teamLogo: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/mercedes',
        team: 'Mercedes',
        points: 44,
      },
      {
        name: 'Lewis Hamilton',
        image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/hamilton',
        teamLogo: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/mercedes',
        team: 'Mercedes',
        points: 35,
      },
      {
        name: 'Fernando Alonso',
        image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/alonso',
        teamLogo: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/aston%20martin%202024',
        team: 'Aston Martin',
        points: 33,
      },
      {
        name: 'Yuki Tsunoda',
        image: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/tsunoda',
        teamLogo: 'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/rb',
        team: 'RB HONDA RBPT',
        points: 15,
      },
];

const PilotsCarousel = () => {
    return (
        <>
            <h1>Clasificación De Pilotos</h1>
            <div className="pilots-container">
                {pilots.map((pilot, index) => (
                    <PilotCards key={index} pilot={pilot} />
                ))}
            </div>
        </>
    );
};

export default PilotsCarousel;
