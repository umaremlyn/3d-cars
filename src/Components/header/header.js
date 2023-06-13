import HeaderImg from "../../images/header.jpg";
import "./header.css";
const Header = () => {
  return (
    <>
      {/* Header */}
      <div className="header">
        <div className="img">
          <div>
            <img src={HeaderImg} className="img-fluid" alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="Content">
          <h6>Welcome to Faree Cars</h6>
          <p>
            A car Dealership platform with a 3D view of our available cars, where you can browse from and choose your favorite Model
            <br />
            Ready to choose from our Collections? Get a look Now!
          </p>
          <button className="btn">Explore</button>
        </div>
      </div>
    </>
  );
};
export default Header;
