import styled from "styled-components";

const Style = styled.div`
  display: inline-block;
  box-sizing: border-box;
  height: 100%;
  text-align: center;
  padding: 0.5rem;
  font-size: ${(props) => props.theme.common.iconText.fontSize};
  margin: 0 auto;
  img {
    width: ${(props) => props.theme.common.iconText.iconWidth};
    margin: 0 auto;
  }
`;

export default function ({ text, src }) {
  return (
    <Style className="frosted-glass">
      <div className="inner ">
        <img src={src} />
        <h4>{text}</h4>
      </div>
    </Style>
  );
}
