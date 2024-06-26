import { useState } from "react";
import ReportIcon from "../assets/report.svg";

const MobilePopup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const hidePopup = () => {
    setIsVisible(false);
  };
  return (
    <div className={`popup ${isVisible ? "" : "hidden"}`}>
      <div className="icon">
        <img src={ReportIcon} alt="Exclamation" />
      </div>
      <p>
        <span>Hey, mobile user!</span>
        <br />
        For better user experience, please use desktop mode
      </p>
      <button onClick={hidePopup}>Hide</button>
    </div>
  );
};
export default MobilePopup;
