import Growth1 from "../../assets/growth 1.png";
import Presentation from "../../assets/presentation (3) 1.png";
import SocialMarketing1 from "../../assets/social-marketing 1.png";
import SocialMedia1 from "../../assets/social-media 1.png";
import WebDesign1 from "../../assets/web-design 1.png";
import "./Service.css";

const Service = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 mb-5">
            <div className="service_heading">
              <h3>What We Do</h3>
              <p>
                We are now a team of strategists, engineers, designers, and
                marketers who both use and develop technology
              </p>
              <button className="contact_btn">Contact Us</button>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-5">
            <div className="service_details text-center">
              <img src={WebDesign1} alt="web design" />
              <h4>Web design & Dev</h4>
              <p>
                Social Media has changed the way we interact & do business while
                creating
              </p>
              <div className="service_btn">
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-5">
            <div className="service_details text-center">
              <img src={Growth1} alt="web design" />
              <h4>Software Dev</h4>
              <p>
                Content Marketing is the other fold of online advertisement. If
                you are looking to build
              </p>
              <div className="service_btn">
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-5">
            <div className="service_details text-center">
              <img src={SocialMarketing1} alt="web design" />
              <h4>Content Writing</h4>
              <p>
                Social Media has changed the way we interact & do business while
                creating a new avenue.
              </p>
              <div className="service_btn">
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-5">
            <div className="service_details text-center">
              <img src={SocialMedia1} alt="web design" />
              <h4>Digital Marketing</h4>
              <p>
                Social Media has changed the way we interact & do business while
                creating a new avenue.
              </p>
              <div className="service_btn">
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-5">
            <div className="service_details text-center">
              <img src={Presentation} alt="web design" />
              <h4>Support & Training</h4>
              <p>
                Content Marketing is the other fold of online advertisement. If
                you are looking to build
              </p>
              <div className="service_btn">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
