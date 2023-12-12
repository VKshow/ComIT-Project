import { useState} from "react";

import "./app.css";

import Welcome from "../welcome/Welcome";
import Main from "../main/Main";


const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const changeVisibility = () => setIsVisible(false);

  return (
    <>
      {isVisible &&  <Welcome updateVisibility={changeVisibility} />}
      {!isVisible && <Main />}
    </>
  );
};

export default App;
// 