import styled from 'styled-components';

// RELATED ITEMS MODULE

export const CarousolHeader = styled.h2`
  position: relative;
  text-align: center;
  padding: .2rem 0;
  overflow: hidden;
`;

export const CarousolText = styled.span`
  display: inline-block;
  position: relative;
  padding: 0 0.5em;

  &:before, &:after {
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    width: 70em;
    border-top: 1px solid #ccc;
  }

  &:before {
    right: 100%;
  }

  &:after {
    left: 100%;
  }
`;

// CAROUSEL

export const StyledCarousel = styled.section`
  display: flex;
  justify-content: center;
  width: 90%;
  padding: 10px 50px;
  align-items: center;
  margin: 0 auto;
  position: relative;
`;

export const CarousolButton = styled.div`
  position: absolute;
  top: 50%;
  ${(props) => props.action}: 0;
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
`;

// COMPARISON MODAL

export const StyleModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: #fefefe;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid yellow;
  width: 600px;

  & .compare-label, .comparison-container {
    display: flex;
    justify-content: space-between;
  }

  & .comparison-container span {
    width: 33.33%;
  }

  & .comparison-container .compare-middle {
    text-align: center;
  }

  & .comparison-container .compare-right {
    text-align: right;
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
  margin: 0 30px;

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
  }

  &:hover .card-image-container{
    top:-40px;
  }

  &:hover .card-image-container img{
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
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
    background:#212121;
    color:#fff;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    border-radius:27px;
    transition: all 0.05s ease-in-out;
  }

  &:hover .card-text .card-category > span{
    border:2px solid red;
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
    font-weight:bold;
    margin:25px auto 5px;
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
`;

// ADD TO OUTFIT

export const OutfitDiv = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  border: solid 1px black;
  text-align: center;
  margin: 25px;
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
    background-color: ${(props) => (props.type === 'RELATED' ? 'lightblue' : 'red')}
  }
`;
