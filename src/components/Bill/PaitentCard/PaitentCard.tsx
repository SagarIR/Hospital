import React, { useState } from "react";
import Invoice from "../Invoice/Invoice";
import "../PaitentCard/PatientCard.css";

interface PatientCardProps {
  patient: {
    id: number;
    name: string;
    age: number;
    gender: string;
    Billno: number;
    date: string;
    ReceiptNo: number;
    MobileNo: number;
    BillData: {
      srNo: number;
      serviceName: string;
      Price: number;
      Quantity: number;
      Amount: number;
    }[];
  };
}
const PatientCard = ({ patient }: PatientCardProps) => {
  const [showInvoice, setShowInvoice] = useState(false);

  const toggleInvoice = () => {
    setShowInvoice(!showInvoice);
  };
  return (
    <div className="patientCard">
      <h2 className="patient">{patient.name}</h2>
      <p className="patient">
        {patient.age}, {patient.gender}
      </p>
      <p className="patientBillNo">Bill No: {patient.Billno}</p>
      <button className="invoiceButton" onClick={toggleInvoice}>
        View Invoice
      </button>
      {showInvoice && <Invoice patient={patient} />}
    </div>
  );
};

export default PatientCard;
