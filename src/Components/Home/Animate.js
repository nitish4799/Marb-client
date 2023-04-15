import React, {useEffect} from 'react';
import $ from 'jquery';
// import Slider from 'react-slick';
// import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.js';
import './Animate.css';

const Animate = () => {

  useEffect(() => {
    $(document).ready(function() {
      $(".c-slider-init").slick({
        dots: false,
        nav: false,
        arrows: false,
        infinite: true,
        speed: 1200,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false
      });
    
      $(".slick-current").addClass("initialAnimation");
    
      let transitionSetup = {
        target: ".slick-list",
        enterClass: "u-scale-out",
        doTransition: function() {
          var slideContainer = document.querySelector(this.target);
          slideContainer.classList.add(this.enterClass);
          $(".slick-current").removeClass("animateIn");
        },
        exitTransition: function() {
          var slideContainer = document.querySelector(this.target);
          setTimeout(() => {
            slideContainer.classList.remove(this.enterClass);
            $(".slick-current").addClass("animateIn");
          }, 1000);
        }
      };
    
      var i = 0;
      // On before slide change
      $(".c-slider-init").on("beforeChange", function(
                                  event,
                                   slick,
                                   currentSlide,
                                   nextSlide
                                  ) {
        if (i === 0) {
          event.preventDefault();
          transitionSetup.doTransition();
          i++;
        } 
        else {
          i = 0;
          transitionSetup.exitTransition();
        }
    
        $(".c-slider-init").slick("slickNext");
        $(".slick-current").removeClass("initialAnimation");
      });
    });
    
  }, []);

  return (
    <>
    <div className='c-slider'>
      <div className='c-slider-init' >
        {/* <Slider {...settings}> */}
          <div className='c-slide cs-1' >
            <div className='c-slide-content'>
              <div className='c-wrap c-wrap--line'>
                <h2 className='c-slide__title text-white'>
                  marblegram
                  <span className='c-slide__title--large'>flooring</span>
                </h2>
              </div>
              <div className='c-wrap c-wrap--small'>
                <div className='c-slide__info'>
                  <h3 className='c-slide__subtitle text-white'>We are Unique</h3>
                  {/* <p className='c-slide__body text-white'>
                  We provide our clients with the best services of Marble, Granite and Handicrafts made from it. So far we have completed a total of 180 projects.                   </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className='c-slide cs-2'>
            <div className='c-slide-content'>
              <div className='c-wrap c-wrap--line'>
                <h2 className='c-slide__title'>
                  marblegram
                  <span className='c-slide__title--medium'>bathrooms</span>
                </h2>
              </div>
              <div className='c-wrap c-wrap--small'>
                <div className='c-slide__info'>
                  <h3 className='c-slide__subtitle text-black'>bathroom select</h3>
                  {/* <p className='c-slide__body text-black'>
                  An aesthetic that has always been selected for more exclusive projects, capable of adding a touch of elegance to a classic or contemporary interior.                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className='c-slide cs-3'>
            <div className='c-slide-content'>
              <div className='c-wrap c-wrap--line'>
                <h2 className='c-slide__title text-white'>
                  marblegram
                  <span className='c-slide__title--large'>kitchens</span>
                </h2>
              </div>
              <div className='c-wrap c-wrap--small'>
                <div className='c-slide__info'>
                  <h3 className='c-slide__subtitle text-white'>kitchen select</h3>
                  {/* <p className='c-slide__body'>
                  Inspired by rare and precious Oriental marble, this essence gives geometric balance, harmony and a contemporary feel to the spaces in which it is installed.                  </p> */}
                </div>
              </div>
            </div>
          </div>
        {/* </Slider> */}
      </div>
      </div>
    </>
  );
};

export default Animate;


