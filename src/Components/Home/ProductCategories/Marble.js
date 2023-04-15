import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import $ from "jquery";

const Marble = () => {
  return (
    <>
      <div className="mainbg">
        <div className="about-section m-5">
          <div className="container">
            <div className="row">
              <div className="about-heading col-lg-6">
                <h1
                  className="wow fadeInUp text-white m-5"
                  data-wow-delay="0.2s"
                >
                  Marble
                </h1>
              </div>
              <div className="about-content col-lg-6">
                <h3 className="wow fadeInUp text-white" data-wow-delay="0.3s">
                  @Marblegram
                </h3>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                    "Marble is not just a stone, it's a work of art that tells a
                    story of its own. At Marblegram, we celebrate the beauty and
                    uniqueness of every piece of marble. From the pristine white
                    of Carrara to the rich veins of Emperador, our collection
                    boasts a variety of marble that will inspire your
                    imagination and create a statement in any setting. With
                    Marblegram, you can trust that every piece of marble is
                    hand-selected and crafted with the utmost care to ensure a
                    premium product that will stand the test of time. Experience
                    the beauty of marble with Marblegram."
                 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section m-5">
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 px-5">
                  <div className="arrow-down">
                    <img src="https://images.pexels.com/photos/7598120/pexels-photo-7598120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                  </div>
                </div>

                <div className="project-heading col-lg-6">
                  <h1 className="wow fadeInUp text-center" data-wow-delay="0.3s">
                    CATALOGUE
                  </h1>
                  <p className="wow fadeInUp text-center" data-wow-delay="0.4s">
                  Unleash the beauty of natural stone with Marblegram's premium
                  marble collection. Crafted with utmost precision and care, our
                  marble products will add a touch of luxury and elegance to any
                  space. Experience the timeless beauty of marble and elevate
                  your home decor game with Marblegram.
                  </p>
                  <div
                    className="about-link wow fadeInUp pt-5 text-center"
                    data-wow-delay="0.6s"
                  >
                    <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
                      EXPLORE PRODUCTS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marble;
