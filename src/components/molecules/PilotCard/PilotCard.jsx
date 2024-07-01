import React from 'react';
import Image from '../../atmos/Image/Image';
import Title from '../../atmos/Title/Title';
import Text from '../../atmos/Text/Text';

const PilotCard = ({ imageSrc, name, team }) => (
  <div className="pilot-card">
    <Image src={imageSrc} alt={name} />
    <Title>{name}</Title>
    <Text>{team}</Text>
  </div>
);

export default PilotCard;
