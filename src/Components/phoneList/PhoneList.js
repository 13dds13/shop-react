import React from "react";
import PhoneListItem from "./phoneListItem/PhoneListItem";

const PhoneList = ({ phones }) => {
  return (
    <ul>
      {phones.map((phone) => (
        <PhoneListItem phone={phone} ket={phone.id} />
      ))}
    </ul>
  );
};

export default PhoneList;
