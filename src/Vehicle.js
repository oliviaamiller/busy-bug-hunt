export default function Vehicle(props) {
  return <div className="vehicle">
    {props.vehicle === 'car' && '🚗'}
    {props.vehicle === 'truck' && '🚚'}
    {props.vehicle === 'bus' && '🚌'}
    {props.vehicle === 'motorcycle' && '🏍️'}
  </div>;
}