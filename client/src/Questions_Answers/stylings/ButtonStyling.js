import styled from 'styled-components';

const focalDark = '#262730';
const magnolia = '#F8F0FB';

const ButtonStyling = styled.button`
  margin: 20px;
  outline: none;
  width: 130px;
  height: 40px;
  padding: 10px 25px;
  border: 2px solid #000;
  border-radius: 50px;
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

export default ButtonStyling;
