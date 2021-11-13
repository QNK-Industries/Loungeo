import styled from 'styled-components';

const QAVote = styled.span`
font-family: 'Hind sans-serif';




color: ${(props) => (props.selectedThis ? props.color : 'black')};
cursor: pointer;

& :hover {
  color: ${(props) => (!props.selectedOne || props.selectedThis ? props.color : 'black')};
  ${(props) => (props.selectedOne ? '' : 'border-bottom: 1px black solid;')}
}

`;

export default QAVote;
