import React from 'react';
import PropTypes from 'prop-types';
import { StatItem } from '../ui/index';
import getRandomHexColor from '../../utils/ColorRandom';

function StatisticItem({ label, percent }) {
  return (
    <StatItem backgroundColor={getRandomHexColor()}>
      <span>{label}</span>
      <span>{percent}%</span>
    </StatItem>
  );
}

export default StatisticItem;

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};
