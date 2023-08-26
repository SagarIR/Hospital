import PatientCard from "../PaitentCard/PaitentCard";
import "../PaitentData/Paitent.css";

export const patients = [
  {
    id: 1,
    name: "Sagar Ramani",
    age: 23,
    gender: "Male",
    Billno: 12345678910,
    date: "02/02/2023,06:23 PM",
    ReceiptNo: 123141125514,
    MobileNo: 936589523,
    BillData: [
      {
        srNo: 1,
        serviceName: "Consultation",
        Price: 500,
        Quantity: 1,
        Amount: 500,
      },
      {
        srNo: 2,
        serviceName: "XRay",
        Price: 1500,
        Quantity: 2,
        Amount: 3000,
      },
    ],
  },
  {
    id: 2,
    name: "Mohit Ramani",
    age: 24,
    gender: "Male",
    Billno: 10987654321,
    date: "02/02/2023,06:23 PM",
    ReceiptNo: 123141125514,
    MobileNo: 9325896532,
    BillData: [
      {
        srNo: 1,
        serviceName: "Consultation",
        Price: 100,
        Quantity: 1,
        Amount: 200,
      },
      {
        srNo: 2,
        serviceName: "XRay",
        Price: 1500,
        Quantity: 2,
        Amount: 3000,
      },
    ],
  },
  {
    id: 3,
    name: "Khushal Ramani",
    age: 18,
    gender: "Male",
    Billno: 14725836910,
    date: "02/02/2023,06:23 PM",
    ReceiptNo: 123141125514,
    MobileNo: 7898563252,
    BillData: [
      {
        srNo: 1,
        serviceName: "Consultation",
        Price: 1000,
        Quantity: 1,
        Amount: 1500,
      },
      {
        srNo: 2,
        serviceName: "XRay",
        Price: 2000,
        Quantity: 2,
        Amount: 2500,
      },
    ],
  },
];

const Patient = () => {
  return (
    <div>
      {patients.map((patient) => (
        <>
          <div key={patient.id} className="patientItem">
            <PatientCard key={patient.id} patient={patient} />
          </div>
        </>
      ))}
    </div>
  );
};
export default Patient;
