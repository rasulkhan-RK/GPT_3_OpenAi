import "./posibility.css";
import posibilityImage from "../../assets/possibility.png";

const Posibility = () => {
  return (
    <div className="gpt3__posibility section__padding" id="possibility">
      <div className="gpt3__posibility-image">
        <img src={posibilityImage} alt="posibiltyImage" />
      </div>
      <div className="gpt3__posibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The Posibilties are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Posibility;
