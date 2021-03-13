import { useEffect, useRef } from "react";
import styled from "styled-components";
import { guestReviews } from "../../data";

const Style = styled.div`
  min-height: 50px;
  animation: anim 5s infinite;
  @keyframes anim {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    95% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default function () {
  console.log(guestReviews());
  const ref = useRef();
  const reviews = guestReviews();
  useEffect(() => {}, []);
  var i = 0;
  function onAnimationIterationHandler(e) {
    const guestReview = reviews[++i < reviews.length ? i : (i = 0)];
    const guest = e.target.children[0];
    const review = e.target.children[1];
    guest.innerHTML = guestReview.guest;
    review.innerHTML = guestReview.review;
  }
  return (
    <Style ref={ref} onAnimationIteration={onAnimationIterationHandler}>
      <div>{reviews[0].guest}</div>
      <div>{reviews[0].review}</div>
    </Style>
  );
}
