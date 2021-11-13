import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  width: 100%;
  height: 3vh;
  background-color: #3D2645;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  bottom: 0;
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
margin-right: 10px;

`;

const LeftDiv = styled.div`
color: #F8F0FB;
font-size: 1rem;
cursor: pointer;
&:hover {
  color: white;
  border-bottom: white;
  text-decoration: underline;
}
margin-left: 10px;
flex: 1;

`;

export default function Footer() {
  // useEffect(() => {
  //   utils.getCart()
  //     .then((res) => {
  //       setCart(res.data);
  //       console.log(res.data);
  //     });
  // }, []);

  return (
    <Span>
      <LeftDiv>QNK Industries</LeftDiv>
      <Div>Contact</Div>
      <Div>About</Div>
    </Span>
  );
}
