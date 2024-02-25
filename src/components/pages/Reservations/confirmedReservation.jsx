import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const confirmedReservation = () => {
  return (
    <div className="container confirmed-reservation">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Your table has been reserved!</h2>
      <p>You'll receive a confirmation email with all the details.</p>
    </div>
  );
};

export default confirmedReservation;
