import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';

export default function CalendarDayHeaders(props) {
  const {
    className,
    dayAbbrevs,
    firstWeekday,
    gutterWidth,
  } = props;

  return (
    <div className={classNames('tt-cal-dayHeaders', className)}>
      {_.range(firstWeekday, firstWeekday + 7).map((weekday, idx) => (
        <div
          key={weekday % 7}
          className="tt-cal-columnHeader"
          style={{
            marginLeft: (idx === 0 ? null : gutterWidth),
          }}
        >
          {dayAbbrevs[weekday % 7]}
        </div>
      ))}
    </div>
  );
}

CalendarDayHeaders.propTypes = {
  className: PropTypes.string,
  dayAbbrevs: PropTypes.arrayOf(PropTypes.string).isRequired,
  firstWeekday: PropTypes.number.isRequired,
  gutterWidth: PropTypes.string,
};
