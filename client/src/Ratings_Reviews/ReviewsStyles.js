import styled from 'styled-components';

// const focalWhite = '#FFF';
const focalDark = '#262730';
const magnolia = '#F8F0FB';
const accentColor = '#8D0801';
const offGrey = '#7D8491';

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

    .slidebar-section {
      margin-bottom: 20px;
    }

    h5 {
      transform: translateX(-3%);
      font-size: 1rem;
      margin: 10px 0;
    }
  }

  & h4 {
    text-align: center;
  }

  & .ratings-table {
    h4 {
      width: 70%;
      margin: 0 auto;

      span {
        font-weight: 700px;
      }
    }
  }
`;

// ------------------    LEFT SIDE STYLES    ----------------------

export const ReveiwScoreHeader = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  padding: 25px;

  & .review-star-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const RemoveFilterBox = styled.div`
  width: 150px;
  height: 33px;
  margin: 0 auto;
  cursor: pointer;
  text-align: center;

  & span {
    font-size: 10px;
  }
`;

export const StyledSlider = styled.div`
  width: 300px;
  border-bottom: 3px solid ${offGrey};
  margin: 10px 0;
  position: relative;
`;

export const SliderDetailText = styled.div`
  display: flex;
  width: 105%;
  transform: translateX(-2.5%);

  & div {
    width: 33.33%;

    &.slider-text-center {
      text-align: center;
    }

    &.slider-text-right {
      text-align: right;
    }

    &.slider-text-left {
      text-align: left;
    }
  }

  & small {
    font-size: 10px;
  }
`;

export const StyleDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${offGrey};
  position: absolute;
  left: ${(props) => props.position}%;
  transform: translateY(-33%) translateX(-50%);
`;

export const RatingDot = styled.div`
  width: 12.5px;
  height: 12.5px;
  background-color: ${focalDark};
  position: absolute;
  left: ${(props) => props.position}%;
  transform: translateY(-42%) translateX(-50%) rotate(45deg);
`;

export const StyledReviewButton = styled.button`
  margin: 20px;
  outline: none;
  width: 130px;
  height: 40px;
  padding: 10px 25px;
  border: 2px solid #000;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  background: ${focalDark};
  color: ${magnolia};
  line-height: 42px;
  padding: 0;
  border: none;

  &:hover {
    background: transparent;
    color: ${focalDark};
    box-shadow:
    -7px -7px 20px 0px #fff9,
    -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #8d080147,
    4px 4px 5px 1px #8d080140;
  }

  &:before, &:after {
    content:'';
    position:absolute;
    top:0;
    right:0;
    height:2px;
    width:0;
    background: ${focalDark};
    transition:400ms ease all;
  }

  &:after {
    right:inherit;
    top:inherit;
    left:0;
    bottom:0;
  }

  &:hover:before,
  &:hover:after {
    width:100%;
    transition:800ms ease all;
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
  padding: 15px 0;
  background-color: ${(props) => (props.selected ? 'lightgrey' : 'transparent')};

  & :hover {
    background-color: ${(props) => (props.selected ? 'darkgrey' : 'lightgrey')};
  }
`;

export const BarDisplay = styled.div`
  width: 200px;
  height: 15px;
  background-color: #e3e3e3;
`;

export const FilledBar = styled.div`
  height: 100%;
  width: ${(props) => props.filled}%;
  background-color: ${accentColor};
`;

export const TextSegment = styled.span`
width: 50px;
margin 0 auto;
white-space: nowrap;
text-align: center;
padding-bottom: 2px;

& .star-bar-stars {
  border-bottom: solid 1px black;
  padding-bottom: 1px;
}
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
