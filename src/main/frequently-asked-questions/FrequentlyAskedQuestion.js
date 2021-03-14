import styled from "styled-components";

const Style = styled.div`
  padding: 2rem;
  :hover {
    .answer {
      height: 128px;
      padding: 0.5rem;
    }
    .question {
      padding: 0.5rem;
    }
  }
  .question {
    padding: 2rem;
    font-weight: bold;
    font-size: 1.25rem;
    transition: padding 0.25s ease-in-out;
  }
  .answer {
    height: 0;
    overflow-y: hidden;
    color: whitesmoke;
    transition: height 0.25s ease-in-out, padding 0.25s ease-in-out;
  }
`;

export default function ({ question, answer }) {
  return (
    <Style>
      <div className="question frosted-glass darkgrey-heading">{question}</div>
      <div className="answer frosted-glass-black">{answer}</div>
    </Style>
  );
}
