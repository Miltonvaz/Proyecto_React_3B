import React, { Component } from 'react';

class RaceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }

  handleShowDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  render() {
    const { raceName, raceDetails } = this.props;
    const { showDetails } = this.state;

    return (
      <article className="article-hover">
        <img src={raceDetails.imagen} alt={raceName} />
        <h3>{raceName}</h3>
        <p>{`El ${raceName}, programado para el ${this.props.date}.`}</p>
        <button className="button" onClick={this.handleShowDetails}>
          {showDetails ? 'Ocultar detalles' : 'Mostrar detalles'}
        </button>

        {showDetails && (
          <div className="race-details">
            <h3>Detalles del {raceName}</h3>
            <p><strong>Circuito:</strong> {raceDetails.circuito}</p>
            <p><strong>Vuelta más rápida:</strong> {raceDetails.vueltaRapida}</p>
            <p><strong>Máximo ganador:</strong> {raceDetails.maxGanador}</p>
            <p><strong>Datos curiosos:</strong> {raceDetails.datosCuriosos}</p>
          </div>
        )}
      </article>
    );
  }
}

export default RaceDetails;
