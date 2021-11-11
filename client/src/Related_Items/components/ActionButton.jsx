import React from 'react';
import { StyledButtonWrapper, ActionImage } from '../RelatedItemsStyles.js';

const ActionButton = ({ type, product, actionFunc }) => {
  const icon = type === 'RELATED' ? '../../../images/infoicon.png' : '../../../images/x-mark.png';
  return (
    <StyledButtonWrapper onClick={() => actionFunc(product)}>
      <ActionImage alt="action" type={type} src={icon} />
    </StyledButtonWrapper>

  );
};

export default ActionButton;
