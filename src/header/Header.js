import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Context from "../Context";
import { mainsKey } from "../data";
import HeaderLink from "./HeaderLink";

const Style = styled.header`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  z-index: ${(props) => props.theme.header.zIndex};
  top: 0;
  height: ${(props) => props.theme.header.height};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 1rem;
  background-image: url("background-images/header-background.jpg");
  background-size: 100% 100%;
  box-shadow: 0 4px 8px black;
  .icon {
    height: 90%;
  }
  .menu-button {
    display: ${(props) => props.theme.header.menuButton.display};
    height: 50%;
  }
  .menu-links {
    position: ${(props) => props.theme.header.menuLinks.position};
    top: ${(props) => props.theme.header.menuLinks.top};
    left: 0;
    height: ${(props) => props.theme.header.menuLinks.height};
    width: 100%;
    display: ${(props) => props.theme.header.menuLinks.display};
    margin: 0 auto;
    justify-content: space-evenly;
    flex-direction: ${(props) => props.theme.header.menuLinks.flexDirection};
    align-items: center;

    .link-wrapper {
      display: inline-block;
    }
  }
  .show-menu {
    display: flex;
  }
`;

export default function () {
  const context = useContext(Context);
  const menuLinks = useRef();
  return (
    <Style className="show-menu">
      <Link to="/" className="prometheus icon">
        <img src="icons/prometheus-icon.png" height="100%" />
      </Link>
      <nav
        ref={menuLinks}
        className={
          "menu-links" + (context.mobile ? " frosted-glass-black" : "")
        }
      >
        {Object.values(mainsKey()).map((main, i) =>
          i > 0 ? <HeaderLink text={main.title} to={main.path} /> : null
        )}
      </nav>
      <img
        src="icons/menu-icon.png"
        className="menu-button icon"
        onClick={() => {
          menuLinks.current.classList.toggle("show-menu");
        }}
      />
    </Style>
  );
}
