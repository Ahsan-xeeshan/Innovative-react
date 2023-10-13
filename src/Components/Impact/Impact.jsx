import Impact1 from "../../assets/impact.png";
import ImpactIcon1 from "../../assets/impact_icon1.png";
import ImpactIcon2 from "../../assets/impact_icon2.png";
import Vector from "../../assets/Vector.png";
import "./Impact.css";

const Impact = () => {
  return (
    <section id="impact">
      <div className="container">
        <div className="impact_heading text-center">
          <h3>We create real impact</h3>
          <p>
            We design, build and support websites and apps for clients
            worldwide. Create beautiful, eye-catching on-page messages without
            the need for a developer.
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <div className="impact_details d-block d-lg-flex">
              <div className="impact_img py-3">
                <img src={ImpactIcon1} alt="" />
              </div>
              <div className="impact_desc py-3">
                <h5>Competitive Analysis</h5>
                <p>
                  With an all-new look and powerful features, Ekko is the best
                  way to ensure success for your business.
                </p>
              </div>
            </div>
            <div className="impact_details d-block d-lg-flex">
              <div className="impact_img py-3">
                <img src={ImpactIcon2} alt="" />
              </div>
              <div className="impact_desc py-3">
                <h5>Strategy and Research</h5>
                <p>
                  Save money and start building your website using the best
                  tools available on the market today.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-md-block text-center text-lg-start">
            <div className="impact_image">
              <img src={Impact1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="impact_bg">
        <img src={Vector} alt="" />
      </div>
    </section>
  );
};

export default Impact;
