import React, { useState } from 'react';
import styled from 'styled-components';
import utils from '../utils.js';

const StyledHelpful = styled.div`
  & span {
    margin-left: 5px;
  }
`;

const Votes = styled.span`
  color: ${(props) => (props.selectedThis ? props.color : 'black')};
  cursor: pointer;

  & :hover {
    color: ${(props) => (!props.selectedOne || props.selectedThis ? props.color : 'black')};
    ${(props) => (props.selectedOne ? '' : 'border-bottom: 1px black solid;')}
  }
`;

const HelpfulBar = ({ reviewId, helpfulness }) => {
  const [selectedVote, setSelectedVote] = useState('');
  const [selectedReport, setSelectedReport] = useState(false);
  const [yesReview, setYesReview] = useState(helpfulness);
  const [noReview, setNoReview] = useState(0);

  function castVote(vote) {
    if (selectedVote === '') {
      setSelectedVote(vote);
      if (vote === 'YES') {
        setYesReview(yesReview + 1);
        utils.voteHelpful(reviewId);
      } else {
        setNoReview(noReview + 1);
      }
    }
  }

  function reportPost() {
    if (!selectedReport) {
      setSelectedReport(true);
      utils.reportPost(reviewId);
    }
  }

  return (
    <StyledHelpful>
      <span>
        Helpful?
      </span>
      <Votes color="green" selectedOne={selectedVote !== ''} selectedThis={selectedVote === 'YES'} onClick={() => castVote('YES')}>
        Yes ({yesReview})
      </Votes>
      <Votes color="darkorange" selectedOne={selectedVote !== ''} selectedThis={selectedVote === 'NO'} onClick={() => castVote('NO')}>
        No ({noReview})
      </Votes>
      <span>
        |
      </span>
      <Votes color="darkred" selectedOne={selectedReport} selectedThis={selectedReport} onClick={() => reportPost()}>
        Report
      </Votes>
    </StyledHelpful>
  );
};

export default HelpfulBar;
