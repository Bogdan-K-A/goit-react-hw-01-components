import PropTypes from 'prop-types'
import Statistics from './Statistics'
import s from './Statistics.module.css'

function StatisticsList({ title, stats }) {
  return (
    <>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.statList}>
        {stats.map((el) => (
          <li className={s.item} key={el.id}>
            <Statistics label={el.label} percentage={el.percentage} />
          </li>
        ))}
      </ul>
    </>
  )
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
}

export default StatisticsList
