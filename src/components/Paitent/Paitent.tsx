import { patients } from "../Bill/PaitentData/Paitent";
import "../Paitent/patient.css";

const PaitentData = () => {
  return (
    <div className="patientData">
      {patients.map((patient) => (
        <>
          <div className="patientCardData">
            <h2>{patient.name}</h2>
            <p>Bill No: {patient.Billno}</p>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            <p>Mobile No:{patient.MobileNo}</p>
          </div>
        </>
      ))}
    </div>
  );
};
export default PaitentData;
