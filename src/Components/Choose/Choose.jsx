import Element2 from "../../assets/Element 2.png";
import "./Choose.css";

const Choose = () => {
  return (
    <section id="choose">
      <div className="choose_img">
        <img src={Element2} alt="Choose_img" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 py-5 order-2 order-lg-1">
            <div className="choose-left">
              <div className="choose_icon"></div>
              <div className="choose_text">
                <p>We solve real-world problems through people and the web.</p>
              </div>
            </div>
            <div className="choose-left">
              <div className="choose_icon"></div>
              <div className="choose_text">
                <p>
                  We make processes and technology work efficiently together.
                </p>
              </div>
            </div>
            <div className="choose-left">
              <div className="choose_icon"></div>
              <div className="choose_text">
                <p>
                  We advance improve existing technology through research and
                  development.
                </p>
              </div>
            </div>
            <div className="choose-left">
              <div className="choose_icon"></div>
              <div className="choose_text">
                <p>
                  We develop long-lasting and scalable solutions, relationships
                  partnerships.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2 text-center text-lg-start py-lg-5">
            <div className="choose-right">
              <h3>Why Choose Us</h3>
              <p>
                We are now a team of strategists, engineers, designers, and
                marketers who both use and develop technology for a variety of
                client needs.
              </p>

              <button className="contact_btn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
