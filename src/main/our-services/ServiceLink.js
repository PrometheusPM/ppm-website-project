import styled from "styled-components";
import GoldText from "../../common/GoldText";
import GoldLink from "../../common/GoldText";

const Style = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  padding: ${(props) => props.theme.ourServices.serviceLink.padding};
  .text {
    position: relative;
    font-size: ${(props) => props.theme.ourServices.serviceLink.fontSize};
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
  .outline {
    width: 100%;
    height: 100%;

    background-size: 100% 100%;
    .tl {
      top: 0;
      left: 0;
    }
  }
  .backing {
    background-color: black;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    box-shadow: 0 0 8px black;
    opacity: 0.5;
  }
`;

export default function ({ text, href }) {
  return (
    <Style href={href}>
      <div className="non-text outline tl" />
      <div className="non-text backing " />
      <div className="text">{text}</div>
    </Style>
  );
}
