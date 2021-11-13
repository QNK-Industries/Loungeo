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
    position: relative;

    .review-fade {
      content: "";
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 0;
      pointer-events: none;
      background-image: linear-gradient(to bottom,rgb(248 240 251 / 0%),hsl(284deg 58% 96% / 90%) 90%);
      width: 100%;
      height: 4em;
    }
  }

  & .reviews-nav-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 15px 25px;
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
      font-weight: 500;
    }
  }

  & h4 {
    text-align: center;
  }

  & .ratings-table {
    h4 {
      width: 70%;
      margin: 0 auto;
      font-weight: 500;

      span {
        font-weight: 700;
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

export const StyledReviewSearch = styled.div`
  outline: none;

  .search-container {
    overflow: hidden;
    float: right;
    height: 4em;
    width: 4em;
    border-radius: 2em;
    box-shadow: 0 0 5px #26273069;
    -moz-transition: all 0.35s;
    -webkit-transition: all 0.35s;
  }

  .search-container:hover, .search-container:focus, .search-container:focus-within {
    width: 25em;
    border-radius: 5px 2em 2em 5px;
    outline: none;
  }

  .search-container:hover input, .search-container:focus input,
  .search-container:focus-within input {
    display: inline-block;
    width: 19em;
    padding: 10px;
  }

  input {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    float: left;
    width: 0em;
    height: 2em;
    margin: 1em;
    margin-right: -4.5em;
    background: #fff;
    color: #6A5D4F;
    font-size: 1em;
    font-weight: 500;
    padding: 0px;
    border: 0;
    border-radius: 5px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2) inset;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    -moz-transition: all 0.25s;
    -webkit-transition: all 0.25s;
  }

  input:focus {
    outline: none;
    box-shadow: 0 -1px 1px rgba(255, 255, 255, 0.25), 0 1px 5px rgba(0, 0, 0, 0.15);
  }

  .search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  width: 1.75em;
  height: 1.75em;
  margin: 0.125em;
  background: ${focalDark};
  text-align: center;
  font-size: 2em;
  color: #FDF6E3;
  border-radius: 50%;
  box-shadow: 0 -1px 1px rgba(255, 255, 255, 0.25), 0 1px 1px rgba(0, 0, 0, 0.25);
  text-shadow: 0 -2px 1px rgba(0, 0, 0, 0.3);
  }

  .search-button:active {
  border: 0;
  text-shadow: 0 0 0;
  }

  .search-button {
    padding: 8px;
  }
`;

export const StyledSortBar = styled.div`
  margin-bottom: 5px;
  transform: translateY(18%);

  h4 {
    margin: 0;
    text-align: left;
    padding-bottom: 2px;
    font-size: 12px;
  }

  .review-select {
    position: relative;
    min-width: 200px;
  }

  .review-select select {
    -webkit-appearance: none;
    padding: 7px 40px 7px 12px;
    width: 100%;
    border: 1px solid #e8eaed;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 1px 3px -2px #9098a9;
    cursor: pointer;
    font-family: inherit;
    font-size: 16px;
    transition: all 150ms ease;
  }

  .review-select select option {
    color: #223254;
  }
  .review-select select option[value=""][disabled] {
    display: none;
  }
  .review-select select:focus {
    outline: none;
    border-color: ${accentColor};

  }
  .review-select select:hover + svg {
    stroke: ${accentColor};
  }
  .sprites {
    position: absolute;
    width: 0;
    height: 0;
    pointer-events: none;
    user-select: none;
  }
`;

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

export const ReviewsWrapper = styled.div`
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;

`;

// ------------------    FORM STYLES    ----------------------

export const StyledReview = styled.div`
  margin-bottom: 30px;
  padding: 0 50px;

  & .review-summary {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  & .review-body {
    font-size: 14px;
  }

  & .spaced-form-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
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
  padding: 1px 36px;
  border-radius: 5px;
  margin: 10px auto;
  background-color: #8d080191;
`;

export const ReviewPhotos = styled.div`
  padding-bottom: 20px;
  display: flex;
  justify-content: center;

  & img {
    max-width: 150px;
    max-height: 150px;
    margin-right: 10px;
    margin-top: 5px;
    object-fit: cover;
  }
`;

export const ReviewShowButton = styled.button`
  background: transparent;
  border: none;
  padding: 5px 0 2px 0;
  margin: 0;
  width: fit-content;
  border-bottom: solid 1px black;
  cursor: pointer;
`;

export const Highlight = styled.span`
  background-color: ${(props) => (props.active ? '#8d080191' : 'transparent')}
`;

export const SelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 75px;
  width: 45%;
  margin-top: 25px;

  & label, div {
    width: 16.66%;
  }

  & label {
    padding: 0;
    align-items: center;
    font-size: 12px;
  }

  & div {
    text-align: end;
    padding-right: 5px;
  }

  & h3 {
    margin: 0;
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
  display: flex;
  align-items: center;

  & span {
    margin-right: 15px;
    font-size: 15px;
  }

  & label {
    position: relative;
  }

  & .star img {
    transform: translateY(12.5%);
  }
`;

export const HiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
  top: 70%;
  left: 45.5%;
  transform: translateX(-50%) translateY(-50%);
  padding: 0;
  margin: 0;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: #fefefe;
  margin: 0 auto;
  padding: 10px 45px;
  border: 1px solid yellow;
  width: ${(props) => (props.submitted ? '30vw' : '80vw')};
  max-width: 1200px;
  height: ${(props) => (props.submitted ? '10vh' : '90vh')};;
  z-index: 2;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const Title = styled.div`
  text-align: center;

  h1 {
    margin: 5px;
  }

  p {
    margin-bottom: 10px;
    font-size: 12.5px;

    span {
      font-weight: 700;
    }
  }
`;

export const RatingAndRecommend = styled.div`
  display: flex;
  justify-content: space-between;
  & .do-you-recommend {
    display: flex;
    align-items: center;

    span {
      margin-right: 15px;
      font-size: 15px;
    }
  }
`;

export const CharacteristicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FieldContainer = styled.div`
margin-bottom: 10px;

& label {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

& remaining-characters {
  width: 70%;
}
`;

export const InputContainer = styled.div`
  width: 800px;
  height: ${(props) => (props.inputType === 'body' ? '100px' : '25px')};
  margin-left: 10px;
  position: relative;

  & input {
    width: 800px;
    height: 25px;
    position: relative;
  }

  & textarea {
    width: 800px;
    height: 100px;
    resize: none;
    position: relative;
  }
`;

export const RequiredCharacters = styled.div`
  position: absolute;
  right: 5px;
  bottom: 0;
`;

export const PhotoUploadContainer = styled.div`
  display: flex;
  justify-content: center;

  & img {
    max-width: 100px;
  }

  & .photo-bucket {
    display: flex;
    flex-direction: column;
  }
`;

export const PersonalInformationContainer = styled.div`
  display: flex;
  justify-content: space-around;

  $ label {
    display: flex;
    flex-wrap: wrap;
  }

  & input {
    margin-left: 5px;
    width: 300px;
  }

  & div {
    width: 100%;
    text-align: end;
  }
`;
