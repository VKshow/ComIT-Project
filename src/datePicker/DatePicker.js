import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

const Dates = ({ onMessage }) => {
  const today = new Date();
  const fiveDaysLater = new Date(today);
  fiveDaysLater.setDate(today.getDate() + 6);

  const [pickupDate, setPickupDate] = useState(today);
  const [dropoffDate, setDropoffDate] = useState(fiveDaysLater);
  const [isTimeDiff, setIsTimeDiff] = useState(true);
  const [timeDiff, setTimeDiff] = useState(5);

  const sendMessage = () => {
    const message = timeDiff;
    onMessage(message);
  };

  const handlePickupDateChange = (date) => {
    const diffCalc = Math.ceil((dropoffDate - date) / (1000 * 60 * 60 * 24));
    if (dropoffDate && diffCalc >= 5) {
      setIsTimeDiff(true);
      setTimeDiff(diffCalc);
      sendMessage();
    } else {
      setIsTimeDiff(false);
    }
    setPickupDate(date);
  };

  const handleDropoffDateChange = (date) => {
    const diffCalc = Math.ceil((date - pickupDate) / (1000 * 60 * 60 * 24));
    if (pickupDate && diffCalc >= 5) {
      setIsTimeDiff(true);
      setTimeDiff(diffCalc);
      sendMessage();
    } else {
      setIsTimeDiff(false);
    }
    setDropoffDate(date);
  };

  useEffect(() => {
    sendMessage();
  }, [timeDiff]);

  const RightDays = () => {
    return <h3 className="date__title">You are booking for {timeDiff} days</h3>;
  };

  const WrongDays = () => {
    return <h3 className="date__title">Minimum booking days is 5</h3>;
  };

  return (
    <div>
      <h2 className="date__title">Pick Up Date</h2>
      <DatePicker
        className="date__field"
        selected={pickupDate}
        onChange={handlePickupDateChange}
        dateFormat="dd/MM/yyyy"
        isClearable
        placeholderText="Select a date"
      />
      <h2 className="date__title">Drop Off Date</h2>
      <DatePicker
        className="date__field"
        selected={dropoffDate}
        onChange={handleDropoffDateChange}
        dateFormat="dd/MM/yyyy"
        isClearable
        placeholderText="Select a date"
      />
      {isTimeDiff ? <RightDays /> : <WrongDays />}
    </div>
  );
};

export default Dates;
