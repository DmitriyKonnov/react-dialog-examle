import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Calendar from 'dayjs/plugin/calendar';
import './style.css';

dayjs.extend(Calendar);

const Title = ({date}) => {
    <div className='title'>
        {dayjs(date).calendar(null, {
            sameDay: '[Сегодня]',
            lastWeek: 'DD MMMM',
            sameElse: 'DD MMMM YYYY',
        })}
    </div>
}

Title.prototype = {
    date: PropTypes.string.isRequired,
};

export default Title;