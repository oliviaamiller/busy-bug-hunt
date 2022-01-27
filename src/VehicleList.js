import React from 'react';
import Vehicle from './Vehicle';

export default function VehicleList(props) {
  return (
    <div>
      <h2>Traffic</h2>
      <div className="traffic">
        {props.vehicles.map((vehicle, i) => <Vehicle key={`${vehicle}-${i}`}vehicle={vehicle} />)}
      </div>
    </div>
  );
}
