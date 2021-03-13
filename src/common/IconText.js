import styled from "styled-components";

const Style = styled.div`
  background-color: turquoise;
  text-align: center;
  img {
    width: 50%;
    margin: 0 auto;
  }
`;

export default function ({ text, src }) {
  return (
    <Style>
      <img src={src} />
      <h4>{text}</h4>
    </Style>
  );
}
