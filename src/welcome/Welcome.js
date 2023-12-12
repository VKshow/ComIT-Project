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
        alt="mainTitle"
        src="https://trumpwallpapers.com/wp-content/uploads/Marvel-Wallpaper-04-3840-x-2160.jpg"
      />
    </div>
  );
};

export default Welcome;
