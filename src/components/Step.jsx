import urlIcon from "../assets/website_6105215.png";
import "./index.css";
export default function Step() {
  return (
    <>
      <div className="individual-step">
        <img src={urlIcon} />
        <p>escolha sua url</p>
        <div className="cont">
          <span className="circle-step">1</span>
        <span className="bar"></span>
        </div>
      </div>
    </>
  );
}
