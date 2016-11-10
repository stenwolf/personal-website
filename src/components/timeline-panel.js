import React from 'react';

const TimelinePanel = ({heading, date, body}) => {

  return (
    <div className='timeline-panel'>
      <div className='timeline-heading row'>
        <h3>{heading}</h3>
        <span className='employment-date'>{date}</span>
      </div>
      <div className='timeline-body row'>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default TimelinePanel;
