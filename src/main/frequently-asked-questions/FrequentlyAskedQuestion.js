import styled from "styled-components";

const Style = styled.div`
  margin: 2rem;
  :hover {
    .answer {
      height: ${(props) => props.theme.faq.answerHeight};
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

export default function ({ question, answer }) {
  return (
    <Style>
      <div className="question frosted-glass darkgrey-heading">{question}</div>
      <div className="answer frosted-glass-black">{answer}</div>
    </Style>
  );
}
