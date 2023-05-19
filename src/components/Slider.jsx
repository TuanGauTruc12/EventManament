import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";

const Slider = () => {
  const fadeImages = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <Styled>
      <div className="slide-container">
        <Fade duration={3000}>
          {fadeImages.map((fadeImage, index) => (
            <div key={index} className="each-fade">
              <img style={{height: 400}} src={fadeImage} alt={fadeImage} />
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
  img:hover{
    opacity: 0.7;
  }
`;

export default Slider;
