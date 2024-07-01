import React from 'react';

const standings = [
  {
    position: 1,
    driver: 'Max Verstappen',
    nationality: 'NED',
    team: 'Red Bull Racing Honda RBPT',
    points: 161
  },
  {
    position: 2,
    driver: 'Charles Leclerc',
    nationality: 'MON',
    team: 'Ferrari',
    points: 113
  },
  {
    position: 3,
    driver: 'Sergio Perez',
    nationality: 'MEX',
    team: 'Red Bull Racing Honda RBPT',
    points: 107
  },
  {
    position: 4,
    driver: 'Lando Norris',
    nationality: 'GBR',
    team: 'McLaren Mercedes',
    points: 101
  },
  {
    position: 5,
    driver: 'Carlos Sainz',
    nationality: 'ESP',
    team: 'Ferrari',
    points: 93
  },
  {
    position: 6,
    driver: 'Oscar Piastri',
    nationality: 'AUS',
    team: 'McLaren Mercedes',
    points: 53
  },
  {
    position: 7,
    driver: 'George Russell',
    nationality: 'GBR',
    team: 'Mercedes',
    points: 44
  },
  {
    position: 8,
    driver: 'Lewis Hamilton',
    nationality: 'GBR',
    team: 'Mercedes',
    points: 35
  },
  {
    position: 9,
    driver: 'Fernando Alonso',
    nationality: 'ESP',
    team: 'Aston Martin Aramco Mercedes',
    points: 33
  },
  {
    position: 10,
    driver: 'Yuki Tsunoda',
    nationality: 'JPN',
    team: 'RB Honda RBPT',
    points: 15
  }
];

const Standings = () => (
  <section className="standings">
    <h1>Clasificación de Pilotos 2024</h1>
    <table>
      <thead>
        <tr>
          <th>POS</th>
          <th>Piloto</th>
          <th>Nacionalidad</th>
          <th>Equipo</th>
          <th>PTS</th>
        </tr>
      </thead>
      <tbody>
        {standings.map(({ position, driver, nationality, team, points }) => (
          <tr key={position}>
            <td>{position}</td>
            <td>{driver}</td>
            <td>{nationality}</td>
            <td>{team}</td>
            <td>{points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default Standings;
