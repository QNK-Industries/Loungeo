import React, { useState, useEffect } from 'react';
import { StyledHelpful, Votes } from '../ReviewsStyles.js';
import utils from '../../Shared/serverUtils.js';

const HelpfulBar = ({ reviewId, helpfulness }) => {
  const [selectedVote, setSelectedVote] = useState('');
  const [selectedReport, setSelectedReport] = useState(false);
  const [yesReview, setYesReview] = useState(helpfulness);
  const [noReview, setNoReview] = useState(0);

  useEffect(() => setYesReview(helpfulness), [reviewId]);

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
