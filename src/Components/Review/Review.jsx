import Reviewer from "../../assets/reviewer.png";
import "./Review.css";

const Review = () => {
  return (
    <section id="review">
      <div className="arrow_btns">
        <div className="left_arrow text-center">
          <a href="#">
            {" "}
            <i className="fa-solid fa-angle-left"></i>
          </a>
        </div>
        <div className="right_arrow text-center">
          <a href="#">
            <i className="fa-solid fa-angle-right"></i>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="review_head text-center">
          <h3>What The People Thinks About Us</h3>
        </div>

        <div className="review_details">
          <div className="review_box text-center">
            <div className="reviewer_img">
              <img src={Reviewer} alt="" />
            </div>
            <div className="review_star text-center">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p>
              Lesser Replenish bearing they’re him cattle kind dominion. You
              which fill place. Land she’d subdue divided gathering blessed
              seasons it. Without, wherein days.
            </p>
            <h4>Lukan Depina</h4>
            <p className="designation">Ceo And Head Of Idea</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
