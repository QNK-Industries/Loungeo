import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import MainLogo from './MainLogo.jsx';

const Span = styled.span`
  width: 100vw;
  height: 7vh;
  background-color: #3D2645;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  z-index: 100;

`;

const ActiveSpan = styled.span`
  width: 100vw;
  height: 7vh;
  background-color: #3D2645;
  opacity: 80%;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  z-index: 100;

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
bottom:30%;
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
  font-size: 5.5vh;
  position: absolute;
  bottom: 10%;
`;

const FontAwesomeCount = styled.span`
  color: #8D0801;
  font-size: 2.5vh;
  position: absolute;
  bottom: 10%;
  left: 22%;
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
          <MainLogo />
          <Div>Sign In</Div>
          {/* <Div>New</Div>
      <Div>Contact</Div>
      <Div>About</Div> */}
          <BagDiv>
            <FontAwesomeBag icon={faShoppingBag} />
            <FontAwesomeCount>{cart}</FontAwesomeCount>
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
