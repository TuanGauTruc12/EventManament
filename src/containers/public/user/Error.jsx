import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <Styled>
      <div className="not-found">
        <img
          src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
          alt="not-found"
        />
        <Link to="/" className="link">
          Quay về trang chủ
        </Link>
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  .not-found {
    text-align: center;
    width: 100%;

    img {
      width: 100%;
      margin-bottom: 8px;
    }

    .link {
      color: blue;
    }

    .link:hover {
      color: blue;
      opacity: 0.7;
    }

    img:hover {
      opacity: unset;
      cursor: default;
    }
  }
`;

export default Error;
