import "./Banner.css";

const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="row">
          <div className="m-auto text-center">
            <div className="banner-details">
              <h1>You&apos;re Unique.Your website should be too</h1>
              <p>
                A beautiful website passionately crafted for your small
                business. Our Digital Agency development has changed the way
                brands and businesses use technology for growing business.
              </p>
              <div className="text-center">
                <button className="prime_btn d-block d-lg-inline mb-3">
                  Get free Quoto
                </button>
                <button className="second_btn d-block d-lg-inline">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
