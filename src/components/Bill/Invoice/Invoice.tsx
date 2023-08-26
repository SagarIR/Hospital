import React from "react";
import BillItem from "../BillItem/BillItem";
import "../Invoice/Invoice.css";

interface InvoiceProps {
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

const Invoice = ({ patient }: InvoiceProps) => {
  const totalAmount = patient.BillData.reduce(
    (total, item) => total + item.Amount,
    0
  );

  return (
    <div className="invoice">
      <div className="invoiceBox">
        <div className="invoiceHeader">
          <h2>Invoice</h2>
          <div className="patients">
            <div className="data">
              <div className="textWrapper1">Patient Name</div>
              <div className="textWrapper2">{patient.name}</div>
            </div>
            <div className="data">
              <div className="textWrapper1">Age/Gender</div>
              <div className="textWrapper2">
                {patient.age}
                {patient.gender}
              </div>
            </div>
            <div className="data">
              <div className="textWrapper1">Bill No </div>
              <div className="textWrapper2">{patient.Billno}</div>
            </div>
            <div className="data">
              <div className="textWrapper1">Date/Time</div>
              <div className="textWrapper2"> {patient.date}</div>
            </div>
            <div className="data">
              <div className="textWrapper1">Receipt No</div>
              <div className="textWrapper2"> {patient.ReceiptNo}</div>
            </div>
          </div>
        </div>

        <div className="invoice-items">
          <div className="bill-item header">
            <span>Sr No</span>
            <span>Service Name</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Amount</span>
          </div>
          {patient.BillData.map((item) => (
            <BillItem key={item.srNo} item={item} />
          ))}
        </div>
        <div className="invoiceData">
          <div className="invoicefooter">
            <div className="invoceWrap">
              <p>Moblie No</p>
              <p>Tax</p>
              <p>Discount</p>
              <p>
                <strong>Total</strong>
              </p>
            </div>

            <div className="invoceWrap2">
              <p>{patient.MobileNo}</p>
              <p>500</p>
              <p>1500</p>
              <p>{totalAmount}</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
