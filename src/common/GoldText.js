import styled from "styled-components";

const Style = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline-block;

  .text {
    color: transparent;
  }
  .gold {
    position: relative;
    background-image: url("background-images/gold-gradient-text.jpg");
    background-size: 100% 125%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .shadow {
    position: absolute;
    color: transparent;
    text-shadow: 0 0 1px black;
  }
`;

export default function ({ fontSize = "1.25rem", children }) {
  return (
    <Style style={{ fontSize: fontSize }}>
      <div className="text shadow">{children}</div>
      <div className="text gold">{children}</div>
    </Style>
  );
}
