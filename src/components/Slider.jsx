import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";

const Slider = ({slider}) => {
  return (
    <Styled>
      <div className="slide-container">
        <Fade duration={3000}>
          {slider.map((fadeImage, index) => (
            <div key={index} className="each-fade">
              <img style={{height: "400px"}} src={fadeImage.image} alt={fadeImage.alt} />
            </div>
          ))}
        </Fade>
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  margin-bottom: 16px;
  img{
      width: 100%;
  }
`;

export default Slider;
