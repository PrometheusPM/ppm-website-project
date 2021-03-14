import styled from "styled-components";
import InfoBox from "./InfoBox";

const Style = styled.div`
  display: flex;
  flex-direction: ${(props) => props.theme.common.infoIconBox.flexDirection};
  width: 90%;
  padding: 1rem;
  .icon {
    order: 0;
    width: ${(props) => props.theme.common.infoIconBox.iconWidth};
    margin: 0 auto;
  }
  .info {
    order: ${(props) => props.theme.common.infoIconBox.order};
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
