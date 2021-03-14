import styled from "styled-components";
import InfoBox from "./InfoBox";

const Style = styled.div`
  display: flex;
  flex-direction: ${(props) => props.theme.common.infoIconBox.flexDirection};
  align-items: center;
  width: 90%;
  padding: 0.25rem;

  .icon {
    order: 0;
    width: ${(props) => props.theme.common.infoIconBox.iconWidth};
    margin: 0 auto;
  }
  .info {
    order: ${(props) => props.theme.common.infoIconBox.order};
    padding: 1rem;
    .whitesmoke-heading {
      padding-bottom: 1rem;
      font-size: ${(props) => props.theme.font.heading.size};
    }
    p {
      font-size: ${(props) => props.theme.font.text.size};
    }
  }
`;
export default function ({ heading, icon, text, flip }) {
  return (
    <Style className="frosted-glass">
      <img className="icon" src={icon} style={{ order: flip ? 1 : 0 }} />
      <div className="info">
        <h2 className="whitesmoke-heading">{heading}</h2>
        <p>{text}</p>
      </div>
    </Style>
  );
}
