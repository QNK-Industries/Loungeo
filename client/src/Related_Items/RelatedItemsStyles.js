import styled, { keyframes } from 'styled-components';

const focalWhite = '#FFF';
const focalDark = '#262730';
const magnolia = '#F8F0FB';
const accentColor = '#8D0801';

// RELATED ITEMS MODULE

const fadeIn = keyframes`
  0% {
    background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(125, 125, 125, 0), rgba(0, 0, 0, 0));
  }
  100% {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(125, 125, 125, 0.7), rgba(0, 0, 0, 0.7));
  }
`;

const fadeOut = keyframes`
  0% {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(125, 125, 125, 0.7), rgba(0, 0, 0, 0.7));
  }
  100% {
    background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(125, 125, 125, 0), rgba(0, 0, 0, 0));
  }
`;

const quickScaleDown = keyframes`
  0% {
    transform:scale(1);
  }
  99.9% {
    transform:scale(1);
  }
  100% {
    transform:scale(0);
  }
`;

const roadRunnerIn = keyframes`
  0% {
    transform:translateX(-1500px) translateY(-50%) skewX(30deg) scaleX(1.3);
  }
  70% {
    transform:translateX(-40%) translateY(-50%) skewX(0deg) scaleX(.9)
  }
  100% {
    transform:translateX(-50%) translateY(-50%) skewX(0deg) scaleX(1);
  }
`;

const roadRunnerOut = keyframes`
  0% {
    transform:translateX(-50%) translateY(-50%) skewX(0deg) scaleX(1);
  }
  30% {
    transform:translateX(-60%) translateY(-50%) skewX(0deg) scaleX(.9)
  }
  100% {
    transform:translateX(1500px) translateY(-50%) skewX(30deg) scaleX(1.3);
  }
`;

// CAROUSEL

export const StyledCarousel = styled.section`
  width: 80%;
  padding: 10px 50px;
  position: relative;
  margin: 0 auto;
  & div div div {
    ${(props) => (props.bucket ? 'justify-content: center' : '')}
  }
`;

export const CarousolButton = styled.div`
  position: absolute;
  top: 50%;
  ${(props) => props.action}: -200%;
  transform: translateY(-50%);

  button {
    width: 100px;
    height: 400px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .left-chev {
    transform: rotate(180deg)
  }

  .left-chev:hover {
    fill: ${accentColor}
  }

  @media (max-width: 1200px) {
    ${(props) => props.action}: -100%;
  }
`;

// COMPARISON MODAL

export const ModalContainer = styled.div`
  position:fixed;
  display:table;
  height:100%;
  width:100%;
  top:0;
  left:0;
  transform:scale(0);
  z-index:1;

    &.modal-container {
    transform:scale(1);

    .modal-background {
      background: rgba(0, 0, 0, 0);
      animation: ${fadeIn} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

      .modal {
        transform:translateX(-1500px);
        animation: ${roadRunnerIn} .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
    }

    &.close {
      animation: ${quickScaleDown} 0s .5s linear forwards;

      .modal-background {
        animation: ${fadeOut} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

        .modal {
          animation: ${roadRunnerOut} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        }
      }
    }
  }

  .modal-background {
    display:table-cell;
    background:rgba(0,0,0,.8);
    text-align:center;
    vertical-align:middle;
  }
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #fefefe;
  margin: 0 auto;
  padding: 40px;
  border-radius: 50px;
  width: 600px;

  & .compare-label, .comparison-container {
    display: flex;
    justify-content: space-between;
  }

  & .comparison-container span {
    width: 33.33%;
    white-space: nowrap;
  }

  & .comparison-container .compare-middle {
    text-align: center;
  }

  & .comparison-container .compare-right {
    text-align: right;
  }

  & .comparison-container .compare-left {
    text-align: left;
  }

  & img {
    width: 25px;
  }

  & h1 {
    font-size: 36px;
    margin: 0;
  }

  & h2 {
    font-size: 20px
  }
`;

// ITEM CARD

