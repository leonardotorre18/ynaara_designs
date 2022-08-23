import React, { useEffect, useRef } from 'react';
import '../../styles/Carousel.scss';
import styled from 'styled-components';
import ArrowRight from '../../assets/iconmonstr-arrow-37.svg';
import ArrowLeft from '../../assets/iconmonstr-arrow-79.svg';

function Carousel({ children , items }) {
  const SliderRef = useRef(null);
  const IntervalRef = useRef(null);
  const sliderRight = () => {
    if (SliderRef.current.children.length > 0) {
      // Get first element
      const FirstChildren = SliderRef.current.children[0];

      // Send Transition to Container
      SliderRef.current.style.transition = 'all linear .7s';
      // Move Slider
      const SliderWith = SliderRef.current.children[0].offsetWidth;
      SliderRef.current.style.transform = `translateX(-${SliderWith}px)`;

      const resetSlider = () => {
        // Reset position Slider
        SliderRef.current.style.transition = 'none';
        SliderRef.current.style.transform = 'translateX(0)';

        // Push first element to the final list
        SliderRef.current.appendChild(FirstChildren);

        SliderRef.current.removeEventListener('transitionend', resetSlider);
      };
      SliderRef.current.addEventListener('transitionend', resetSlider);
    }
  };

  const sliderLeft = () => {
    if (SliderRef.current.children.length > 0) {
      // Get last children
      const LastChildren = SliderRef.current.children[SliderRef.current.children.length - 1];
      SliderRef.current.insertBefore(LastChildren, SliderRef.current.children[0]);
      // Move Slider
      SliderRef.current.style.transition = 'none';
      const SliderWith = SliderRef.current.children[0].offsetWidth;
      SliderRef.current.style.transform = `translateX(-${SliderWith}px)`;

      setTimeout(() => {
        SliderRef.current.style.transition = 'all linear .7s';
        SliderRef.current.style.transform = 'translateX(0)';
      }, 30);
    }
  };

  useEffect(() => {
    IntervalRef.current = setInterval(() => {
      sliderRight();
    }, 4000);

    SliderRef.current.addEventListener('mouseenter', () => {
      clearInterval(IntervalRef.current);
    });
    SliderRef.current.addEventListener('mouseleave', () => {
      IntervalRef.current = setInterval(() => {
        sliderRight();
      }, 4000);
    });

    return () => {
      clearInterval(IntervalRef.current);
    };
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-slider" ref={SliderRef}>

        {children}

      </div>
      <div className="carousel-controllers">
        <button
          className="carousel-controllers__arrow-left"
          onClick={sliderLeft}
          type="submit"
        >
          <img src={ArrowLeft} alt="" />
        </button>
        <button
          className="carousel-controllers__arrow-right"
          onClick={sliderRight}
          type="submit"
        >
          <img src={ArrowRight} alt="" />
        </button>
      </div>
    </div>
  );
}

export const Slider = styled.div`
  min-width: ${ props => 100/props.width+'%' };
  height: 400px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default Carousel;
