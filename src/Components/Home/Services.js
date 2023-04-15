import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import { SiSimpleanalytics} from "react-icons/si";
import { RiInstallFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { CgIfDesign } from "react-icons/cg";

const Services = () => {
  return (
    <>
      <div className="marbanime text-bold mt-5 text-center">
          [ M A R B L E G R A M ]
        </div>

        <div className="our text-center mt-2">
          <h1>Our Services</h1>
        </div>
      <div className="cards-containers gap-5">
       
        <div className="cards">
            <div className="cards-image cards-1">
            <div className="mx-5 mt-5"><SiSimpleanalytics size={35} style={{color: "#244a92"}}/></div>
                <h5 className="card-title mt-4 mx-5" style={{color: "#244a92"}}>Financial Analyst</h5>
                <p className="card-text mt-5 mx-3 text-center">
                We created this square foot calculator for the flooring to take the maths off your plate. Thanks to this tool, you can quickly estimate the flooring cost and calculate how much hardwood.
                </p>
                <div className="mt-5 d-flex justify-content-center">
                <Link to="/financialanalyst" className="card-link mt-3" onClick={() => window.scrollTo(0, 0)}>
                  READ MORE
                </Link>
                </div>
            </div>
        </div>
        <div className="cards">
            <div className="cards-image cards-2">
            <div className="mx-5 mt-5"><RiInstallFill size={35} style={{color: "#244a92"}}/></div>
                <h5 className="card-title mt-4 mx-5" style={{color: "#244a92"}}>Installation and Finishing</h5>
                <p className="card-text mt-4 mx-3 text-center">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
                </p>
                <div className="mt-5 d-flex justify-content-center">
                <Link to="/installation" className="card-link mt-3" onClick={() => window.scrollTo(0, 0)}>
                READ MORE
                </Link>
                </div>
            </div>
        </div>
        <div className="cards">
            <div className="cards-image cards-3">
            <div className="mx-5 mt-5"><IoIosPeople size={35} style={{color: "#244a92"}}/></div>
                <h5 className="card-title mt-4 mx-5" style={{color: "#244a92"}}>Marble Selection Consultancy</h5>
                <p className="card-text mt-4 mx-3 text-center">
                Marble and granite have witnessed some aggressive marketing, primarily to win over the increased competition that picked up during the last decade, rather
                </p>
                <div className="mt-5 d-flex justify-content-center">
                <Link to="/selectionconsultancy" className="card-link mt-3" onClick={() => window.scrollTo(0, 0)}>
                READ MORE
                </Link>
                </div>
            </div>
        </div>
        <div className="cards">
            <div className="cards-image cards-4">
            <div className="mx-5 mt-5"><CgIfDesign size={35} style={{color: "#244a92"}}/></div>
              <h5 className="card-title mt-4 mx-5" style={{color: "#244a92"}}>Interior Design</h5>
                <p className="card-text mt-5 mx-3 text-center">
                Interior designers make interior spaces functional, safe, and beautiful for almost every type of building. Interior designers make indoor spaces functional, safe.
                </p>
                <div className="mt-5 d-flex justify-content-center">
                <Link to="/interior" className="card-link mt-3 pt-4" onClick={() => window.scrollTo(0, 0)}>
                READ MORE
                </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Services;