export const StyledItemCard = styled.div`

  background:#fff;
  padding:15px;
  border-radius:6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  position:relative;
  min-width: 250px;
  width: 300px;
  z-index: 1;

  .card-image-container{
    position:absolute;
    top:5px;
    left:50%;
    transform:translate(-50%);
    -webkit-transform:translate(-50%);
    -ms-transform:translate(-50%);
    -moz-transform:translate(-50%);
    -o-transform:translate(-50%);
    -khtml-transform:translate(-50%);
    width: 100%;
    height: 69%;
    padding: 15px;
    transition: all 0.2s ease-in-out;
  }

  .card-image-container img{
    width:100%;
    height: 100%;
    transition: all 0.2s ease-in-out;
    border-radius:6px;
    object-fit: cover;
    cursor: pointer;
  }

  &:hover .card-image-container{
    top:-40px;
  }

  &:hover .card-image-container img{
    box-shadow: 0 19px 25px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }

  .card-text{
    padding-top:150%;
  }

  .card-text .card-category{
    text-align:center;
    font-size:12px;
    font-weight:bold;
    position:absolute;
    transition: all 0.2s ease-in-out;
    bottom: 31%;
    left: 50%;
    cursor: pointer;
    transform:translate(-50%);
    -webkit-transform:translate(-50%);
    -ms-transform:translate(-50%);
    -moz-transform:translate(-50%);
    -o-transform:translate(-50%);
    -khtml-transform:translate(-50%);
  }

  .card-text .card-category > span{
    padding: 12px 30px;
    border: 1px solid #313131;
    white-space: pre;
    background:${focalDark};
    color:${focalWhite};
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    border-radius:27px;
    transition: all 0.05s ease-in-out;
  }

  &:hover .card-text .card-category > span{
    border:2px solid rgba(141, 8, 1, 0.88);
    box-shadow: none;
    padding: 11px 28px;
  }

  &:hover .card-text .card-category{
    margin-top: 0px;
  }

  .card-text .card-title{
    text-align:center;
  }

  .card-text .card-title h3{
    font-size:20px;
    font-weight:normal;
    margin:50px auto 5px;
    overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    width:100%;
  }

  .card-text .card-rating span{
    display: flex;
    justify-content: center;
  }

  .card-text .card-rating {
    width: 100%;
  }

  .card-text .card-rating img {
    width: 20px;
  }

  .card-footer{
    padding: 25px 0 5px;
    border-top: 1px solid #ddd;
  }

  .card-footer:after, .card-footer:before{
    content:'';
    display:table;
  }

  .card-footer:after{
    clear:both;
  }

  .card-footer .card-left{
    float:left;
  }

  .card-footer .card-right{
    float:right;
  }

  .card-price{
    font-size:18px;
    font-weight:bold;
  }

  @media (max-width: 1200px) {
    width: 275px;

    .card-image-container {
      height: 60%;
    }

    .card-text .card-category {
      bottom: 40%;
    }

    .card-text{
      padding-top:100%;
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 10px 40px;

  ${(props) => (props.first
    ? `height: 400px;
    width: 300px;`
    : `width: 100%;
    height: 100%;`)
}
`;

// ADD TO OUTFIT

export const OutfitDiv = styled.div`
  position: relative;
  perspective: 40em;
  display: grid;
  transform-style: preserve-3d;
  cursor: pointer;

  .outfit-card {
    grid-area: 1 / 1;
    height: 210px;
    width: 210px;
    transform: translateX(10px) rotateY(25deg) rotateX(10deg);
    background: rgba(141, 8, 1, 0.88);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 30px;
    color: #F8F0FB;
    text-transform: uppercase;
    font-size: 60px;
    font-weight: 900;
    backface-visibility: hidden;
    box-shadow: 0 10px 30px -3px rgba(0,0,0,.1);
  }

  h1 {
    font-size: 30px;
    font-weight: 500;
  }

  .outfit-card .enclosed {
    background: #F8F0FB;
    line-height: 1;
    color: rgba(141, 8, 1, 1);
    padding: 0 5px;
    display: inline-block;
    transform: translate(-1px, 1px) scale(0.75);
    transform-origin: right center;
  }

  &:before {
    --bw: 9px;
    grid-area: 1 / 1;
    content: '';
    backface-visibility: hidden;
    height: 100%;
    width: 100%;
    margin-top: calc(-1 * var(--bw));
    margin-left: calc(-1 * var(--bw));
    background: transparent;
    transform: translateX(-20px) rotateY(-30deg) rotateX(15deg) scale(1.03);
    pointer-events: none;
    border: var(--bw) solid #000;
    box-sizing: content-box;
  }

  .shopping {
    width: 40px;
    margin-left: auto;
    margin-right: 20px;
    display: block;
  }

  &:hover > div,
  &:hover:before {
    transform: none;
  }


  & > div,
  &:before {
    will-change: transform;
    transition: .3s transform cubic-bezier(.25,.46,.45,1);
  }


`;

// ACTION BUTTON

export const StyledButtonWrapper = styled.button`
  border-radius: 50%;
  padding: 0;
  background: none;
  border: 1px solid transparent;
`;

export const ActionImage = styled.img`
  background-color: white;
  border-radius: 50%;
  width: 30px;
  transition: all .25s ease-in;
  cursoer: pointer;

  &:hover {
    transform: scale(1.15);
    background-color: ${(props) => (props.type === 'RELATED' ? magnolia : 'rgba(141, 8, 1, 0.88)')}
  }
`;
