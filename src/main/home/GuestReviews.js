import { useEffect, useRef } from "react";
import styled from "styled-components";
import { guestReviews } from "../../data";

const Style = styled.div`
  color: whitesmoke;
  text-shadow: 1px 1px 1px black;
  .guest {
    box-sizing: border-box;
    margin: 0 auto;
    font-weight: bold;
    padding: 1rem;
  }
  .review {
    font-size: ${(props) => props.theme.font.text.size};
    :before,
    :after {
      content: '"';
    }
  }
  .inner {
    min-height: 50px;
    display: flex;
    align-items: center;
    padding: 0.5rem;
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
    <Style ref={ref} className="frosted-glass-black">
      <div className="inner" onAnimationIteration={onAnimationIterationHandler}>
        <div className="guest">{reviews[0].guest}</div>
        <div className="review">{reviews[0].review}</div>
      </div>
    </Style>
  );
}
