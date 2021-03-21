import { useEffect, useRef } from "react";
import styled from "styled-components";

const Style = styled.div`
  --height: 100px;
  margin: 2rem;
  :hover {
    .answer {
      height: var(--height);
      padding: 0.5rem;
    }
    .question {
      padding: 0rem;
    }
  }
  .question {
    padding: 2rem;
    font-weight: bold;
    font-size: ${(props) => props.theme.font.heading.size};
    transition: padding 0.125s ease-in-out;
  }
  .answer {
    height: 0;
    font-size: ${(props) => props.theme.font.text.size};
    overflow-y: hidden;
    color: whitesmoke;
    transition: height 0.125s ease-in-out, padding 0.125s ease-in-out;
  }
`;
export default function ({ question, answer, answerHeight = "125px" }) {
  const ref = useRef();
  useEffect(() => {
    ref.current.style.setProperty("--height", answerHeight);
  });
  return (
    <Style ref={ref}>
      <div className="question frosted-glass darkgrey-heading">{question}</div>
      <div className="answer frosted-glass-black">{answer}</div>
    </Style>
  );
}
