import styled from 'styled-components';

export const RatingsAndReviewsWrapper = styled.section`
  display: flex;
  justify-content: center;

  & .ratings-left-section {
    width: 400px;

    h2 {
      font-size: 16px;
    }
  }

  & .ratings-right-section {
    width: 800px;
  }

  & .reviews-nav-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  & .review-button-container {
    display: flex;
    justify-content: space-evenly;
  }

  & .ratings-slide-bar-wrapper {
    width: 300px;
    margin: 0 auto;
  }

  & h4 {
    text-align: center;
  }
`;

// ------------------    LEFT SIDE STYLES    ----------------------

export const ReveiwScoreHeader = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & h1 {
    font-size: 36px;
    margin: .5em;
  }

  & .review-star-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const RemoveFilterBox = styled.div`
  width: 150px;
  height: 25px;
  margin: 0 auto;
  cursor: pointer;
  text-align: center;
  padding-top: 5px;
`;

export const StyledSlider = styled.div`
  width: 300px;
  border-bottom: 5px solid black;
  margin: 10px 0;
  position: relative;
`;

export const SliderDetailText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;

  & span {
    width: 33.33%;
    text-align: ${(props) => props.position};
  }
`;

export const StyleDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  left: ${(props) => props.position}%;
  transform: translateY(-25%) translateX(-25%);
`;

export const RatingDot = styled.div`
  width: 15px;
  height: 15px;
  background-color: purple;
  position: absolute;
  left: ${(props) => props.position}%;
  transform: translateY(-25%) translateX(-25%) rotate(45deg);
`;

export const StyledReviewButton = styled.div`
  width: 150px;
  height: 50px;
  border: 1px solid black;
  cursor: pointer;
  text-align: center;
  line-height: 50px;
  transition: all 0.2s ease-in;

  & h5 {
    margin: 0;
  }

  & :hover {
    transform: scale(1.05);
  }
`;

export const IndividualStarBar = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 20px;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? 'yellow' : 'white')};

  & :hover {
    background-color: ${(props) => (props.selected ? 'darkgrey' : 'lightgrey')};
  }
`;

export const BarDisplay = styled.div`
  width: 200px;
  height: 10px;
  background-color: grey;
`;

export const FilledBar = styled.div`
  height: 100%;
  width: ${(props) => props.filled}%;
  background-color: green;
`;

export const TextSegment = styled.span`
width: 50px;
margin 0 auto;
`;

// ------------------    RIGHT SIDE STYLES    ----------------------

export const StyledHelpful = styled.div`
  & span {
    margin-left: 5px;
  }
`;

export const Votes = styled.span`
  color: ${(props) => (props.selectedThis ? props.color : 'black')};
  cursor: pointer;

  & :hover {
    color: ${(props) => (!props.selectedOne || props.selectedThis ? props.color : 'black')};
    ${(props) => (props.selectedOne ? '' : 'border-bottom: 1px black solid;')}
  }
`;

// ------------------    FORM STYLES    ----------------------

export const StyledReview = styled.div`
  margin-bottom: 30px;
  padding: 0 15px;

  & .review-summary {
    font-size: 24px;
  }

  & spaced-form-content {
    display: flex;
    justify-content: space-between;
  }
`;

export const ReviewBorder = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-top: 5px;
  border-bottom: solid 2px lightgrey;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SellerResponse = styled.div`
  width: 80%;
  padding: 5px 20px;
  margin: 0 auto;
  background-color: lightgreen;
`;

export const ReviewPhotos = styled.div`
  padding: 20px;
  display: flex;

  & img {
    max-width: 150px;
    max-height: 150px;
    margin-right: 10px;
  }
`;

export const ReviewShowButton = styled.button`
  width: fit-content;
  border-bottom: solid-1px black;
`;

export const Highlight = styled.span`
  background-color: ${(props) => (props.active ? 'yellow' : 'transparent')}
`;

export const SelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75px;
  width: 45%;

  & label, div {
    width: 16.66%;
  }

  & label {
    align-items: center;
    font-size: 12px;
  }

  & div {
    text-align: end;
    parring-right: 5px;
  }

  & h3 {
    line-height: 75px;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 20px;

  & input {
    margin: 3px 3px 0 3px;
  }
`;

export const FormOverallRating = styled.div`
  & label {
    position: relative;
  }
`;

export const HiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 0;
  margin: 0;
`;
