import PropTypes from 'prop-types';
import Statistics from './Statistics';

function StatisticsList({ title, stats }) {
  return (
    <ul className="stat-list">
      <h2 className="title">{title}</h2>
      {stats.map(el => (
        <li className="item" key={el.id}>
          <Statistics label={el.label} percentage={el.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatisticsList;
