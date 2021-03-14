import { Link } from "react-router-dom";
import styled from "styled-components";

const Style = styled.div`
  a {
    :hover {
      .outlines {
        .tl,
        .br {
          height: 100%;
          width: 100%;
        }
      }
    }
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-decoration: none;
    padding: 0 0.25rem 0 0.25rem;
    .text {
      position: relative;
      font-size: ${(props) => props.theme.header.menuLinks.fontSize};
      color: transparent;
      background-image: url("background-images/gold-gradient-text.jpg");
      background-size: 100% 100%;

      background-clip: text;
      -webkit-background-clip: text;
    }
    .non-text {
      display: inline-block;
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .outlines {
      width: 100%;
      height: 100%;
      .outline {
        position: absolute;
        width: 0%;
        height: 0%;
        background-image: url("background-images/gold-gradient-text.jpg");
        background-size: 100% 100%;
        transition: height 0.25s ease-in-out, width 0.25s ease-in-out;
        box-shadow: 0 0 2px gold;
      }
      .tl {
        top: 0;
        left: 0;
      }
      .br {
        bottom: 0;
        right: 0;
      }
    }
    .backing {
      background-color: black;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      box-shadow: 0 0 4px black;
    }
  }
`;

export default function ({ text, to }) {
  return (
    <Style>
      <Link to={to}>
        <div className="non-text outlines ">
          <div className="tl outline" />
          <div className="br outline" />
        </div>
        <div className="non-text backing " />
        <div className="text">{text}</div>
      </Link>
    </Style>
  );
}
