import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = ({admin}) => {
  return (
    <Styled>
      <div className="not-found">
        <img
          src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
          alt="not-found"
        />
        <Link to={admin ? '/admin/' : '/'}className="link">
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
    margin-top: 48px;

    img {
      width: 70%;
      height: 70%;
      margin: 0 auto;
      margin-bottom: 8px;
    }

    .link {
      color: blue;
      font-size: 20px;
      font-weight: 800;
    }

    .link:hover {
      color: blue;
      text-decoration: underline;
    }

    img:hover {
      opacity: unset;
      cursor: default;
    }
  }
`;

export default Error;
