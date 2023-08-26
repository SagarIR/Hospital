import React from "react";
import "../BillItem/BillItem.css";

interface BillItemProps {
  item: {
    srNo: number;
    serviceName: string;
    Price: number;
    Quantity: number;
    Amount: number;
  };
}

const BillItem = ({ item }: BillItemProps) => {
  return (
    <div className="billItem">
      <span>{item.srNo}</span>
      <span>{item.serviceName}</span>
      <span>{item.Price}</span>
      <span>{item.Quantity}</span>
      <span>{item.Amount}</span>
    </div>
  );
};

export default BillItem;
