import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Styled>
      <div id="footer">
        <ul class="flex flex-col gap-2">
          <h2>Connect with me</h2>
          <li>
            <span>Zalo:</span>
            <Link to="https://chat.zalo.me/">https://chat.zalo.me/</Link>
          </li>
          <li>
            <span>Facebook</span>
            <Link to="http://facebook.com/event">
              http://facebook.com/event
            </Link>
          </li>
          <li>
            <span>Email:</span>
            <Link to="event@gmail.com">event@gmail.com</Link>
          </li>
          <li>
            <span>Address: HUTECH</span>
          </li>
        </ul>

        <div className="coppyright">
          <span>Copyright &copy; 2023.</span>
        </div>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  #footer {
    margin-top: 16px;
    .coppyright {
      text-align: center;
      padding: 16px;
    }

    ul {
      li {
        display: flex;
        margin-top: 4px;
        gap: 8px;

        a{
          font-weight: 500;
        }

        a:hover{
          color: blue;
          font-weight: bold;
        }
      }
    }
  }
`;

export default Footer;
