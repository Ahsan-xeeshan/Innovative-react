import "./Copywright.css";

const Copywright = () => {
  return (
    <div id="copywrite">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-8 text-center text-sm-start">
            <p>@2023 Innovate.All rights reserved.</p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center text-sm-end">
            <p>
              <a href="#">Privacy policy</a>
            </p>
            <p>
              <a href="#">Terms & condition</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copywright;
