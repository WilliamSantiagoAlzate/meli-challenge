import { spinnerColors } from '../../types';

type SpinnerProps = {
  color: spinnerColors
}

const Spinner: React.FC<SpinnerProps> = ({ color }) => (
  <div className="spinner">
    <div className={`spinner-${color}`}></div>
    <div className={`spinner-${color}`}></div>
    <div className={`spinner-${color}`}></div>
    <div className={`spinner-${color}`}></div>
  </div>
)

export default Spinner;