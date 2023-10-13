import Card1 from "../../assets/card1.png";
import Card2 from "../../assets/card2.png";
import Card3 from "../../assets/card3.png";
import "./Price.css";

const Price = () => {
  return (
    <section id="price">
      <div className="container">
        <div className="price_heading text-center">
          <h3>Choose The Right Plan</h3>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="price_card text-center">
              <h5>Basic</h5>
              <div className="card_img">
                <img src={Card1} alt="" />
              </div>
              <div className="amount">
                <span className="currency">$</span>
                <div className="price_tag">
                  <p>160</p>
                </div>
              </div>
              <div className="card_desc">
                <p className="first">
                  Responsive Design Dynamic Elements Service Pages
                </p>
                <p className="second">Custom Design & Features</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="price_card text-center">
              <h5>Professional</h5>
              <div className="card_img">
                <img src={Card2} alt="" />
              </div>
              <div className="amount">
                <span className="currency">$</span>
                <div className="price_tag">
                  <p>240</p>
                </div>
              </div>
              <div className="card_desc">
                <p className="first">
                  Responsive Design Dynamic Elements Service Pages
                </p>
                <p className="second">Custom Design & Features</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="price_card text-center">
              <h5>Exclusive</h5>
              <div className="card_img">
                <img src={Card3} alt="" />
              </div>
              <div className="amount">
                <span className="currency">$</span>
                <div className="price_tag">
                  <p>325</p>
                </div>
              </div>
              <div className="card_desc">
                <p className="first">
                  Responsive Design Dynamic Elements Service Pages
                </p>
                <p className="second">Custom Design & Features</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
