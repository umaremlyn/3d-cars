import SecondImg from "../../images/second_header.jpg";
import "./second.css";

const SecondHeader = () => {
  return (
    <>
      <div className="second_header">
        <div>
          <div className="img">
            <img src={SecondImg} className="img-fluid" alt="" />
          </div>
          <div className="Overlay"></div>
          <div className="second_header_content">
            <h6>
              <span>Faree</span> Believed in You And You Believe in 
              <span>Comfort</span> Or Not...
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};
export default SecondHeader;
