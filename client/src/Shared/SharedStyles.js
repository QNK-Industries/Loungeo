import styled from 'styled-components';

const offGrey = '#7D8491';

export const SectionSplitHeader = styled.h2`
  position: relative;
  text-align: center;
  padding: .2rem 0;
  overflow: hidden;
  margin-bottom: 0;
`;

export const SectionSplitText = styled.span`
  display: inline-block;
  position: relative;
  padding: 0 0.5em;

  &:before, &:after {
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    width: 70em;
    border-top: 1px solid ${offGrey};
  }

  &:before {
    right: 100%;
  }

  &:after {
    left: 100%;
  }
`;
