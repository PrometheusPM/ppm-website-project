import styled from "styled-components";

const Style = styled.div`
  padding: 2rem;
  background-color: firebrick;
  :hover {
    .answer {
      height: 100%;
      padding-top: 1rem;
    }
  }
  .question {
    background-color: yellowgreen;
  }
  .answer {
    height: 0;
    overflow-y: hidden;
    background-color: lightblue;
  }
`;
const Question = styled.div`
  font-weight: bold;
  padding-bottom: 0.25rem;
`;
const Answer = styled.div`
  height: 0;
  transition: height 0.25s ease-in-out;
`;
export default function ({ question, answer }) {
  return (
    <Style>
      <div className="question">{question}</div>
      <div className="answer">{answer}</div>
    </Style>
  );
}
