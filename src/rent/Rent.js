import "./rent.css";

import Dates from "../datePicker/DatePicker";
import UnitPicker from "../unitPicker/UnitPicker";
import { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Rent = () => {
  const [daysMessage, setDaysMessage] = useState(5);
  const [unitMessage, setUnitMessage] = useState(400);
  const [price, setPrice] = useState(2000);

  const handleDaysMessage = (message) => {
    setDaysMessage(message);
  };

  const handleUnitMessage = (message) => {
    setUnitMessage(message);
  };

  const Price = () => {
    return <p className="rent__price">Estimated price {price}$</p>;
  };

  useEffect(() => {
    setPrice(daysMessage * unitMessage);
  }, [daysMessage, unitMessage]);

  const postToFirebase = async () => {
    try {
      const docRef = await addDoc(collection(db, "rents"), {
        daysMessage,
        unitMessage,
        price
      });
      console.log("Document written with ID: ", docRef.id);
      console.log("Information posted:", {
        daysMessage,
        unitMessage,
        price
      });
      alert("Information sent successfully!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="rent">
      <Dates onMessage={handleDaysMessage} />
      <UnitPicker onMessage={handleUnitMessage} />
      <Price />
      <button className="home__main-btn rent__btn" onClick={postToFirebase}>
        Book a trip
      </button>
    </div>
  );
};

export default Rent;
