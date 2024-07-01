import React from 'react';
import Image from '../../atmos/Image/Image';
import PilotDetails from '../../molecules/PilotDetails/PilotDetails';

const PilotCards = ({ pilot }) => {
    return (
        <div className="pilot-card">
            <Image src={pilot.image} alt="Imagen del Piloto" />
            <PilotDetails
                name={pilot.name}
                teamLogo={pilot.teamLogo}
                team={pilot.team}
                points={pilot.points}
            />
        </div>
    );
};

export default PilotCards;
