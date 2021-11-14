import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import MainLogo from './MainLogo.jsx';

const Span = styled.div`
  margin-left: -1vw;
  width: 100%;
  height: 5vh;
  background-color: #3D2645;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 100;

`;

const ActiveSpan = styled.div`
  width: 100vw;
  height: 5vh;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  z-index: 100;

  & div {
    top: 10px;
    right: 20px;
  }

`;

const Div = styled.div`
color: #F8F0FB;
font-size: 1rem;
cursor: pointer;
&:hover {
  color: white;
  border-bottom: white;
  text-decoration: underline;
}
position: absolute;
bottom:20%;
left: 92%;
`;

const BagDiv = styled.div`
  position: absolute;
  right: 0;
  height: 7vh;
  width: 7vh;
`;

const FontAwesomeBag = styled(FontAwesomeIcon)`
  color: #F8F0FB;
  font-size: 4.3vh;
  position: absolute;
  bottom: 18%;
`;

const ActiveFontAwesomeBag = styled(FontAwesomeIcon)`
  color: #3d2645;
  font-size: 4.3vh;
  position: absolute;
  bottom: 10%;
`;

const FontAwesomeCount = styled.span`
  color: #8D0801;
  font-size: 2.2vh;
  position: absolute;
  bottom: 18%;
  left: 17%;
`;

const ActiveFontAwesomeCount = styled.span`
  color: #F8F0FB;
  font-size: 2.2vh;
  position: absolute;
  bottom: 12%;
  left: 18%;
`;

export default function NavBar({ cart }) {
  // useEffect(() => {
  //   utils.getCart()
  //     .then((res) => {
  //       setCart(res.data);
  //       console.log(res.data);
  //     });
  // }, []);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    colorChange
      ? (
        <ActiveSpan>
          {/* <MainLogo /> */}
          {/* <Div>New</Div>
      <Div>Contact</Div>
      <Div>About</Div> */}
          <BagDiv>
            <ActiveFontAwesomeBag icon={faShoppingBag} />
            <ActiveFontAwesomeCount>{cart}</ActiveFontAwesomeCount>
          </BagDiv>
        </ActiveSpan>
      )
      : (
        <Span>
          <MainLogo />
          <Div>Sign In</Div>
          {/* <Div>New</Div>
      <Div>Contact</Div>
      <Div>About</Div> */}
          <BagDiv>
            <FontAwesomeBag icon={faShoppingBag} />
            <FontAwesomeCount>{cart}</FontAwesomeCount>
          </BagDiv>
        </Span>
      )

  );
}
