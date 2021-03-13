import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";
import { frequentlyAskedQuestions } from "../../data";
import FlexGrid from "../../common/FlexGrid";
import styled from "styled-components";

export default function () {
  return (
    <FlexGrid
      title="Frequently Asked Questions"
      padding={2}
      cols={2}
      items={frequentlyAskedQuestions().map((frequentlyAskedQuestion) => (
        <FrequentlyAskedQuestion {...frequentlyAskedQuestion} />
      ))}
    />
  );
}
