import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import { Container, StatTitle, StatList, ContainerLimiter } from '../ui/index';

function Statistic({ title, data }) {
  return (
    <Container>
      <ContainerLimiter>
        {title && <StatTitle>{title}</StatTitle>}
        <StatList>
          {data &&
            data.map(item => (
              <StatisticItem
                key={item.id}
                label={item.label}
                percent={item.percentage}
              />
            ))}
        </StatList>
      </ContainerLimiter>
    </Container>
  );
}

export default Statistic;

Statistic.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

/* <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>; */
