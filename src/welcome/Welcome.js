import { useState, useEffect } from "react";

import "./welcome.css";

const Welcome = ({ updateVisibility }) => {
  const [isVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateVisibility(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mainImg">
      <img
        className="mainTitle"
        src="https://myvancity.ca/wp-content/uploads/2021/02/canadream.jpg"
      />
    </div>
  );
};

export default Welcome;
