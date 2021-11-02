import React from 'react';
import styled from 'styled-components';

const StyledButtonWrapper = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 10px 0 0;
`;

const ActionButton = ({ type, product, actionFunc }) => {
  const icon = type === 'RELATED' ? '☆' : 'X';
  return (
    <StyledButtonWrapper onClick={() => actionFunc(product)}>
      <span>{icon}</span>
    </StyledButtonWrapper>

  );
};

export default ActionButton;
