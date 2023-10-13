import Logo from "../../assets/Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-7 col-lg-5 pb-5">
            <div className="footer_logo">
              <a href="#">
                <img src={Logo} alt="" />
              </a>
            </div>
            <div className="footer_details">
              <p>
                Install any demo or template with a single click. You can mix
                and match all the demos & templates. Every demo can be turned
                into one or multi-page.
              </p>
            </div>
          </div>
          <div className="col-sm-5 col-lg-2 pb-sm-3 pb-lg-0">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Benefit</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-7 col-lg-3">
            <h4>Products</h4>
            <ul>
              <li>
                <a href="#">Task Management</a>
              </li>
              <li>
                <a href="#">Company Growth</a>
              </li>
              <li>
                <a href="#">Time Tracking</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-5 col-lg-2">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Customer Service</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
