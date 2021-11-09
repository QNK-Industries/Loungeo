import React from 'react';
import styled from 'styled-components';

const StyledButtonWrapper = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border-radius: 50%;
  padding: 0;
  background: none;
  border: 1px solid transparent;
`;

const ActionImage = styled.img`
  background-color: white;
  border-radius: 50%;
  width: 30px;
  transition: all .5s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

const ActionButton = ({ type, product, actionFunc }) => {
  const icon = type === 'RELATED' ? '../../../images/infoicon.png' : 'X';
  return (
    <StyledButtonWrapper onClick={() => actionFunc(product)}>
      <ActionImage alt="action" src={icon} />
    </StyledButtonWrapper>

  );
};

export default ActionButton;
