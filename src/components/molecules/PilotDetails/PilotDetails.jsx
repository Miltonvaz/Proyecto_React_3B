import React from 'react';
import Image from '../../atmos/Image/Image';
import Text from '../../atmos/Text/Text';

const PilotDetails = ({ name, teamLogo, team, points }) => {
    return (
        <div className="pilot-details">
            <h3>{name}</h3>
            <Image src={teamLogo} alt="Logo del Equipo" />
            <Text>Equipo: {team}</Text>
            <Text>Puntos: {points}</Text>
        </div>
    );
};

export default PilotDetails;
