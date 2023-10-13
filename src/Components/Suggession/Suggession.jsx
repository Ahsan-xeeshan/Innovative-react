import Vector2 from "../../assets/Vector2.png";
import SuggestLink1 from "../../assets/suggest_link1.jpg";
import SuggestLink2 from "../../assets/suggest_link2.jpg";
import SuggestLink3 from "../../assets/suggest_link3.jpg";
import "./Suggession.css";

const Suggession = () => {
  return (
    <section id="suggession">
      <div className="sugession_bg">
        <img src={Vector2} alt="" />
      </div>
      <div className="container">
        <div className="suggession_head text-center text-lg-start">
          <h3>You May Also Like</h3>
        </div>
        <div className="suggession_links">
          <div className="row">
            <div className="col-sm-6 col-lg-5 text-end">
              <div className="suggest_img">
                <img src={SuggestLink1} alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-7 ps-sm-4">
              <div className="suggest_details">
                <div className="link_source">
                  <a href="#">News</a>
                  <a href="#">By Thomas Nikelson</a>
                  <a href="#">Posted 5 hours ago</a>
                </div>
                <div className="link_summary">
                  <h5>
                    Punto Pago Allows Quick And Secure Payments For Services In
                    Panama
                  </h5>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="suggession_links">
          <div className="row">
            <div className="col-sm-6 col-lg-5 text-end">
              <div className="suggest_img">
                <img src={SuggestLink2} alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-7 ps-sm-4">
              <div className="suggest_details">
                <div className="link_source">
                  <a href="#">News</a>
                  <a href="#">By Thomas Nikelson</a>
                  <a href="#">Posted 5 hours ago</a>
                </div>
                <div className="link_summary">
                  <h5>
                    The User Can Also Replenish A Balance Make Remittances
                  </h5>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="suggession_links">
          <div className="row">
            <div className="col-sm-6 col-lg-5 text-end">
              <div className="suggest_img">
                <img src={SuggestLink3} alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-7 ps-sm-4">
              <div className="suggest_details">
                <div className="link_source">
                  <a href="#">News</a>
                  <a href="#">By Thomas Nikelson</a>
                  <a href="#">Posted 5 hours ago</a>
                </div>
                <div className="link_summary">
                  <h5>
                    The User Can Also Replenish A Balance Make Remittances
                  </h5>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suggession;
