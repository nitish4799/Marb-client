import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

const Arts = () => {
  return (
    <div className="mainbg">
    <div className="about-section m-5">
      <div className="container">
        <div className="row">
          <div className="about-heading col-lg-6">
            <h1
              className="wow fadeInUp text-white m-5"
              data-wow-delay="0.2s"
            >
              granite
            </h1>
          </div>
          <div className="about-content col-lg-6">
            <h3 className="wow fadeInUp text-white" data-wow-delay="0.3s">
              @Marblegram
            </h3>
            <p className="wow fadeInUp" data-wow-delay="0.4s">
              "Discover the unparalleled strength and beauty of natural
              granite with MarbleGram, the ultimate destination for premium
              granite products. Our exquisite range of granite is sourced
              from the finest quarries and crafted to perfection by our
              skilled artisans. From classic to contemporary designs,
              GraniteCo offers an extensive range of granite products that
              will add a touch of sophistication and durability to your
              space. Choose MarbleGram for an exceptional granite
              experience."
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
                <img src="https://images.pexels.com/photos/4203074/pexels-photo-4203074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
              </div>
            </div>

            <div className="project-heading col-lg-6">
              <h1
                className="wow fadeInUp text-center"
                data-wow-delay="0.3s"
              >
                CATALOGUE
              </h1>
              <p className="wow fadeInUp text-center" data-wow-delay="0.4s">
                Experience the beauty and durability of natural stone with
                Marblegram's premium granite collection. Our expertly
                crafted granite products are not only stunning, but also
                stand the test of time, making them the perfect investment
                for any home or commercial project.
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
  )
}

export default Arts