import React, { useEffect, useRef } from 'react';
import '../../styles/Carousel.scss';
import styled from 'styled-components';
import ArrowRight from '../../assets/iconmonstr-arrow-37.svg';
import ArrowLeft from '../../assets/iconmonstr-arrow-79.svg';

function Carousel({ children , items, responsive }) {
  const SliderRef = useRef(null);
  const IntervalRef = useRef(null);

  /**
   * Change transtion style to an element
   * @param {ref} element take slider ref to changes transition style
   * @param {string} style new trasition style value to slider
   */
  const setTransition = (element, style) => {
    element.current.style.transition = style
  }
  /**
   * Change transform style to an element
   * @param {ref} element take slider ref to changes transform style
   * @param {string} style new trasform style value to slider
   */
  const setTransform = (element, style) => {
    element.current.style.transform = style
  }
  /**
   * Move position to element to receives
   * @param {ref} slider take slider ref
   */
  const moveSlider = (slider) => {
    const SliderWith = slider.current.children[0].offsetWidth;
    setTransform(slider, `translateX(-${SliderWith}px)`);
  }

  const sliderRight = () => {
    const children = SliderRef.current.children;
    if (children.length > 0) {
      // Get first element
      const FirstChildren = children[0];
      // Send Transition to Container
      setTransition(SliderRef, 'all linear .7s');
      // Move Slider
      moveSlider(SliderRef);

      const resetSlider = () => {
        // Reset position Slider
        setTransition(SliderRef, 'none');
        setTransform(SliderRef, 'translateX(0)');
        // Push first element to the final list
        SliderRef.current.appendChild(FirstChildren);

        SliderRef.current.removeEventListener('transitionend', resetSlider);
      };
      SliderRef.current.addEventListener('transitionend', resetSlider);
    }
  };

  const sliderLeft = () => {
    const children = SliderRef.current.children;
    if (children.length > 0) {
      // Get last children
      const LastChildren = children[children.length - 1];
      SliderRef.current.insertBefore(LastChildren, children[0]);
      // Move Slider
      setTransition(SliderRef, 'none');
      moveSlider(SliderRef);

      setTimeout(() => {
        setTransition(SliderRef, 'all linear .7s');
        setTransform(SliderRef, 'translateX(0)');
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
      <CarouselSlider
        ref={SliderRef}
        items={items}
        responsive={ responsive === undefined ? {} : responsive}
      >

        {children}

      </CarouselSlider>
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
const CarouselSlider = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  div {
    min-width: ${ props => props.items ? 100/props.items+'%' : '100%' };
    ${props => {
        let mediaQuerys = '';
        for (let query of Object.entries(props.responsive)) {
          mediaQuerys += `@media (min-width: ${query[0]}px) {
            min-width: ${100/query[1]}%;
          };
          `
        }
        return mediaQuerys;
    }}

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export default Carousel;
