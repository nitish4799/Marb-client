import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <>
      {/* <body> */}
    <div className="testimonials-clean mt-5 pb-5">
        <div className="container">
            <div className="intro">
                <h2 className="text-center">Testimonials </h2>
                <p className="text-center">Our customers love us! Read what they have to say below.</p>
            </div>
            <div className="row people">
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                        <p className="description">Marblegram Team is extremely professional and knowledgeable, guiding me through the different types of marble and granite flooring options and helping me choose the perfect one for my workplace. They were also very flexible with scheduling and accommodating my needs.</p>
                    </div>
                    <div className="author">
                        {/* <img className="rounded-circle" src="https://i.imgur.com/nUNhspp.jpg" alt="client"/> */}
                        <h5 className="name">Abhilash</h5>
                        <p className="title">Managing Director (Caddman3D) </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                        <p className="description">I recently had the pleasure of working with Marblegram for a renovation project at my firm, and I must say I am thoroughly impressed with their work. From start to finish, the entire process was seamless and stress-free.</p>
                    </div>
                    <div className="author">
                        {/* <img className="rounded-circle" src="https://i.imgur.com/o5uMfKo.jpg" alt="client"/> */}
                        <h5 className="name">Prem Saran</h5>
                        <p className="title">CEO (Caddman3D) </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                        <p className="description">The installation process at Marblegram was quick and efficient, and the final result is stunning. The marble flooring has added a touch of elegance and sophistication to my home, and I constantly receive compliments on it.</p>
                    </div>
                    <div className="author">
                        {/* <img className="rounded-circle" src="https://i.imgur.com/At1IG6H.png" alt="client"/> */}
                        <h5 className="name">Satnam Ji</h5>
                        <p className="title">Owner of Creative Ltd.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Testimonials;
