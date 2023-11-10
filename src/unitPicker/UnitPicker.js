import "./unitPicker.css";
import { useEffect, useState } from "react";

const UnitPicker = ({ onMessage }) => {
  const [cars] = useState([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQIuf4k-l6sCEepWMbAnV8KCkjMzlQyNUhb-B0PXIsmorNTxw7jVN4OPiKCYPTBR_eds&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9o67fJo2OUMJNSl8UPN04UUoSEtyh390rWfeEUAbKmr-3MfB9wbTsCSs-Cb0qFIMNd4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPLSNDZnsVbp59tbk4EMk2BbUGZZZHz5ZnMFPI_qqCYiEC6U5fZ1DSPhs_m6s0hB2E1Q&usqp=CAU"
  ]);
  const [selectedCar, setSelectedCar] = useState(0);
  const [carPrice, setCarPrice] = useState();

  const sendMessage = () => {
    let message;
    if (selectedCar === 0) {
      message = 400;
    } else if (selectedCar === 1) {
      message = 500;
    } else {
      message = 700;
    }
    onMessage(message);
  };

  const chooseClick = (e, id) => {
    setSelectedCar(id);
  };

  useEffect(() => {
    sendMessage();
  }, [selectedCar]);

  return (
    <div>
      <h2 className="date__title">Select a unit</h2>
      {cars.map((item, id) => (
        <img
          className={`pick__img ${selectedCar === id ? `selected` : ""}`}
          src={item}
          key={id}
          alt="unit"
          onClick={(e) => chooseClick(e, id)}
        />
      ))}
    </div>
  );
};

export default UnitPicker;
