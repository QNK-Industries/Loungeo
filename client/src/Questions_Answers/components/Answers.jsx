import React, { useState } from 'react';
// import axios from 'axios';
import moment from 'moment';
import utils from '../../Shared/serverUtils.js';
import AddHelpful from '../stylings/AddHelpful.js';
import AddReport from '../stylings/AddReport.js';

const AnswerStyle = {
  marginLeft: '15px',
  fontFamily: 'Hind sans-serif',
};

// const GH_TOKEN = require('../../../../tokens.js');

const Answers = ({
  body, asker, date, helpful, id, addHelpful,
}) => {
  const putRequest = 'answers';
  const [wasHelpful, setHelpful] = useState(false);
  const [wasReported, setReported] = useState(false);

  const reportAnswer = (reportId) => {
    // axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers/${reportId}/report`, {}, {
    //   headers: {
    //     Authorization: GH_TOKEN.GH_TOKEN,
    //   },
    // })
    utils.reportAnswer(reportId)
      .then((res) => console.log('Answer reported ', res.data));
  };

  return (
    <div data-testid="AnswerWrapper" style={AnswerStyle}>
      <br />
      <strong>A</strong> {body}
      <br />
      <br />
      By {asker === 'Seller' ? <strong>{asker}</strong> : asker}, {moment(date).utc().format('MMMM D, YYYY')} |  Helpful? {
        wasHelpful
          ? <span style={{ color: 'green', fontFamily: 'Hind sans-serif' }}> Yes ({helpful}) </span>
          : (
            <AddHelpful
              // style={{ fontFamily: 'Hind sans-serif' }}
              role="button"
              tabIndex={0}
              onClick={() => {
                addHelpful(id, putRequest);
                setHelpful(true);
              }}
              onKeyDown={(e) => console.log(e)}
            >
              Yes ({helpful})
            </AddHelpful>
          )
      } | { wasReported
        ? <span role="button" style={{ color: 'red', fontFamily: 'Hind sans-serif' }} tabIndex={0} onClick={() => alert('This Answer Has Already Been Reported')} onKeyDown={(e) => console.log(e)}>Report</span>
        : <AddReport role="button" style={{ fontFamily: 'Hind sans-serif' }} tabIndex={0} onClick={() => { reportAnswer(id); setReported(true); alert('Answer Reported'); }} onKeyDown={(e) => console.log(e)}>Report</AddReport>}
    </div>
  );
};

export default Answers;
