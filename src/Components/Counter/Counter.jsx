import Element from "../../assets/element.png";
import "./Counter.css";
const Counter = () => {
  return (
    <section id="counter">
      <div className="counter-image">
        <img src={Element} alt="Counter_img" />
      </div>
      <div className="container">
        <div className="row">
          <div className="counter_details col-sm-6 col-lg-3 my-sm-3 my-lg-0">
            <h3>53k</h3>
            <p>Happy Client</p>
          </div>
          <div className="counter_details col-sm-6 col-lg-3 my-sm-3 my-lg-0">
            <h3>10k</h3>
            <p>Projects Done</p>
          </div>
          <div className="counter_details col-sm-6 col-lg-3 my-sm-3 my-lg-0">
            <h3>120</h3>
            <p>Gets Award</p>
          </div>
          <div className="counter_details col-sm-6 col-lg-3 my-sm-3 my-lg-0">
            <h3>16</h3>
            <p>Operated Years</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
