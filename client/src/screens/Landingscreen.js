import React from "react";
import moment from "moment";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init({
  duration: "2000",
});
function Landingscreen() {
  return (
    <div className="">
      <div className="landing row justify-content-center text-center">
        <div
          className="col-md-6 my-auto"
          style={{ borderRight: "6px solid white" }}
        >
          <h2 style={{ color: "white", fontSize: "80px" }} data-aos="zoom-in">
            Jayaram Residency
          </h2>
          <h1 style={{ color: "white" }} data-aos="zoom-out">
            “Tirupathi Chittoor and Srikalahasthi
          </h1>
          <Link to="/home">
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landingscreen;
